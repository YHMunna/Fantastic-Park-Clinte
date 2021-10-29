import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router";
import { useForm } from "react-hook-form";
const UpdateService = () => {
  const { serviceID } = useParams();
  const [updateProduct, setUpdateProduct] = useState([]);
  console.log(updateProduct);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    fetch(`http://localhost:3000/update/${serviceID}`, {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };
  useEffect(() => {
    fetch(`http://localhost:5000/updateProduct/${serviceID}`)
      .then((res) => res.json())
      .then((data) => {
        setUpdateProduct(data);
      });
  }, []);
  return (
    <div>
      <h1 className="text-center m-5">Update here: {updateProduct.name}</h1>
      <form className="text-center" onSubmit={handleSubmit(onSubmit)}>
        <input
          defaultValue={updateProduct.image}
          className="p-2 m-2"
          {...register("image", { required: true })}
          placeholder="image"
        />
        <input
          defaultValue={updateProduct.name}
          className="p-2 m-2"
          {...register("name", { required: true })}
          placeholder="Ride Name"
        />

        <input
          defaultValue={updateProduct.price}
          className="p-2 m-2"
          type="number"
          {...register("price", { required: true })}
          placeholder="price"
        />
        <input
          defaultValue={updateProduct.details}
          className="p-2 m-2"
          {...register("details", { required: true })}
          placeholder="Details"
        />

        {errors.exampleRequired && <span>This field is required</span>}
        <br />
        <input className="btn btn-danger" type="submit" />
      </form>
    </div>
  );
};

export default UpdateService;
