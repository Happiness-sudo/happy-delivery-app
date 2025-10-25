import React, { useEffect, useState } from "react";
import { ListGroup, Container } from "react-bootstrap";

function Orders() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/orders")
      .then(res => res.json())
      .then(data => setOrders(data))
      .catch(console.error);
  }, []);

  return (
    <Container className="mt-4">
      <h3>My Orders</h3>
      <ListGroup>
        {orders.length > 0 ? (
          orders.map(order => (
            <ListGroup.Item key={order.id}>
              <strong>{order.item}</strong> ordered by {order.customerName} — Status: {order.status}
            </ListGroup.Item>
          ))
        ) : (
          <ListGroup.Item>No orders found.</ListGroup.Item>
        )}
      </ListGroup>
    </Container>
  );
}

export default Orders;
