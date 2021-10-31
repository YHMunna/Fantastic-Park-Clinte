import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

const UpdateService = () => {
  const { serviceID } = useParams();
  const [service, setService] = useState([]);
  useEffect(() => {
    const url = `http://localhost:5000/updateProduct/${serviceID}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setService(data);
      });
  });
  //handle image
  const handleImageChnage = (e) => {
    const updateImage = e.target.value;
    const updatedService = {
      image: updateImage,
      name: service.name,
      price: service.price,
      details: service.details,
    };
    setService(updatedService);
  };
  //handle name
  const handleNameChnage = (e) => {
    const updatedName = e.target.value;
    console.log(updatedName);
    const updatedService = {
      image: service.image,
      name: updatedName,
      price: service.price,
      details: service.details,
    };
    setService(updatedService);
  };
  //handle price
  const handlePriceChnage = (e) => {
    const updatePrice = e.target.value;
    const updatedService = {
      image: service.image,
      name: service.name,
      price: updatePrice,
      details: service.details,
    };
    setService(updatedService);
  };
  //handle details
  const handleDetailsChnage = (e) => {
    const updateDetails = e.target.value;
    const updatedService = {
      image: service.image,
      name: service.name,
      price: service.price,
      details: updateDetails,
    };
    setService(updatedService);
  };
  //handle update
  const handleUpadteService = (e) => {
    e.prevent.default();
  };
  return (
    <div>
      <h1 className="p-2 text-center">Update Service Name:{service.name}</h1>
      <form className="text-center" onSubmit={() => handleUpadteService()}>
        <input
          onChange={handleImageChnage}
          value={service.image || ""}
          className="p-2 m-2"
          placeholder="image"
          type="text"
        />
        <br />
        <input
          onChange={handleNameChnage}
          value={service.name}
          className="p-2 m-2"
          placeholder="name"
          type="text"
        />
        <br />
        <input
          onChange={handlePriceChnage}
          value={service.price || ""}
          className="p-2 m-2"
          placeholder="price"
          type="number"
        />
        <br />
        <input
          onChange={handleDetailsChnage}
          value={service.details || ""}
          className="p-2 m-2"
          placeholder="details"
          type="text"
        />
        <br />
        <input className="btn btn-danger" type="submit" value="Update" />
      </form>
    </div>
  );
};

export default UpdateService;
