import ConstellationCard from '../components/ConstellationCard';
import constellationData from '../data/constellations.json';
import './Constellations.css';

function Constellations() {
  const constellations = constellationData.constellations;

  return (
    <div className="constellations-page">
      <div className="page-header">
        <h1>Sahara Night Sky Guide ⭐</h1>
        <div className="intro-section">
          <p className="intro-text">
            The Moroccan Sahara offers some of the clearest, darkest skies on Earth.
            With minimal light pollution and crystal-clear desert air, you can see
            thousands of stars and easily spot major constellations. February is an
            excellent time for stargazing, with comfortable evening temperatures and
            many prominent winter constellations on display.
          </p>
          <div className="stargazing-tips">
            <h3>✨ Stargazing Tips</h3>
            <ul>
              <li><strong>Let your eyes adjust:</strong> Give yourself 15-20 minutes in the dark to see fainter stars</li>
              <li><strong>Best viewing time:</strong> 8 PM - midnight, when constellations are highest in the sky</li>
              <li><strong>Bring layers:</strong> Desert nights get surprisingly cold, even in February!</li>
              <li><strong>Use a red flashlight:</strong> Red light preserves your night vision</li>
              <li><strong>Look away from the moon:</strong> The moon's brightness can make fainter stars harder to see</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="constellations-grid">
        {constellations.map((constellation) => (
          <ConstellationCard
            key={constellation.id}
            constellation={constellation}
          />
        ))}
      </div>

      <div className="page-footer">
        <p className="footer-note">
          🌙 All viewing information is tailored for Morocco (latitude ~31°N) in February.
          Times refer to local evening hours (8-10 PM). Happy stargazing!
        </p>
      </div>
    </div>
  );
}

export default Constellations;
