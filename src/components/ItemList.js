import React, { useEffect, useState } from "react";
import ItemCard from "./ItemCard";
import OrderForm from "./OrderForm";
import { Container, Row, Col } from "react-bootstrap";

function ItemList() {
  const [items, setItems] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    fetch("http://localhost:5000/items")
      .then((res) => res.json())
      .then((data) => setItems(data))
      .catch(console.error);
  }, []);

  const handleOrderNow = (item) => {
    setSelectedItem(item);
    setShowForm(true);
  };

  return (
    <Container className="mt-4">
      <Row>
        {items.map((item) => (
          <Col key={item.id} md={4}>
            <ItemCard item={item} onOrderNow={handleOrderNow} />
          </Col>
        ))}
      </Row>

      {/* Order Form Modal */}
      {showForm && (
        <OrderForm
          show={showForm}
          onHide={() => setShowForm(false)}
          item={selectedItem}
        />
      )}
    </Container>
  );
}

export default ItemList;
