import React, { useState } from "react";
import { Mail, Phone, MapPin, CheckCircle } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      setSubmitted(true);
      setFormData({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setSubmitted(false), 5000);
    }
  };

  return (
    <div className="fade-in">
      <section className="contact-hero">
        <h1>Contact Happy Tails</h1>
        <p style={{ marginTop: "0.5rem", color: "rgba(255,255,255,0.9)" }}>
          We would love to hear from you! Get in touch with our pet care
          experts.
        </p>
      </section>

      <div className="contact-layout">
        {/* Contact Form Column */}
        <div className="contact-form-card">
          <h2 className="contact-form-title">Send a Message</h2>
          {submitted ? (
            <div
              style={{
                backgroundColor: "#e8f5e9",
                color: "#2e7d32",
                padding: "1.5rem",
                borderRadius: "12px",
                textAlign: "center",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "0.5rem",
              }}
            >
              <CheckCircle size={48} />
              <h3 style={{ fontWeight: "800" }}>Thank You!</h3>
              <p style={{ fontSize: "0.9rem" }}>
                Your message has been sent successfully. Our support team will
                get back to you shortly.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label className="form-label" htmlFor="name">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Anandh Mishra"
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="email">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="anandh@example.com"
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="subject">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Query about dog food"
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="message">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="How can we help your pet today?"
                  className="form-textarea"
                />
              </div>

              <button type="submit" className="submit-btn">
                Send Message
              </button>
            </form>
          )}
        </div>

        {/* Info Column */}
        <div className="contact-info-column">
          <div className="info-card">
            <h3 className="info-card-title">Store Operations</h3>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "0.8rem",
                fontSize: "0.9rem",
                color: "var(--text-muted)",
              }}
            >
              <div
                style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}
              >
                <MapPin size={18} style={{ color: "var(--primary-orange)" }} />
                <span>Visakhapatnam, Andhra Pradesh, India</span>
              </div>
              <div
                style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}
              >
                <Phone size={18} style={{ color: "var(--primary-orange)" }} />
                <a
                  href="tel:+919876543210"
                  style={{
                    color: "var(--text-muted)",
                    textDecoration: "none",
                  }}
                >
                  +91 98765 43210
                </a>
              </div>
              <div
                style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}
              >
                <Mail size={18} style={{ color: "var(--primary-orange)" }} />
                <a
                  href="mailto:anier6180811@gmail.com"
                  style={{
                    color: "var(--text-muted)",
                    textDecoration: "none",
                  }}
                >
                  anier6180811@gmail.com
                </a>
              </div>
            </div>
          </div>

          <div
            style={{
              marginTop: "20px",
              borderRadius: "20px",
              overflow: "hidden",
              boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
            }}
          >
            <iframe
              title="Happy Tails Location"
              src="https://maps.google.com/maps?q=Visakhapatnam&t=&z=13&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="350"
              style={{ border: 0 }}
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
