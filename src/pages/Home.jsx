import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowRight, Star, Heart } from 'lucide-react';

import dog1 from "../assets/gallery/dog1.jpg";
import cat1 from "../assets/gallery/cat1.jpg";
import bird1 from "../assets/gallery/bird1.jpg";
import fish1 from "../assets/gallery/fish1.jpg";
import dog2 from "../assets/gallery/dog2.jpg";
import cat2 from "../assets/gallery/cat2.jpg";

export default function Home() {
  const navigate = useNavigate();

  const quickCategories = [
  { name: "Dogs", icon: "🐶", slug: "dogs" },
  { name: "Cats", icon: "🐱", slug: "cats" },
  { name: "Birds", icon: "🦜", slug: "birds" },
  { name: "Fish", icon: "🐠", slug: "fish" },
  { name: "Small Pets", icon: "🐹", slug: "small-pets" }
];

  const testimonials = [
    {
      id: 1,
      name: "Mohana K.",
      role: "Dog Owner (Max, Golden Retriever)",
      stars: 4.5,
      text: "The Premium Royal Kibble is a game changer! Max has so much more energy now, and his coat is incredibly shiny. Delivery was fast too!",
      avatar: "MK"
    },
    {
      id: 2,
      name: "Priya S.",
      role: "Cat Owner (Luna, Persian)",
      stars: 5,
      text: "Happy Tails has the best customer care. I had questions about the laser toy and they guided me immediately on WhatsApp. Luna is obsessed with it!",
      avatar: "PS"
    },
    {
      id: 3,
      name: "Amit R.",
      role: "Bird Parent (Kiwi, Cockatiel)",
      stars: 5,
      text: "Hard to find quality bird feeds elsewhere, but their natural mixed seed is perfect. Kiwi chirps in delight every morning now!",
      avatar: "AR"
    }
  ];

  const galleryItems = [
  { id: 1, title: "Max's Playtime", image: dog1 },
  { id: 2, title: "Luna's Snooze", image: cat1 },
  { id: 3, title: "Kiwi's Swing", image: bird1 },
  { id: 4, title: "Bubbles' Swim", image: fish1 },
  { id: 5, title: "Rocky's Walk", image: dog2 },
  { id: 6, title: "Bella's Crown", image: cat2 }
];

  return (
    <div className="fade-in">
      {/* Hero Section */}
      <header className="home-hero">
        <div className="hero-content">
          <h1 className="hero-title">Happy Tails Pet Store</h1>
          <p className="hero-subtitle">Food, Feeders, Toys, Grooming & Care. Everything your best friend needs!</p>
          <Link to="/products" className="hero-btn">
            Shop Products <ArrowRight size={18} />
          </Link>
        </div>
        
      </header>

      {/* Quick Categories Section */}
      <section className="quick-categories-section">
        <h2 className="section-title-center">Shop Quick Categories</h2>
        <div className="quick-categories-grid">

        {quickCategories.map((cat, idx) => (
         <Link
         key={idx}
         to={`/products/${cat.slug}`}
         className="quick-category-card"
         >
         <span
          className="quick-category-icon"
          role="img"
          aria-label={cat.name}
         >
          {cat.icon}
         </span>
         <span>{cat.name}</span>
         </Link>
       ))}
       </div>

  {/* ADD THIS HERE */}
  <div className="view-all-container">
    <Link to="/categories" className="view-all-btn">
      View All Categories →
    </Link>
  </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section">
        <h2 className="section-title-center">What Pet Parents Say</h2>
        <div className="testimonials-grid">
          {testimonials.map(t => (
            <div key={t.id} className="testimonial-card">
              <div className="testimonial-stars">
                {Array.from({ length: t.stars }).map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" style={{ marginRight: '2px' }} />
                ))}
              </div>
              <p className="testimonial-text">"{t.text}"</p>
              <div className="testimonial-user">
                <div className="testimonial-avatar">{t.avatar}</div>
                <div>
                  <h4 className="testimonial-name">{t.name}</h4>
                  <span className="testimonial-role">{t.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Gallery Section */}
      <section className="gallery-section">
        <h2 className="section-title-center">Happy Tails Gallery</h2>
        <div className="gallery-grid">
          {galleryItems.map(item => (
            <div key={item.id} className="gallery-item">
              <img
              src={item.image}
              alt={item.title}
              style={{
                width: "100%",
                height: "100%",
                 objectFit: "cover"
              }}
              />
              <div className="gallery-overlay">
                <h4 className="gallery-overlay-title">{item.title}</h4>
                <p style={{ fontSize: '0.8rem', color: '#e0e0e0' }}>Shared by happy owner</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

// Gallery upgraded with realistic pet photos

// Category banners ready for dog, cat, bird, fish, healthcare
