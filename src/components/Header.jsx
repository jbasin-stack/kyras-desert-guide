import { Link } from 'react-router-dom'
import Navigation from './Navigation'
import './Header.css'

function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <Link to="/" className="site-title">
          <span className="site-icon">🏜️</span>
          <span className="site-name">Kyras's Desert Guide</span>
        </Link>

        <Navigation />
      </div>
    </header>
  )
}

export default Header
