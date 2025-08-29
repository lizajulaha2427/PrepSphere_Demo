import React from 'react';
import './FloatingCards.css';

const cards = [
  { id: 1, text: "Communication skills", icon: "👍" },
  { id: 2, text: "Job details imported", icon: "✅" },
  { id: 3, text: "CV uploaded", icon: "📄" },
];

function FloatingCards() {
  return (
    <div className="floating-cards-bg">
      <div className="floating-cards-container">
        {cards.map((card, idx) => (
          <div
            className="floating-card"
            key={card.id}
            style={{
              animationDelay: `${idx * 0.2 + 0.2}s`
            }}
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