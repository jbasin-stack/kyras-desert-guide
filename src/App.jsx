import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Constellations from './pages/Constellations'
import Culture from './pages/Culture'
import Tips from './pages/Tips'
import Journal from './pages/Journal'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/constellations" element={<Constellations />} />
        <Route path="/culture" element={<Culture />} />
        <Route path="/tips" element={<Tips />} />
        <Route path="/journal" element={<Journal />} />
      </Routes>
    </Router>
  )
}

export default App
