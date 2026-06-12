import React, { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import {
  ShoppingCart,
  Search,
  Menu,
  X,
  UserCircle,
} from "lucide-react";

export default function Navbar({
  searchQuery,
  setSearchQuery,
  cartCount,
}) {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [showAccountMenu, setShowAccountMenu] = useState(false);

  const navigate = useNavigate();

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    navigate("/products");
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);

    if (window.location.pathname !== "/products") {
      navigate("/products");
    }
  };

  const toggleMobileMenu = () => {
    setIsMobileOpen(!isMobileOpen);
  };

  return (
    <nav className="navbar">
      <div className="nav-container">

        {/* Logo */}
        <Link
          to="/"
          className="nav-logo"
          onClick={() => setSearchQuery("")}
        >
          <span className="nav-logo-icon">🐾</span>
          <span>Happy Tails</span>
        </Link>

        {/* Search */}
        <form
          onSubmit={handleSearchSubmit}
          className="nav-search-form"
        >
          <input
            type="text"
            placeholder="Search food, toys, feeders..."
            value={searchQuery}
            onChange={handleSearchChange}
            className="nav-search-input"
          />

          <button
            type="submit"
            className="nav-search-button"
          >
            <Search size={18} />
          </button>
        </form>

        {/* Navigation Links */}
        <div
          className={`nav-menu ${
            isMobileOpen ? "mobile-open" : ""
          }`}
        >
          <NavLink
            to="/"
            className={({ isActive }) =>
              `nav-item ${isActive ? "active" : ""}`
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/about"
            className={({ isActive }) =>
              `nav-item ${isActive ? "active" : ""}`
            }
          >
            About
          </NavLink>

          <NavLink
            to="/products"
            className={({ isActive }) =>
              `nav-item ${isActive ? "active" : ""}`
            }
          >
            Products
          </NavLink>

          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `nav-item ${isActive ? "active" : ""}`
            }
          >
            Contact
          </NavLink>
        </div>

        {/* Account */}
        <div className="account-menu">
          <button
            className="account-btn"
            onClick={() =>
              setShowAccountMenu(!showAccountMenu)
            }
          >
            <UserCircle size={28} />
          </button>

          {showAccountMenu && (
            <div className="account-dropdown">
              <Link
                to="/profile"
                onClick={() => setShowAccountMenu(false)}
              >
                My Profile
              </Link>

              <Link
                to="/my-orders"
                onClick={() => setShowAccountMenu(false)}
              >
                My Orders
              </Link>

              <button
                onClick={() => {
                  localStorage.removeItem("currentUser");
                  setShowAccountMenu(false);
                  navigate("/");
                }}
              >
                Logout
              </button>
            </div>
          )}
        </div>

        {/* Cart */}
        <Link
          to="/cart"
          className="nav-cart"
        >
          <ShoppingCart size={22} />

          {cartCount > 0 && (
            <span className="cart-badge">
              {cartCount}
            </span>
          )}
        </Link>

        {/* Mobile Toggle */}
        <button
          className="mobile-nav-toggle"
          onClick={toggleMobileMenu}
        >
          {isMobileOpen ? (
            <X size={26} />
          ) : (
            <Menu size={26} />
          )}
        </button>

      </div>
    </nav>
  );
}