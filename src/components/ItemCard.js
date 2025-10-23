import React from "react";

function ItemCard({ item }) {
  return (
    <div className="item-card">
      <img src={item.img} alt={item.name} />
      <h3>{item.name}</h3>
      <p>{item.price}</p>
      <button className="order-btn">Order Now</button>
    </div>
  );
}

export default ItemCard;
