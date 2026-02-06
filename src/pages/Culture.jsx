import { useState } from 'react'
import FactCard from '../components/FactCard'
import moroccoFacts from '../data/morocco-facts.json'
import './Culture.css'

function Culture() {
  const [selectedCategory, setSelectedCategory] = useState('All')

  // Extract unique categories
  const categories = ['All', ...new Set(moroccoFacts.facts.map(fact => fact.category))]

  // Filter facts based on selected category
  const filteredFacts = selectedCategory === 'All'
    ? moroccoFacts.facts
    : moroccoFacts.facts.filter(fact => fact.category === selectedCategory)

  return (
    <div className="culture-page">
      <header className="culture-header">
        <h1 className="culture-title">Moroccan Culture & Desert Wonders 🕌</h1>
        <p className="culture-intro">
          Immerse yourself in the rich tapestry of Moroccan heritage, ancient Berber traditions,
          and the fascinating secrets of the Sahara Desert. Each fact tells a story of a land
          where golden sands meet timeless culture.
        </p>
      </header>

      <div className="category-filter">
        <div className="category-buttons">
          {categories.map(category => (
            <button
              key={category}
              className={`category-button ${selectedCategory === category ? 'active' : ''}`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
        <div className="fact-count">
          Showing {filteredFacts.length} {filteredFacts.length === 1 ? 'fact' : 'facts'}
        </div>
      </div>

      <div className="facts-grid">
        {filteredFacts.map(fact => (
          <FactCard key={fact.id} fact={fact} />
        ))}
      </div>
    </div>
  )
}

export default Culture
