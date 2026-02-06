import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Constellations from './pages/Constellations'
import Culture from './pages/Culture'
import Tips from './pages/Tips'
import Journal from './pages/Journal'

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/constellations" element={<Constellations />} />
          <Route path="/culture" element={<Culture />} />
          <Route path="/tips" element={<Tips />} />
          <Route path="/journal" element={<Journal />} />
        </Routes>
      </Layout>
    </Router>
  )
}

export default App
