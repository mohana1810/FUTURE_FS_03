import React from 'react';
import { useNavigate } from 'react-router-dom';
import { categoriesList, slugify, products } from '../data/productsData';
import { Trash2 } from 'lucide-react';

export default function Sidebar({ selectedPet, setSelectedPet, activeCategory }) {
  const navigate = useNavigate();

  const handleCategoryClick = (category) => {
    const slug = slugify(category);
    navigate(`/products/${slug}`);
  };

  const handlePetClick = (pet) => {
    if (selectedPet === pet) {
      setSelectedPet(''); // toggle off
    } else {
      setSelectedPet(pet);
    }
  };

  const clearAllFilters = () => {
    setSelectedPet('');
    navigate('/products');
  };

  // Calculate product counts for pets
  const getPetCount = (pet) => {
    return products.filter(p => p.pet === pet).length;
  };

  // Calculate product counts for categories
  const getCategoryCount = (category) => {
    return products.filter(p => p.category === category).length;
  };

  const petList = ['Dog', 'Cat', 'Bird', 'Fish'];

  return (
    <aside className="sidebar">
      <div>
        <h2 className="sidebar-title">Filters</h2>
      </div>

      {/* Pet Filter */}
      <div className="sidebar-section">
        <h3 className="sidebar-section-title">Filter by Pet</h3>
        <div className="filter-list">
          {petList.map(pet => (
            <button
              key={pet}
              onClick={() => handlePetClick(pet)}
              className={`filter-btn ${selectedPet === pet ? 'active' : ''}`}
            >
              <span>{pet}s</span>
              <span className="filter-count">{getPetCount(pet)}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Category Filter */}
      <div className="sidebar-section">
        <h3 className="sidebar-section-title">Categories</h3>
        <div className="categories-sidebar-grid">
          {categoriesList.map(cat => (
            <button
              key={cat}
              onClick={() => handleCategoryClick(cat)}
              className={`filter-btn ${activeCategory === cat ? 'active' : ''}`}
            >
              <span>{cat}</span>
              <span className="filter-count">{getCategoryCount(cat)}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Reset Button */}
      {(selectedPet || activeCategory) && (
        <button onClick={clearAllFilters} className="reset-filter-btn">
          <Trash2 size={14} style={{ marginRight: '6px', verticalAlign: 'middle' }} />
          Clear Filters
        </button>
      )}
    </aside>
  );
}

// Category banners ready for dog, cat, bird, fish, healthcare
