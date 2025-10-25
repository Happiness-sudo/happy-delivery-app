import React from "react";
import { Card, Button } from "react-bootstrap";

function ItemCard({ item, onOrderNow }) {
  return (
    <Card className="m-3 shadow-sm" style={{ width: "18rem" }}>
      <Card.Img variant="top" src={item.image} />
      <Card.Body>
        <Card.Title>{item.name}</Card.Title>
        <Card.Text>{item.description}</Card.Text>
        <Card.Text><strong>Price:</strong> Ksh {item.price}</Card.Text>
        <Button variant="success" onClick={() => onOrderNow(item)}>
          Order Now
        </Button>
      </Card.Body>
    </Card>
  );
}

export default ItemCard;
