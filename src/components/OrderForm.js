import React, { useState } from "react";

function OrderForm() {
  const [form, setForm] = useState({ name: "", item: "", address: "", deliveryGuy: "" });

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    alert("✅ Order placed successfully!");
    setForm({ name: "", item: "", address: "", deliveryGuy: "" });
  }

  return (
    <div className="page order-form">
      <h1>Place Your Order</h1>
      <form onSubmit={handleSubmit} className="form">
        <input name="name" value={form.name} onChange={handleChange} placeholder="Your Name" required />
        <input name="item" value={form.item} onChange={handleChange} placeholder="Item Name" required />
        <input name="address" value={form.address} onChange={handleChange} placeholder="Delivery Address" required />
        <select name="deliveryGuy" value={form.deliveryGuy} onChange={handleChange} required>
          <option value="">Choose Delivery Guy</option>
          <option value="John">John</option>
          <option value="Mary">Mary</option>
          <option value="Ahmed">Ahmed</option>
        </select>
        <button type="submit" className="cta-btn">Submit Order</button>
      </form>
    </div>
  );
}

export default OrderForm;
