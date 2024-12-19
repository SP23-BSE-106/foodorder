import React, { useState } from 'react';
import CheckoutForm from '../Components/CheckoutForm';

function CheckoutPage() {
  const [orderDetails, setOrderDetails] = useState(null);

  const handleCheckout = (form) => {
    setOrderDetails(form);
    alert('Order placed successfully!');
  };

  return (
    <div>
      <h1>Checkout</h1>
      {orderDetails ? (
        <div>
          <h2>Order Confirmation</h2>
          <p>Name: {orderDetails.name}</p>
          <p>Address: {orderDetails.address}</p>
          <p>Contact: {orderDetails.contact}</p>
          <p>Instructions: {orderDetails.instructions}</p>
        </div>
      ) : (
        <CheckoutForm onSubmit={handleCheckout} />
      )}
    </div>
  );
}

export default CheckoutPage;
