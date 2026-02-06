import { useState } from 'react';
import './ConstellationCard.css';

function ConstellationCard({ constellation }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  // Get visibility color indicator
  const getVisibilityColor = (visibility) => {
    if (visibility.toLowerCase().includes('very') && visibility.toLowerCase().includes('easy')) {
      return 'easy';
    } else if (visibility.toLowerCase().includes('easy')) {
      return 'easy';
    } else if (visibility.toLowerCase().includes('moderate')) {
      return 'moderate';
    }
    return 'easy'; // default
  };

  const visibilityClass = getVisibilityColor(constellation.visibility);

  return (
    <div className={`constellation-card ${isExpanded ? 'expanded' : ''}`}>
      <div className="card-header" onClick={toggleExpanded}>
        <div className="card-title-section">
          <h3 className="constellation-name">{constellation.name}</h3>
          <p className="constellation-arabic">{constellation.arabicName}</p>
        </div>
        <div className="card-meta">
          <span className={`visibility-badge ${visibilityClass}`}>
            {constellation.visibility}
          </span>
          <button
            className="expand-button"
            aria-label={isExpanded ? 'Collapse details' : 'Expand details'}
            type="button"
          >
            <span className="expand-icon">{isExpanded ? '−' : '+'}</span>
          </button>
        </div>
      </div>

      <div className="card-description">
        <p>{constellation.description}</p>
      </div>

      {isExpanded && (
        <div className="card-details">
          <div className="detail-section">
            <h4>✨ Mythology</h4>
            <p>{constellation.mythology}</p>
          </div>

          <div className="detail-section">
            <h4>🔍 How to Locate</h4>
            <p>{constellation.howToLocate}</p>
          </div>

          <div className="detail-section">
            <h4>🕐 Best Viewing Time</h4>
            <p>{constellation.bestViewingTime}</p>
          </div>

          <div className="detail-section">
            <h4>⭐ Key Stars</h4>
            <ul className="key-stars-list">
              {constellation.keyStars.map((star, index) => (
                <li key={index} className="star-item">
                  <strong>{star.name}</strong>
                  <p>{star.description}</p>
                  <p className="star-brightness">
                    <em>{star.brightness}</em>
                  </p>
                </li>
              ))}
            </ul>
          </div>

          <div className="detail-section fun-fact">
            <h4>💫 Fun Fact</h4>
            <p>{constellation.funFact}</p>
          </div>

          <div className="detail-section cultural">
            <h4>🕌 Cultural Significance</h4>
            <p>{constellation.culturalSignificance}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default ConstellationCard;
