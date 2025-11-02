import React, { useState, useEffect } from 'react';
import { getOrders, updateOrder, deleteOrder } from '../services/api';

export default function OrderTable() {
  const [orders, setOrders] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [editStatus, setEditStatus] = useState('');

  const fetchOrders = async () => {
    try {
      const res = await getOrders();
      if (res.success) setOrders(res.data);
    } catch (err) {
      console.error('Error fetching orders:', err);
    }
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  const startEdit = (order) => {
    setEditingId(order.id);
    setEditStatus(order.status);
  };

  const saveEdit = async (id) => {
    try {
      await updateOrder(id, editStatus);
      setEditingId(null);
      fetchOrders(); 
    } catch (err) {
      console.error('Error updating order:', err);
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteOrder(id);
      fetchOrders(); 
    } catch (err) {
      console.error('Error deleting order:', err);
    }
  };

  return (
    <table>
      <thead>
        <tr>
          <th>ID</th><th>Customer</th><th>Product</th><th>Qty</th><th>Date</th><th>Status</th><th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {orders.map(order => (
          <tr key={order.id}>
            <td>{order.order_id}</td>
            <td>{order.customer_name}</td>
            <td>{order.product}</td>
            <td>{order.quantity}</td>
            <td>{order.order_date}</td>
            <td>
              {editingId === order.id ? (
                <select value={editStatus} onChange={e => setEditStatus(e.target.value)}>
                  <option value="Pending">Pending</option>
                  <option value="Completed">Completed</option>
                </select>
              ) : (
                <span className={`status-${order.status}`}>{order.status}</span>
              )}
            </td>
            <td>
              {editingId === order.id ? (
                <>
                  <button onClick={() => saveEdit(order.id)}>Save</button>
                  <button onClick={() => setEditingId(null)}>Cancel</button>
                </>
              ) : (
                <>
                  <button onClick={() => startEdit(order)}>Edit</button>
                  <button onClick={() => handleDelete(order.id)}>Delete</button>
                </>
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
