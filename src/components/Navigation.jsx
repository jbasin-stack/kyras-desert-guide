import { NavLink } from 'react-router-dom'
import { useState } from 'react'
import './Navigation.css'

function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
  }

  const navItems = [
    { path: '/', label: 'Home', icon: '🏠' },
    { path: '/constellations', label: 'Constellations', icon: '⭐' },
    { path: '/culture', label: 'Culture', icon: '🕌' },
    { path: '/tips', label: 'Tips', icon: '🧳' },
    { path: '/journal', label: 'Journal', icon: '📔' }
  ]

  return (
    <nav className="navigation">
      {/* Mobile Menu Toggle Button */}
      <button
        className="mobile-menu-toggle"
        onClick={toggleMobileMenu}
        aria-label="Toggle navigation menu"
        aria-expanded={isMobileMenuOpen}
      >
        <span className={`hamburger ${isMobileMenuOpen ? 'open' : ''}`}>
          <span></span>
          <span></span>
          <span></span>
        </span>
      </button>

      {/* Navigation Menu */}
      <ul className={`nav-menu ${isMobileMenuOpen ? 'open' : ''}`}>
        {navItems.map((item) => (
          <li key={item.path}>
            <NavLink
              to={item.path}
              className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
              onClick={closeMobileMenu}
            >
              <span className="nav-icon">{item.icon}</span>
              <span className="nav-label">{item.label}</span>
            </NavLink>
          </li>
        ))}
      </ul>

      {/* Overlay for mobile menu */}
      {isMobileMenuOpen && (
        <div
          className="menu-overlay"
          onClick={closeMobileMenu}
          aria-hidden="true"
        />
      )}
    </nav>
  )
}

export default Navigation
