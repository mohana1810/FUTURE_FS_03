import React, { useState } from "react";

export default function AuthModal({ onClose, onSuccess }) {
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

  const handleSubmit = () => {
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
      }),
    );
    onSuccess(form);
  };

  return (
    <div className="auth-overlay">
      <div className="auth-card">
        <h2>Create Account</h2>

        <div className="auth-grid">
          <input name="name" placeholder="Full Name" onChange={handleChange} />
          <input name="email" placeholder="Email" onChange={handleChange} />
          <input
            name="phone"
            placeholder="Mobile Number"
            onChange={handleChange}
          />
          <input
            name="street"
            placeholder="Street Address"
            onChange={handleChange}
          />
          <input name="city" placeholder="City" onChange={handleChange} />
          <input name="state" placeholder="State" onChange={handleChange} />
          <input name="pincode" placeholder="Pincode" onChange={handleChange} />
        </div>

        <button className="auth-btn" onClick={handleSubmit}>
          Continue
        </button>

        <button className="close-btn" onClick={onClose}>
          Cancel
        </button>
      </div>
    </div>
  );
}
