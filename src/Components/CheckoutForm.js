import React, { useState } from 'react';

function CheckoutForm({ onSubmit }) {
  const [form, setForm] = useState({
    name: '',
    address: '',
    contact: '',
    instructions: '',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(form);
    setForm({ name: '', address: '', contact: '', instructions: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Checkout</h2>
      <label>
        Name:
        <input name="name" value={form.name} onChange={handleChange} required />
      </label>
      <label>
        Address:
        <input name="address" value={form.address} onChange={handleChange} required />
      </label>
      <label>
        Contact:
        <input name="contact" value={form.contact} onChange={handleChange} required />
      </label>
      <label>
        Delivery Instructions:
        <textarea name="instructions" value={form.instructions} onChange={handleChange}></textarea>
      </label>
      <button type="submit">Place Order</button>
    </form>
  );
}

export default CheckoutForm;
