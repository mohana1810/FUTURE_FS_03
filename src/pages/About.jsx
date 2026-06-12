import React from 'react';

export default function About() {
  const values = [
    {
      emoji: "❤️",
      title: "Pet First Policy",
      desc: "Every product we stock is selected with the health, comfort, and happiness of your pets in mind."
    },
    {
      emoji: "🌟",
      title: "Premium Quality",
      desc: "We partner only with certified organic and top-tier pet nutrition brands to ensure optimal health."
    },
    {
      emoji: "🚚",
      title: "Swift Delivery",
      desc: "Get your pet essentials delivered straight to your doorstep within 24 hours of ordering."
    },
    {
      emoji: "💬",
      title: "WhatsApp Support",
      desc: "Have a question about food portions or toy safety? Our vets are just a text message away!"
    }
  ];

  return (
    <div className="fade-in">
      {/* Hero section */}
      <section className="about-hero">
        <h1>About Happy Tails</h1>
        <p style={{ marginTop: '0.5rem', color: 'rgba(255,255,255,0.9)' }}>
          Caring for your furry, feathered, and aquatic family members since 2018.
        </p>
      </section>

      {/* Main Content */}
      <div className="about-content">
        {/* Story Section */}
        <div className="about-section">
          <div className="about-text">
            <h2>Our Story</h2>
            <p>
              Happy Tails Pet Store started with a simple belief: all pets deserve to live happy, active, and healthy lives. Founded by a team of animal advocates and vet care specialists, we set out to build a friendly local store that offers only the absolute best.
            </p>
            <p>
              Today, we serve thousands of pet parents, providing everything from high-protein nutrition kibble to interactive intelligence toys that keep indoor pets mentally stimulated.
            </p>
          </div>
          <div 
            className="about-image"
            style={{ 
              height: '280px', 
              background: 'linear-gradient(135deg, #ffdcd0 0%, #ff8a4b 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '6rem'
            }}
          >
            🐕💨
          </div>
        </div>

        {/* Vision Section */}
        <div className="about-section reverse">
          <div 
            className="about-image"
            style={{ 
              height: '280px', 
              background: 'linear-gradient(135deg, #dcf0fa 0%, #5ba4e5 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '6rem'
            }}
          >
            🐈✨
          </div>
          <div className="about-text">
            <h2>Our Mission</h2>
            <p>
              Our mission is to simplify pet care and bring joy to homes. We strive to offer a highly personalized shopping experience. With our dynamic catalog filters, pet parents can find exactly what they need for dogs, cats, birds, and fish in seconds.
            </p>
            <p>
              We believe in sustainable packaging, healthy ingredients, and providing community vet care counseling so that no pet parent feels alone in their journey.
            </p>
          </div>
        </div>

        {/* Values Section */}
        <div>
          <h2 className="section-title-center">Our Core Values</h2>
          <div className="about-values-grid">
            {values.map((v, i) => (
              <div key={i} className="value-card">
                <span className="value-icon" role="img" aria-label={v.title}>
                  {v.emoji}
                </span>
                <h3 className="value-title">{v.title}</h3>
                <p className="value-desc">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
