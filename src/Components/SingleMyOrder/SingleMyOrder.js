import React from "react";
import { Card, Button } from "react-bootstrap";

const SingleMyOrder = (props) => {
  const { order } = props;
  return (
    <div className="p-2 col-md-4">
      <Card style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Title>Ride Name: {order.name}</Card.Title>
          <Card.Title>Ride Price: {order.price}</Card.Title>
          <Card.Title className="text-primary">
            Order Status: {order.status}
          </Card.Title>
          <Button variant="primary">Place Order</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default SingleMyOrder;
