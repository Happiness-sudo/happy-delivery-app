import React, { useEffect, useState } from "react";
import { ListGroup, Container, Button } from "react-bootstrap";

function Orders() {
  const [orders, setOrders] = useState([]);

  // Fetch orders from the server
  useEffect(() => {
    fetch("http://localhost:5000/orders")
      .then((res) => res.json())
      .then((data) => setOrders(data))
      .catch(console.error);
  }, []);

  // Handle deleting an order
  const handleDelete = (id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this order?");
    if (!confirmDelete) return;

    fetch(`http://localhost:5000/orders/${id}`, {
      method: "DELETE",
    })
      .then((res) => {
        if (res.ok) {
          setOrders((prevOrders) => prevOrders.filter((order) => order.id !== id));
        }
      })
      .catch(console.error);
  };

  return (
    <Container className="mt-4">
      <h3>My Orders</h3>
      <ListGroup>
        {orders.length > 0 ? (
          orders.map((order) => (
            <ListGroup.Item
              key={order.id}
              className="d-flex justify-content-between align-items-center"
            >
              <div>
                <strong>{order.item}</strong> ordered by {order.customerName} — Status: {order.status}
              </div>
              <Button
                variant="danger"
                size="sm"
                onClick={() => handleDelete(order.id)}
              >
                🗑 Delete
              </Button>
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
