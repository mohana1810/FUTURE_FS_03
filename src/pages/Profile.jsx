import React from "react";

export default function Profile() {
  const user = JSON.parse(localStorage.getItem("currentUser") || "{}");

  return (
    <div
      style={{
        maxWidth: "900px",
        margin: "40px auto",
        padding: "20px",
      }}
    >
      <h1
        style={{
          fontSize: "2.5rem",
          marginBottom: "20px",
          color: "#ff914d",
        }}
      >
        My Profile
      </h1>

      <div
        style={{
          background: "#fff",
          padding: "25px",
          borderRadius: "16px",
          boxShadow: "0 4px 15px rgba(0,0,0,0.08)",
        }}
      >
        <p><strong>Name:</strong> {user.name || "-"}</p>
        <p><strong>Email:</strong> {user.email || "-"}</p>
        <p><strong>Phone:</strong> {user.phone || "-"}</p>
        <p><strong>Street:</strong> {user.street || "-"}</p>
        <p><strong>City:</strong> {user.city || "-"}</p>
        <p><strong>State:</strong> {user.state || "-"}</p>
        <p><strong>Pincode:</strong> {user.pincode || "-"}</p>
      </div>
    </div>
  );
}