import React, { useState } from 'react';
import { createOrder } from '../services/api';

export default function OrderForm({ onOrderAdded }) {
  const [form, setForm] = useState({
    order_id: '',
    customer_name: '',
    product: '',
    quantity: '',
    order_date: '',
    status: 'Pending',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
    console.log(`Input changed: ${name} = ${value}`);
  };

  const validate = () => {
    const errs = {};
    if (!form.order_id) errs.order_id = 'Order ID is required';
    if (!form.customer_name) errs.customer_name = 'Customer name is required';
    if (!form.product) errs.product = 'Product is required';
    if (!form.quantity || form.quantity <= 0) errs.quantity = 'Quantity must be greater than 0';
    if (!form.order_date) errs.order_date = 'Order date is required';
    setErrors(errs);
    console.log('Validation errors:', errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e) => { e.preventDefault(); 
    console.log('Form submitted:', form);

    if (!validate()) {
      console.log('Form validation failed');
      return;
    }

    try {
      const response = await createOrder(form);
      console.log('API response:', response);

      setForm({
        order_id: '',
        customer_name: '',
        product: '',
        quantity: '',
        order_date: '',
        status: 'Pending',
      });

      if (onOrderAdded) onOrderAdded();
      console.log('Order added and table refreshed');

    } catch (error) {
      console.error('Error adding order:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Order ID:</label>
        <input
          name="order_id"
          value={form.order_id}
          onChange={handleChange}
        />
        {errors.order_id && <span style={{color:'red'}}>{errors.order_id}</span>}
      </div>

      <div>
        <label>Customer Name:</label>
        <input
          name="customer_name"
          value={form.customer_name}
          onChange={handleChange}
        />
        {errors.customer_name && <span style={{color:'red'}}>{errors.customer_name}</span>}
      </div>

      <div>
        <label>Product:</label>
        <select name="product" value={form.product} onChange={handleChange}>
          <option value="">Select Product</option>
          <option value="Cake">Cake</option>
          <option value="Bread">Bread</option>
          <option value="Muffin">Muffin</option>
          <option value="Croissant">Croissant</option>
          <option value="Cookie">Cookie</option>
        </select>
        {errors.product && <span style={{color:'red'}}>{errors.product}</span>}
      </div>

      <div>
        <label>Quantity:</label>
        <input
          type="number"
          name="quantity"
          value={form.quantity}
          onChange={handleChange}
        />
        {errors.quantity && <span style={{color:'red'}}>{errors.quantity}</span>}
      </div>

      <div>
        <label>Order Date:</label>
        <input
          type="date"
          name="order_date"
          value={form.order_date}
          onChange={handleChange}
        />
        {errors.order_date && <span style={{color:'red'}}>{errors.order_date}</span>}
      </div>

      <div>
        <label>Status:</label>
        <select name="status" value={form.status} onChange={handleChange}>
          <option value="Pending">Pending</option>
          <option value="Completed">Completed</option>
        </select>
      </div>

      <button type="submit">Add Order</button>
    </form>
  );
}
