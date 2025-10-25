import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Button } from "react-bootstrap";

function Home() {
  return (
    <div
      style={{
        backgroundImage:
          'url("https://images.pexels.com/photos/16544823/pexels-photo-16544823.jpeg?auto=compress&cs=tinysrgb&w=1600")', // Nairobi street food delivery image
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        color: "white",
        padding: "5rem 1rem",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        position: "relative",
      }}
    >
      {/* Dark overlay for better text visibility */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          zIndex: 1,
        }}
      ></div>

      <Container style={{ zIndex: 2 }}>
        <Row className="justify-content-center">
          <Col md={10} lg={8}>
            <h1 className="display-4 fw-bold mb-3">
              Welcome to <span style={{ color: "#ffc107" }}>HappyDelivery Kenya 🇰🇪</span>
            </h1>
            <p className="lead mb-4">
              Enjoy your favorite local dishes — from Nairobi to Mombasa — delivered fast, fresh, and affordable.  
              Supporting local restaurants and delivery heroes across Kenya.
            </p>
            <Link to="/items">
              <Button variant="warning" size="lg" className="fw-bold shadow">
                🍽 Start Ordering
              </Button>
            </Link>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Home;
