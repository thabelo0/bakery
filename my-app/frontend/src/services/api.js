// services/api.js
export async function createOrder(order) {
  const res = await fetch('http://localhost:4000/api/orders', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(order),
  });
  return res.json();
}

export async function getOrders() {
  const res = await fetch('http://localhost:4000/api/orders');
  return res.json();
}

export async function updateOrder(id, status) {
  const res = await fetch(`http://localhost:4000/api/orders/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ status }),
  });
  return res.json();
}

export async function deleteOrder(id) {
  const res = await fetch(`http://localhost:4000/api/orders/${id}`, {
    method: 'DELETE',
  });
  return res.json();
}
