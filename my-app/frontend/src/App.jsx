import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import OrdersPage from './pages/OrdersPage'
import Home from './pages/Home'
import About from './pages/About'
import Review from './pages/review'

export default function App() {
  return (
    <div className="app">
      <header className="app-header">
        <h1>Sweet Crust Bakery</h1>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/orders">Orders</Link>
          <Link to="/about">About</Link>
          <Link to="/review">Review</Link>
        </nav>
      </header>

      <main className="app-main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/orders" element={<OrdersPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/review" element={<Review />} />
        </Routes>
      </main>
    </div>
  )
}
