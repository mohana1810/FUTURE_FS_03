import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* About column */}
        <div className="footer-info">
          <Link to="/" className="footer-logo">
            <span>🐾</span> Happy Tails
          </Link>
          <p className="footer-desc">
            Happy Tails Pet Store is your one-stop shop for premium pet foods, engaging toys, essential health care, and training accessories. We treat your pets like family!
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="footer-title">Quick Links</h3>
          <ul className="footer-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/products">All Products</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
          </ul>
        </div>

        {/* Pet Categories */}
        <div>
          <h3 className="footer-title">Shop by Pet</h3>
          <ul className="footer-links">
            <li><Link to="/products/dog-food">Dog Food</Link></li>
            <li><Link to="/products/cat-food">Cat Food</Link></li>
            <li><Link to="/products/bird-supplies">Bird Supplies</Link></li>
            <li><Link to="/products/fish-supplies">Fish Supplies</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="footer-title">Store Location</h3>
          <div className="footer-contact-item">
            <MapPin size={18} />
            <span>123 Bark Avenue, Petville, PV 56001</span>
          </div>
          <div className="footer-contact-item">
            <Phone size={18} />
            <span>+91 98765 43210</span>
          </div>
          <div className="footer-contact-item">
            <Mail size={18} />
            <span>support@happytailspetstore.com</span>
          </div>
          <div className="footer-contact-item">
            <Clock size={18} />
            <span>Mon - Sat: 9:00 AM - 9:00 PM</span>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {currentYear} Happy Tails Pet Store. All rights reserved.</p>
        <div className="footer-bottom-links">
          <a href="#privacy">Privacy Policy</a>
          <a href="#terms">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}
