import React from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
const SingleService = (props) => {
  const { user } = useAuth();

  const { service } = props;
  // console.log(service);
  const handleAddRide = () => {
    const orderData = service;
    orderData.email = user.email;
    orderData.status = "pending";
    // console.log(orderData);
    fetch("http://localhost:5000/addRide", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(orderData),
    })
      .then((res) => res.json())
      .then((data) => {
        window.alert("added cart");
      });
  };
  return (
    <div className="col-md-4 p-3">
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={service.image} />
        <Card.Body>
          <Card.Title>Name: {service.name}</Card.Title>
          <Card.Title>Price: {service.price}</Card.Title>
          <Card.Text>{service.details}</Card.Text>
          <Link to="/myorder">
            <Button onClick={handleAddRide} variant="primary">
              Add Cart
            </Button>
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default SingleService;
