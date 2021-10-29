import React from "react";
import { Card, Button } from "react-bootstrap";
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
          <Button onClick={handleAddRide} variant="primary">
            Add Ride
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default SingleService;
