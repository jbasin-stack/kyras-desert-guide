import { Link } from 'react-router-dom'

function Home() {
  return (
    <div>
      <h1>Welcome to Kyras's Desert Guide</h1>
      <p>Your companion for exploring the Moroccan Sahara</p>
      <nav>
        <ul>
          <li><Link to="/constellations">Constellation Guide</Link></li>
          <li><Link to="/culture">Culture & Fun Facts</Link></li>
          <li><Link to="/tips">Travel Tips</Link></li>
          <li><Link to="/journal">Trip Journal</Link></li>
        </ul>
      </nav>
    </div>
  )
}

export default Home
