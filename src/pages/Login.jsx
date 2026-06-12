import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    street: "",
    city: "",
    state: "",
    pincode: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const save = () => {
    const {
      name,
      email,
      phone,
      street,
      city,
      state,
      pincode,
    } = form;

    if (
      !name ||
      !email ||
      !phone ||
      !street ||
      !city ||
      !state ||
      !pincode
    ) {
      return alert("Please fill all fields");
    }

    localStorage.setItem(
      "currentUser",
      JSON.stringify({
        name,
        email,
        phone,
        street,
        city,
        state,
        pincode,
      })
    );

    navigate("/cart");
  };

  return (
    <div
      style={{
        maxWidth: "700px",
        margin: "40px auto",
        background: "#fff",
        padding: "30px",
        borderRadius: "20px",
        boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
      }}
    >
      <h1
        style={{
          textAlign: "center",
          marginBottom: "25px",
          color: "#ff914d",
        }}
      >
        Create Account
      </h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "15px",
        }}
      >
        <input
          name="name"
          placeholder="Full Name"
          onChange={handleChange}
        />

        <input
          name="email"
          placeholder="Email"
          onChange={handleChange}
        />

        <input
          name="phone"
          placeholder="Phone Number"
          onChange={handleChange}
        />

        <input
          name="pincode"
          placeholder="Pincode"
          onChange={handleChange}
        />

        <input
          name="street"
          placeholder="Street Address"
          onChange={handleChange}
        />

        <input
          name="city"
          placeholder="City"
          onChange={handleChange}
        />

        <input
          name="state"
          placeholder="State"
          onChange={handleChange}
        />
      </div>

      <button
        onClick={save}
        style={{
          marginTop: "25px",
          width: "100%",
          padding: "14px",
          background: "#ff914d",
          color: "#fff",
          border: "none",
          borderRadius: "10px",
          fontWeight: "bold",
          cursor: "pointer",
        }}
      >
        Continue
      </button>
    </div>
  );
}