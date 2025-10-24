import React from "react";
import { useNavigate } from "react-router-dom";
function ItemCard({ item }) {
  let navigate=useNavigate()
  return (
    <div className="item-card">
      <img src={item.img} alt={item.name} />
      <h3>{item.name}</h3>
      <p>{item.price}</p>
      <button onClick={()=>navigate("/order")} className="order-btn">Order Now</button>
    </div>
  );
}

export default ItemCard;
