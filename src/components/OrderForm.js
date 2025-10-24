import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";

function OrderForm({ show, onHide, item }) {
  const [customerName, setCustomerName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newOrder = {
      itemId: item.id,
      customerName,
      status: "Pending",
    };

    fetch("http://localhost:3000/orders", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newOrder),
    })
      .then((res) => res.json())
      .then(() => {
        alert("Order placed successfully!");
        onHide();
      })
      .catch((err) => console.error("Error posting order:", err));
  };

  return (
    // <Modal show={show} onHide={onHide} centered>
    //   <Modal.Header closeButton>
    //     <Modal.Title>Order: {item?.name}</Modal.Title>
    //   </Modal.Header>
    //   <Modal.Body>
        <Form onSubmit={handleSubmit}>
    <Form.Group controlId="formName" className="mb-3">
    <Form.Label>Your Name</Form.Label>
     <Form.Control
       type="text"
    value={customerName}
    onChange={(e) => setCustomerName(e.target.value)}
         required
            />
     </Form.Group>
       <Button variant="success" type="submit" className="w-100">
            Submit Order
      </Button>
     </Form>
    //   </Modal.Body>
    // </Modal>
    
  );
}

export default OrderForm;
