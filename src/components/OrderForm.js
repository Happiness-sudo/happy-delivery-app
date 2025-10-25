// src/components/OrderForm.js
import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";

function OrderForm({ show, onHide, item }) {
  const [formData, setFormData] = useState({
    customerName: "",
    deliveryGuy: "",
    address: "",
    item: item ? item.name : "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newOrder = {
      itemId: item ? item.id : null,
      customerName: formData.customerName,
      deliveryGuy: formData.deliveryGuy,
      address: formData.address,
      item: formData.item,
      status: "Pending",
    };

    fetch("http://localhost:5000/orders", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newOrder),
    })
      .then((res) => res.json())
      .then(() => {
        alert("Order placed successfully!");
        setFormData({
          customerName: "",
          deliveryGuy: "",
          address: "",
          item: "",
        });
        onHide();
      })
      .catch((err) => console.error("Error posting order:", err));
  };

  return (
    <Modal show={show} onHide={onHide} centered>
      <Modal.Header closeButton>
        <Modal.Title>Place Delivery Order</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>Customer Name</Form.Label>
            <Form.Control
              type="text"
              name="customerName"
              value={formData.customerName}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Delivery Guy</Form.Label>
            <Form.Control
              type="text"
              name="deliveryGuy"
              value={formData.deliveryGuy}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Address</Form.Label>
            <Form.Control
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Item</Form.Label>
            <Form.Control
              type="text"
              name="item"
              value={formData.item}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Button type="submit" variant="primary" className="w-100">
            Submit Order
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
}

export default OrderForm;
