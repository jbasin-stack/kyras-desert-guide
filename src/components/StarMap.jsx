import './StarMap.css';

/**
 * StarMap Component
 * A simple SVG-based star visualization component
 * Shows a stylized representation of a constellation
 */
function StarMap({ constellation }) {
  // Generate random-looking but consistent star positions based on constellation name
  const generateStars = (name) => {
    const seed = name.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
    const stars = [];
    const numStars = 20 + (seed % 30); // 20-50 stars

    for (let i = 0; i < numStars; i++) {
      const x = ((seed * (i + 1) * 47) % 100);
      const y = ((seed * (i + 1) * 73) % 100);
      const size = (seed * i) % 3 + 1; // 1-4 size

      stars.push({ x, y, size, id: i });
    }

    return stars;
  };

  const stars = generateStars(constellation?.name || 'Default');

  // Generate constellation shape (simplified representation)
  const generateConstellationLines = (name) => {
    const seed = name.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
    const lines = [];
    const numLines = 3 + (seed % 5); // 3-8 lines

    for (let i = 0; i < numLines; i++) {
      const x1 = ((seed * (i + 1) * 31) % 80) + 10;
      const y1 = ((seed * (i + 1) * 41) % 80) + 10;
      const x2 = ((seed * (i + 2) * 37) % 80) + 10;
      const y2 = ((seed * (i + 2) * 43) % 80) + 10;

      lines.push({ x1, y1, x2, y2, id: i });
    }

    return lines;
  };

  const lines = generateConstellationLines(constellation?.name || 'Default');

  return (
    <div className="star-map">
      <svg
        viewBox="0 0 100 100"
        className="star-map-svg"
        role="img"
        aria-label={`Star map for ${constellation?.name || 'constellation'}`}
      >
        {/* Background gradient */}
        <defs>
          <radialGradient id="skyGradient" cx="50%" cy="50%" r="50%">
            <stop offset="0%" style={{ stopColor: '#2c3e50', stopOpacity: 0.9 }} />
            <stop offset="100%" style={{ stopColor: '#1a1a2e', stopOpacity: 1 }} />
          </radialGradient>
        </defs>
        <rect width="100" height="100" fill="url(#skyGradient)" />

        {/* Constellation lines */}
        <g className="constellation-lines">
          {lines.map((line) => (
            <line
              key={`line-${line.id}`}
              x1={line.x1}
              y1={line.y1}
              x2={line.x2}
              y2={line.y2}
              stroke="rgba(212, 197, 226, 0.5)"
              strokeWidth="0.5"
              className="constellation-line"
            />
          ))}
        </g>

        {/* Stars */}
        <g className="stars">
          {stars.map((star) => (
            <circle
              key={`star-${star.id}`}
              cx={star.x}
              cy={star.y}
              r={star.size * 0.4}
              fill="white"
              className="star"
              opacity={0.6 + (star.size * 0.1)}
            />
          ))}
        </g>

        {/* Brighter key stars */}
        {lines.map((line) => (
          <g key={`keystar-${line.id}`}>
            <circle
              cx={line.x1}
              cy={line.y1}
              r="1.5"
              fill="#F5E6D3"
              className="key-star"
            />
            <circle
              cx={line.x1}
              cy={line.y1}
              r="2.5"
              fill="none"
              stroke="#F5E6D3"
              strokeWidth="0.3"
              opacity="0.4"
              className="star-glow"
            />
          </g>
        ))}
      </svg>
      <p className="star-map-caption">
        Stylized representation of {constellation?.name || 'constellation'}
      </p>
    </div>
  );
}

export default StarMap;
