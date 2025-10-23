import React from "react";

function Orders() {
  const orders = [
    { id: 1, name: "Happiness", item: "Pizza", deliveryGuy: "John", status: "Pending" },
  ];

  return (
    <div className="page orders">
      <h1>My Orders</h1>
      {orders.map((o) => (
        <div key={o.id} className="order-card">
          <h3>{o.item}</h3>
          <p><b>Customer:</b> {o.name}</p>
          <p><b>Delivery Guy:</b> {o.deliveryGuy}</p>
          <p><b>Status:</b> {o.status}</p>
        </div>
      ))}
    </div>
  );
}

export default Orders;
