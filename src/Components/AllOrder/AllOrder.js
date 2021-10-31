import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import SingleAllOrder from "../SingleAllOrder/SingleAllOrder";

const AllOrder = () => {
  const [allorders, setAllOrders] = useState([]);
  const [isDeleted, setIsDeletde] = useState({});
  useEffect(() => {
    fetch("http://localhost:5000/manageOrders")
      .then((res) => res.json())
      .then((data) => {
        setAllOrders(data);
      });
  }, [isDeleted]);
  //handle delete
  const handleDelete = (id) => {
    fetch(`http://localhost:5000/deleteOrder/${id}`, {
      method: "DELETE",
      headers: { "content-type": "application/json" },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount) {
          setIsDeletde(true);
          alert("deleted service");
        } else {
          setIsDeletde(false);
        }
      });
    console.log(id);
  };
  //handle approve
  const handleAprove = (id) => {};

  return (
    <div>
      <h1 className="text-center p-3 ">All Oder</h1>
      <table className="table  table-bordered">
        {allorders.map((allorder) => (
          <SingleAllOrder
            key={allorder.id}
            allorder={allorder}
            handleDelete={handleDelete}
            handleAprove={handleAprove}
          ></SingleAllOrder>
        ))}
        <thead>
          <tr>
            <th scope="col">Ride name</th>
            <th scope="col">Rdie Price</th>
            <th scope="col">Order Status</th>
            <th scope="col">Update</th>
            <th scope="col">Delete</th>
            <th scope="col">Aprove</th>
          </tr>
        </thead>
      </table>
    </div>
  );
};

export default AllOrder;
