import React, { useEffect, useState } from "react";
import { sampleOrders } from "../../utils/staticData";
import "../../styles/style.css";

export const Home = () => {
  const [orders, setOrders] = useState(sampleOrders?.daraz);
  const [state, setState] = useState("Daraz Orders");

  const handleDarazClick = () => {
    setOrders(sampleOrders?.daraz);
  };
  const handlefoodpandalick = () => {
    setOrders(sampleOrders?.foodpanda);
    setState("FoodPanda Orders");
  };
  const handleawClick = () => {
    setOrders(sampleOrders?.amazon);
    setState("Amazon Orders");
  };

  return (
    <div className="main-div">
      <div className="heading">Order Made</div>
      <div className="buttons">
        <button onClick={handleDarazClick}>Daraz Orders</button>
        <button onClick={handlefoodpandalick}>Foodpanda Orders</button>
        <button onClick={handleawClick}>Amazon Orders</button>
      </div>
      <div className="heading">{state}</div>
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Cusomer Name</th>
            <th>Amount</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {orders?.map((order) => {
            return (
              <tr key={order?.id}>
                <td>{order?.orderId}</td>
                <td>{order?.customerName}</td>
                <td>{order?.amount}</td>
                <td>{order?.status}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
