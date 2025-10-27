import React from 'react';
import './FloatingCards.css';

const cards = [
  { id: 1, text: "Communication skills", icon: "👍" },
  { id: 2, text: "Job details imported", icon: "✅" },
  { id: 3, text: "CV uploaded", icon: "📄" },
  { id: 4, text: "Hello", icon: "🍀" },
];

function FloatingCards() {
  return (
    <div className="floating-cards-bg">
      {/* gradient */}
      <div className="gradient-center"></div>

      {/* glass blur boxes */}
      <div className="glass-box one"></div>
      <div className="glass-box two"></div>
      <div className="glass-box three"></div>
      <div className="glass-box four"></div>

      {/* main image */}
      <img
        src="https://cdn.prod.website-files.com/679159b0ee761d7c6714fd7f/6847e20c38695282ae91fd09_Interview%20Feedback.jpg"
        alt="Interview Preview"
        className="floating-main-img"
      />

      {/* floating cards */}
      <div className="floating-cards-container">
        {cards.map((card, idx) => (
          <div
            className="floating-card"
            key={card.id}
            style={{ animationDelay: `${idx * 0.2 + 0.2}s` }}
          >
            <span className="floating-card-icon">{card.icon}</span>
            <span>{card.text}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FloatingCards;
