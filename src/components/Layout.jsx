import Header from './Header'
import './Layout.css'

function Layout({ children }) {
  return (
    <div className="layout">
      <Header />
      <main className="main-content">
        <div className="container">
          {children}
        </div>
      </main>
      <footer className="footer">
        <div className="container">
          <p>Made with care for Kyras's desert adventure 🌟</p>
        </div>
      </footer>
    </div>
  )
}

export default Layout
