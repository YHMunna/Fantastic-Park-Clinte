import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import SingleService from "../SingleService/SingleService";

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/services")
      .then((res) => res.json())
      .then((data) => {
        setServices(data);
      });
  }, []);
  return (
    <div>
      <h1>Our Services</h1>

      <div className="row">
        {services.map((service) => (
          <SingleService key={service.id} service={service}></SingleService>
        ))}
      </div>
    </div>
  );
};

export default Services;
