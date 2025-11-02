import React, { useState } from 'react';
import OrderForm from '../components/OrderForm';
//import OrderTable from '../components/OrderTable';

export default function OrdersPage() {
 
  const [refreshKey, setRefreshKey] = useState(0);
  const refreshTable = () => setRefreshKey(prev => prev + 1);

  return (
    <div style={{ maxWidth: '900px', margin: '0 auto', padding: '20px' }}>
      <h2 style={{ textAlign: 'center', color: '#2980b9' }}>Sweet Crust Bakery Orders</h2>

      <OrderForm onOrderAdded={refreshTable} />
    </div>
  );
}
