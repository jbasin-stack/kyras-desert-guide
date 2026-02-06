import { Link } from 'react-router-dom'
import './Home.css'

function Home() {
  // Get current date
  const currentDate = new Date().toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })

  // Array of Moroccan proverbs
  const proverbs = [
    "The desert teaches patience and the night reveals wisdom",
    "The tree of patience bears the sweetest fruit",
    "If you are going to rest under a tree, at least choose a big tree",
    "The desert is an ocean in which no oar is dipped",
    "He who has not travelled thinks his mother is the best cook",
    "A night sky without stars is like a story without meaning"
  ]

  // Select a random proverb (or use date-based selection for consistency)
  const selectedProverb = proverbs[new Date().getDay() % proverbs.length]

  const navigationCards = [
    {
      icon: '⭐',
      title: 'Constellation Guide',
      description: 'Explore the Sahara night sky',
      path: '/constellations',
      color: 'lavender'
    },
    {
      icon: '🕌',
      title: 'Culture & Facts',
      description: 'Discover Moroccan heritage',
      path: '/culture',
      color: 'terracotta'
    },
    {
      icon: '🧳',
      title: 'Travel Tips',
      description: 'Essential desert wisdom',
      path: '/tips',
      color: 'sage'
    },
    {
      icon: '📔',
      title: 'Trip Journal',
      description: 'Capture your memories',
      path: '/journal',
      color: 'rose'
    }
  ]

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">Welcome to Kyras's Desert Adventure Guide! 🐫</h1>
          <p className="hero-subtitle">
            Your companion for exploring the magical Moroccan Sahara
          </p>
          <div className="current-date">
            <span className="date-icon">📅</span>
            <span className="date-text">{currentDate}</span>
          </div>
        </div>
        {/* Desert dune shapes as decorative elements */}
        <div className="dune-decoration dune-1"></div>
        <div className="dune-decoration dune-2"></div>
        <div className="dune-decoration dune-3"></div>
        {/* Star accents */}
        <div className="star-accent star-1">✨</div>
        <div className="star-accent star-2">⭐</div>
        <div className="star-accent star-3">✨</div>
      </section>

      {/* Quick Navigation Cards */}
      <section className="navigation-cards">
        <h2 className="section-title">Start Your Journey</h2>
        <div className="cards-grid">
          {navigationCards.map((card, index) => (
            <Link
              key={index}
              to={card.path}
              className={`nav-card nav-card-${card.color}`}
            >
              <div className="card-icon">{card.icon}</div>
              <h3 className="card-title">{card.title}</h3>
              <p className="card-description">{card.description}</p>
              <div className="card-arrow">→</div>
            </Link>
          ))}
        </div>
      </section>

      {/* Daily Inspiration */}
      <section className="inspiration">
        <div className="inspiration-content">
          <div className="inspiration-icon">🌙</div>
          <blockquote className="proverb">
            "{selectedProverb}"
          </blockquote>
          <p className="proverb-attribution">— Moroccan Wisdom</p>
        </div>
      </section>
    </div>
  )
}

export default Home
