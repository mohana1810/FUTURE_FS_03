import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
//import Categories from "./pages/Categories";
import Profile from "./pages/Profile";

// Styling imports
import './styles/global.css';
import './styles/components.css';
import './styles/pages.css';

// Component imports
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

// Page imports
import Home from './pages/Home';
import Products from './pages/Products';
import About from './pages/About';
import Contact from './pages/Contact';
import Login from './pages/Login';
import MyOrders from './pages/MyOrders';
import Cart from './pages/Cart';

export default function App() {
  // Global cart state (backed by localStorage)
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem('happy_tails_cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });

  // Global filters
  const [selectedPet, setSelectedPet] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  // Sync cart with localStorage
  useEffect(() => {
    localStorage.setItem('happy_tails_cart', JSON.stringify(cart));
  }, [cart]);

  // Cart operations
  const handleAddToCart = (product) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(item => item.id === product.id);
      if (existingItem) {
        return prevCart.map(item => 
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  const handleUpdateQty = (id, newQty) => {
    if (newQty <= 0) {
      handleRemoveItem(id);
    } else {
      setCart(prevCart => 
        prevCart.map(item => item.id === id ? { ...item, quantity: newQty } : item)
      );
    }
  };

  const handleRemoveItem = (id) => {
    setCart(prevCart => prevCart.filter(item => item.id !== id));
  };

  const handleClearCart = () => {
    setCart([]);
  };

  // Get total items in cart
  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <Router>
      <div className="app-container">
        <Navbar 
          searchQuery={searchQuery} 
          setSearchQuery={setSearchQuery} 
          cartCount={cartCount} 
        />
        
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            
            <Route path="/profile" element={<Profile />} />
            <Route 
              path="/products" 
              element={
                <Products 
                  selectedPet={selectedPet}
                  setSelectedPet={setSelectedPet}
                  searchQuery={searchQuery}
                  onAddToCart={handleAddToCart}
                />
              } 
            />
            
            <Route 
              path="/products/:category" 
              element={
                <Products 
                  selectedPet={selectedPet}
                  setSelectedPet={setSelectedPet}
                  searchQuery={searchQuery}
                  onAddToCart={handleAddToCart}
                />
              } 
            />
            
            <Route path="/about" element={<About />} />
            
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="/my-orders" element={<MyOrders />} />
            
            <Route 
              path="/cart" 
              element={
                <Cart 
                  cartItems={cart}
                  onUpdateQty={handleUpdateQty}
                  onRemoveItem={handleRemoveItem}
                  onClearCart={handleClearCart}
                />
              } 
            />
          </Routes>
        </main>
        
        <Footer />
        <WhatsAppButton />
      </div>
    </Router>
  );
}

// Category banners ready for dog, cat, bird, fish, healthcare <Route path="/categories" element={<Categories />} />
