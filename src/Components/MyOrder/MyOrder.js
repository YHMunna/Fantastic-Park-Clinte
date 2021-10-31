import React from "react";
import { useState } from "react";
import { useEffect } from "react";

import useAuth from "../../Hooks/useAuth";
import SingleMyOrder from "../SingleMyOrder/SingleMyOrder";

const MyOrder = () => {
  const { user } = useAuth();
  const email = user.email;
  const [orders, setOrders] = useState([]);
  console.log(orders);
  useEffect(() => {
    fetch(`http://localhost:5000/myOrders/${email}`)
      .then((res) => res.json())
      .then((data) => {
        // const combaineData = [
        //   {
        //     email: data.email,
        //     price: data.price,
        //     img: data.img,
        //     details: data.details,
        //     status: data.status,
        //   },
        // ];
        // setOrders(combaineData);
        setOrders(data);
      });
  }, [orders]);
  return (
    <div>
      <h1>My Orders : {orders.length}</h1>
      <div className="row">
        {orders.map((order) => (
          <SingleMyOrder key={order.id} order={order}></SingleMyOrder>
        ))}
      </div>
    </div>
  );
};

export default MyOrder;
