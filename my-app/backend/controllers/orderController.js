import db from '../db/connection.js';

export const getOrders = (req, res) => {
  db.query('SELECT * FROM orders', (err, results) => {
    if (err) return res.status(500).json({ success:false, error: err });
    res.json({ success:true, data: results });
  });
};

export const createOrder = (req, res) => {
  const { order_id, customer_name, product, quantity, order_date, status } = req.body;
  const sql = 'INSERT INTO orders (order_id, customer_name, product, quantity, order_date, status) VALUES (?, ?, ?, ?, ?, ?)';
  db.query(sql, [order_id, customer_name, product, quantity, order_date, status], (err) => {
    if (err) return res.status(500).json({ success:false, error: err });
    res.json({ success:true, message: 'Order added' });
  });
};

export const updateOrder = (req, res) => {
  const { id } = req.params;
  const { status } = req.body;
  db.query('UPDATE orders SET status=? WHERE id=?', [status, id], (err) => {
    if (err) return res.status(500).json({ success:false, error: err });
    res.json({ success:true, message:'Order updated' });
  });
};

export const deleteOrder = (req, res) => {
  const { id } = req.params;
  db.query('DELETE FROM orders WHERE id=?', [id], (err) => {
    if (err) return res.status(500).json({ success:false, error: err });
    res.json({ success:true, message:'Order deleted' });
  });
};
