import React from "react";
import { useNavigate } from "react-router-dom";

export default function MyOrders() {
  const navigate = useNavigate();

  const orders = JSON.parse(localStorage.getItem("orders") || "[]");

  const handleReorder = (order) => {
    localStorage.setItem("happy_tails_cart", JSON.stringify(order.items));

    navigate("/cart");
    window.location.reload();
  };

  return (
    <div style={{ padding: "40px" }}>
      <h1>My Orders</h1>

      {orders.map((order, index) => (
        <div
          key={index}
          style={{
            background: "#fff",
            borderRadius: "15px",
            padding: "20px",
            marginBottom: "20px",
            boxShadow: "0 4px 15px rgba(0,0,0,.08)",
          }}
        >
          <h2>Order #{index + 1}</h2>

          <p>{order.date}</p>

          <p>{order.address?.street || "Address not available"}</p>

          <p>
            {order.address?.city || ""}
            {order.address?.state ? `, ${order.address.state}` : ""}
          </p>

          <h3>₹{order.total}</h3>

          <button onClick={() => handleReorder(order)}>Reorder</button>
        </div>
      ))}
    </div>
  );
}
