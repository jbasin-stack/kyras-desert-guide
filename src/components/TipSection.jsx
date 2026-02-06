import { useState } from 'react'
import { FiChevronDown, FiChevronUp } from 'react-icons/fi'
import './TipSection.css'

function TipSection({ icon, title, children, defaultOpen = false }) {
  const [isOpen, setIsOpen] = useState(defaultOpen)

  const toggleSection = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className="tip-section">
      <button
        className="tip-section-header"
        onClick={toggleSection}
        aria-expanded={isOpen}
      >
        <div className="tip-section-title">
          <span className="tip-icon" aria-hidden="true">{icon}</span>
          <h2>{title}</h2>
        </div>
        <span className="tip-chevron" aria-hidden="true">
          {isOpen ? <FiChevronUp /> : <FiChevronDown />}
        </span>
      </button>

      <div className={`tip-section-content ${isOpen ? 'open' : 'closed'}`}>
        <div className="tip-section-inner">
          {children}
        </div>
      </div>
    </div>
  )
}

export default TipSection
