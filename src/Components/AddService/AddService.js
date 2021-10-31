import React from "react";
import { useForm } from "react-hook-form";
const AddService = () => {
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    fetch("http://localhost:5000/addService", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        window.alert("product added");
        reset();
      });
  };
  return (
    <div>
      <h1 className="text-center mb-5">ADD SERVICE</h1>

      <form className="text-center" onSubmit={handleSubmit(onSubmit)}>
        <input
          className="p-2 m-2"
          {...register("image", { required: true })}
          placeholder="image"
        />
        <input
          className="p-2 m-2"
          {...register("name", { required: true })}
          placeholder="Ride Name"
        />

        <input
          className="p-2 m-2"
          type="number"
          {...register("price", { required: true })}
          placeholder="price"
        />
        <input
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

export default AddService;
