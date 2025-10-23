import React from "react";
import ItemCard from "./ItemCard";

function ItemList() {
  const items = [
    { id: 1, name: "Tasty Pizza", price: "Ksh 450", img: "https://i.imgur.com/BJcL7xC.png" },
    { id: 2, name: "Juicy Burger", price: "Ksh 350", img: "https://i.imgur.com/2uX8D9K.png" },
    { id: 3, name: "Fresh Salad", price: "Ksh 250", img: "https://i.imgur.com/gd1CztF.png" },
  ];

  return (
    <div className="page item-list">
      <h1>Available Items</h1>
      <div className="items-container">
        {items.map((item) => (
          <ItemCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}

export default ItemList;
