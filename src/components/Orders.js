import React, { useEffect, useState } from "react";
import { ListGroup, Container } from "react-bootstrap";

function Orders() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/orders")
      .then(res => res.json())
      .then(data => setOrders(data))
      .catch(console.error);
  }, []);

  return (
   <Container className="mt-4">
   <h3>My Orders</h3>
    <ListGroup>
    {orders.map(order => (
       <ListGroup.Item key={order.id}>
    {order.item} - ${order.price} at {order.time} 
     </ListGroup.Item>
        ))}
    </ListGroup>
    </Container>
  );
}

export default Orders;
