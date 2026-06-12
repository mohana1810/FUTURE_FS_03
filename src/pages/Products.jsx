import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import ProductCard from '../components/ProductCard';
import { products, getCategoryFromSlug } from '../data/productsData';

export default function Products({ 
  selectedPet, 
  setSelectedPet, 
  searchQuery, 
  onAddToCart 
}) {
  const { category: categorySlug } = useParams();

  // Get active category from URL slug
  const activeCategory = categorySlug ? getCategoryFromSlug(categorySlug) : '';

  // Reset search when entering a specific category from URL (optional, but let's keep search query active if they typed)
  // Let's filter products:
  const filteredProducts = products.filter(product => {
    // 1. Filter by category from router
    if (activeCategory && product.category !== activeCategory) {
      return false;
    }
    // 2. Filter by pet from sidebar
    if (selectedPet && product.pet !== selectedPet) {
      return false;
    }
    // 3. Filter by search query from navbar
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      const nameMatch = product.name.toLowerCase().includes(query);
      const descMatch = product.description.toLowerCase().includes(query);
      const catMatch = product.category.toLowerCase().includes(query);
      const petMatch = product.pet.toLowerCase().includes(query);
      return nameMatch || descMatch || catMatch || petMatch;
    }
    return true;
  });

  // Scroll to top when category slug changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [categorySlug]);

  // Dynamic banner details
  const getBannerDetails = () => {
    if (activeCategory) {
      const matchingProduct = products.find(p => p.category === activeCategory);
      return {
        title: activeCategory,
        desc: `High-quality, curated items under the ${activeCategory} category for your pets.`,
        emoji: matchingProduct ? matchingProduct.emoji : '📦'
      };
    }
    if (selectedPet) {
      return {
        title: `${selectedPet} Supplies`,
        desc: `Everything you need to keep your happy ${selectedPet.toLowerCase()} healthy and playful.`,
        emoji: selectedPet === 'Dog' ? '🐶' : selectedPet === 'Cat' ? '🐱' : selectedPet === 'Bird' ? '🦜' : '🐠'
      };
    }
    return {
      title: "All Products",
      desc: "Browse our complete catalog of food, feeders, toys, grooming and health care supplies.",
      emoji: "🐾"
    };
  };

  const banner = getBannerDetails();

  return (
    <div className="products-layout fade-in">
      {/* Sidebar Filter column */}
      <Sidebar 
        selectedPet={selectedPet} 
        setSelectedPet={setSelectedPet} 
        activeCategory={activeCategory} 
      />

      {/* Main product catalog column */}
      <div className="products-content">
        {/* Category Banner */}
        <div className="category-banner">
          <div className="category-banner-content">
            <h1 className="category-banner-title">{banner.title}</h1>
            <p className="category-banner-desc">{banner.desc}</p>
          </div>
          <span className="category-banner-emoji" role="img" aria-label="banner-emoji">
            {banner.emoji}
          </span>
        </div>

        {/* Results Bar */}
        <div className="products-topbar">
          <span className="results-count">
            {filteredProducts.length} {filteredProducts.length === 1 ? 'product' : 'products'} found
            {searchQuery && ` for "${searchQuery}"`}
          </span>
        </div>

        {/* Product Grid */}
        {filteredProducts.length > 0 ? (
          <div className="products-grid">
            {filteredProducts.map(product => (
              <ProductCard 
                key={product.id} 
                product={product} 
                onAddToCart={onAddToCart} 
              />
            ))}
          </div>
        ) : (
          <div className="no-products-found">
            <span className="no-products-icon" role="img" aria-label="Not found">
              🔍
            </span>
            <h3 className="no-products-title">No Products Found</h3>
            <p style={{ color: 'var(--text-muted)' }}>
              Try adjusting your search query or clear the filters.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

// Category banners ready for dog, cat, bird, fish, healthcare
