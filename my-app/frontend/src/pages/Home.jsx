import React from "react";
import { Link } from "react-router-dom";
//import OrdersPage from './pages/OrdersPage'
import "../home.css"

export default function Home() {
  return (
    <div className="home-container">
      <div className="home-hero">
        <h1>Sweet Crust Bakery</h1>
        <h3>Management System</h3>
        <p className="home-tagline">
          Streamline your daily orders, manage customers, and keep track of everything
          from our productive bakeryy
        </p>

        <div className="home-buttons">
          <Link to="/orders" className="home-btn">
            Add New Order
          </Link>
          <Link to="/review" className="home-btn secondary">
            View Orders
          </Link>
        </div>
      </div>

      <div className="home-info">
        <h2>About the System</h2>
        <p>
          This system helps Sweet Crust Bakery move from manual notebooks to a
          digital, organized workflow. Staff can:
        </p>
        <ul>
          <li>Add and track new customer orders</li>
          <li>Update order status as they’re completed</li>
          <li>Review daily sales a</li>
        </ul>

        <p>
          Designed for simplicity and clarity, this tool ensures no order gets
          lost in the rush of baking fresh goodies every morning
        </p>
      </div>
    </div>
  );
}
