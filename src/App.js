import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage';
import CartPage from './pages/CartPage';
import CheckoutPage from './pages/CheckoutPage';
import FeedbackPage from './pages/FeedbackPage';

function App() {
  return (
   
  <div>
        <Route path="/" element={<Homepage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/feedback" element={<FeedbackPage />} />
        </div>
  );
}

export default App;
