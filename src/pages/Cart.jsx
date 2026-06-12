import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Trash2,
  ShoppingBag,
  Plus,
  Minus,
  CheckCircle,
  ArrowRight,
} from "lucide-react";

export default function Cart({
  cartItems,
  onUpdateQty,
  onRemoveItem,
  onClearCart,
}) {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [address, setAddress] = useState("");

  // Subtotal calculation
  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0,
  );
  const shipping = subtotal > 499 || subtotal === 0 ? 0 : 99; // Free shipping over ₹499
  const gst = Math.round(subtotal * 0.05); // 5% GST on pet food/products
  const total = subtotal + shipping + gst;

  const handleCheckout = () => {
    const user = JSON.parse(localStorage.getItem("currentUser") || "null");

    if (!user) {
      setShowLogin(true);
      return;
    }

    const orders = JSON.parse(localStorage.getItem("orders") || "[]");

    orders.push({
      id: Date.now(),

      customerName: user.name,
      email: user.email,
      phone: user.phone,

      address: {
        street: user.street,
        city: user.city,
        state: user.state,
        pincode: user.pincode,
      },

      total,
      date: new Date().toLocaleString(),
      status: "Processing",

      items: cartItems,
    });

    localStorage.setItem("orders", JSON.stringify(orders));

    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    onClearCart(); // Empty cart on successful order placement
  };

  return (
    <div className="cart-layout fade-in">
      {/* Items Section */}
      <div className="cart-items-section">
        <h1 className="cart-page-title">Shopping Cart</h1>

        {cartItems.length > 0 ? (
          <div
            style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
          >
            {cartItems.map((item) => (
              <div key={item.id} className="cart-item-row">
                <div className="cart-item-info">
                  <div
                    className="cart-item-emoji"
                    style={{ backgroundColor: item.color || "#fff" }}
                  >
                    {item.emoji}
                  </div>
                  <div className="cart-item-text">
                    <h3 className="cart-item-title">{item.name}</h3>
                    <span className="cart-item-category">{item.category}</span>
                  </div>
                </div>

                {/* Quantity Controls */}
                <div className="cart-item-qty">
                  <button
                    onClick={() => onUpdateQty(item.id, item.quantity - 1)}
                    className="qty-btn"
                    aria-label="Decrease quantity"
                  >
                    <Minus size={12} />
                  </button>
                  <span className="qty-val">{item.quantity}</span>
                  <button
                    onClick={() => onUpdateQty(item.id, item.quantity + 1)}
                    className="qty-btn"
                    aria-label="Increase quantity"
                  >
                    <Plus size={12} />
                  </button>
                </div>

                {/* Subtotal of item */}
                <div className="cart-item-price">
                  ₹{item.price * item.quantity}
                </div>

                {/* Delete button */}
                <button
                  onClick={() => onRemoveItem(item.id)}
                  className="cart-item-delete"
                  aria-label={`Remove ${item.name} from cart`}
                >
                  <Trash2 size={18} />
                </button>
              </div>
            ))}
          </div>
        ) : (
          <div className="cart-empty-card">
            <span
              className="cart-empty-icon"
              role="img"
              aria-label="Empty cart"
            >
              🛒
            </span>
            <h2 style={{ fontWeight: "800" }}>Your Cart is Empty</h2>
            <p style={{ color: "var(--text-muted)" }}>
              Add some healthy food, treats, or toys to make your tails wag!
            </p>
            <Link to="/products" className="cart-empty-btn">
              Explore Products
            </Link>
          </div>
        )}
      </div>

      {/* Summary Section */}
      {cartItems.length > 0 && (
        <div className="cart-summary-card">
          <h2 className="summary-title">Order Summary</h2>

          <div className="summary-row">
            <span>Subtotal</span>
            <span>₹{subtotal}</span>
          </div>

          <div className="summary-row">
            <span>Shipping</span>
            <span>{shipping === 0 ? "FREE" : `₹${shipping}`}</span>
          </div>

          <div className="summary-row">
            <span>Estimated GST (5%)</span>
            <span>₹{gst}</span>
          </div>

          <div className="summary-row total">
            <span>Total</span>
            <span>₹{total}</span>
          </div>

          <button onClick={handleCheckout} className="checkout-btn">
            Proceed to Checkout
          </button>

          <Link
            to="/products"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "0.4rem",
              fontSize: "0.85rem",
              color: "var(--primary-orange)",
              fontWeight: "700",
            }}
          >
            Continue Shopping <ArrowRight size={14} />
          </Link>
        </div>
      )}

      {/* Checkout Success Modal Overlay */}
      {showLogin && (
        <div className="checkout-modal-overlay">
          <div className="checkout-modal">
            <h2>Please Login First</h2>
            <button onClick={() => navigate("/login")}>Login / Register</button>
          </div>
        </div>
      )}
      {showModal && (
        <div className="checkout-modal-overlay">
          <div className="checkout-modal">
            <div className="checkout-modal-icon">🎉</div>
            <h2 className="checkout-modal-title">Order Placed Successfully!</h2>
            <p className="checkout-modal-text">
              Thank you for shopping at Happy Tails Pet Store! Your pet's
              goodies are being packed and will be shipped shortly.
            </p>
            <button onClick={handleCloseModal} className="checkout-modal-close">
              Awesome, Take Me Home!
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

// Category banners ready for dog, cat, bird, fish, healthcare
