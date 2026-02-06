// Star positions (x, y as percentages) and connecting lines for each constellation
// Coordinates are in a 100x100 viewBox
const constellationStars = {
  orion: {
    stars: [
      { x: 32, y: 18, r: 3.5, name: 'Betelgeuse', bright: true },
      { x: 68, y: 15, r: 2.5, name: 'Bellatrix' },
      { x: 40, y: 45, r: 2, name: 'Alnitak' },
      { x: 50, y: 44, r: 2.2, name: 'Alnilam' },
      { x: 60, y: 43, r: 2, name: 'Mintaka' },
      { x: 35, y: 78, r: 2, name: 'Saiph' },
      { x: 67, y: 80, r: 3.2, name: 'Rigel', bright: true },
      { x: 48, y: 55, r: 1.2, name: 'Nebula' },
      { x: 50, y: 60, r: 1, name: '' },
      { x: 46, y: 58, r: 1, name: '' },
    ],
    lines: [
      [0, 1], // shoulders
      [0, 2], // left shoulder to belt
      [1, 4], // right shoulder to belt
      [2, 3], [3, 4], // belt
      [2, 5], // belt to left foot
      [4, 6], // belt to right foot
      [3, 7], // belt to sword
    ],
  },
  'canis-major': {
    stars: [
      { x: 48, y: 15, r: 4, name: 'Sirius', bright: true },
      { x: 28, y: 30, r: 2.2, name: 'Mirzam' },
      { x: 55, y: 48, r: 2, name: 'Wezen' },
      { x: 42, y: 68, r: 2.5, name: 'Adhara' },
      { x: 65, y: 58, r: 1.8, name: 'Aludra' },
      { x: 32, y: 78, r: 1.5, name: 'Furud' },
      { x: 60, y: 32, r: 1.5, name: '' },
    ],
    lines: [
      [0, 1], // Sirius to Mirzam
      [0, 6], // Sirius to mid body
      [6, 2], // to Wezen
      [2, 3], // Wezen to Adhara
      [2, 4], // Wezen to Aludra
      [3, 5], // Adhara to Furud
      [1, 3], // Mirzam to Adhara
    ],
  },
  'ursa-major': {
    stars: [
      { x: 72, y: 28, r: 2.8, name: 'Dubhe', bright: true },
      { x: 68, y: 42, r: 2.5, name: 'Merak' },
      { x: 55, y: 46, r: 2.2, name: 'Phecda' },
      { x: 58, y: 32, r: 2, name: 'Megrez' },
      { x: 42, y: 30, r: 2.3, name: 'Alioth' },
      { x: 30, y: 35, r: 2.2, name: 'Mizar' },
      { x: 18, y: 45, r: 2.5, name: 'Alkaid' },
      { x: 32, y: 37, r: 1, name: 'Alcor' },
    ],
    lines: [
      [0, 1], // Dubhe to Merak (pointer stars)
      [1, 2], // Merak to Phecda
      [2, 3], // Phecda to Megrez
      [3, 0], // Megrez to Dubhe (bowl)
      [3, 4], // Megrez to Alioth (handle)
      [4, 5], // Alioth to Mizar
      [5, 6], // Mizar to Alkaid
    ],
  },
  cassiopeia: {
    stars: [
      { x: 15, y: 48, r: 2.5, name: 'Caph' },
      { x: 32, y: 25, r: 2.8, name: 'Schedar', bright: true },
      { x: 50, y: 52, r: 2.5, name: 'Navi' },
      { x: 68, y: 25, r: 2.3, name: 'Ruchbah' },
      { x: 85, y: 48, r: 2.2, name: 'Segin' },
    ],
    lines: [
      [0, 1],
      [1, 2],
      [2, 3],
      [3, 4],
    ],
  },
  taurus: {
    stars: [
      { x: 45, y: 50, r: 3.2, name: 'Aldebaran', bright: true },
      { x: 78, y: 22, r: 2.5, name: 'Elnath' },
      { x: 52, y: 42, r: 1.8, name: 'Ain' },
      { x: 70, y: 30, r: 1.5, name: 'Tianguan' },
      { x: 38, y: 42, r: 1.5, name: '' },
      { x: 42, y: 55, r: 1.5, name: '' },
      // Pleiades cluster
      { x: 18, y: 18, r: 1.3, name: 'Pleiades' },
      { x: 22, y: 15, r: 1.1, name: '' },
      { x: 20, y: 22, r: 1, name: '' },
      { x: 16, y: 14, r: 0.9, name: '' },
      { x: 24, y: 20, r: 0.9, name: '' },
      { x: 14, y: 20, r: 0.8, name: '' },
      // Hyades V
      { x: 50, y: 48, r: 1.3, name: '' },
      { x: 55, y: 38, r: 1.2, name: '' },
    ],
    lines: [
      [0, 2], [2, 12], [12, 13], [13, 3], [3, 1], // upper horn V
      [0, 4], [4, 5], // lower part
      [0, 5], // Aldebaran to body
    ],
  },
  gemini: {
    stars: [
      { x: 35, y: 15, r: 2.8, name: 'Castor', bright: true },
      { x: 55, y: 18, r: 3, name: 'Pollux', bright: true },
      { x: 30, y: 35, r: 1.8, name: 'Mebsuta' },
      { x: 25, y: 55, r: 1.5, name: 'Tejat' },
      { x: 38, y: 75, r: 2.2, name: 'Alhena' },
      { x: 52, y: 42, r: 1.8, name: 'Wasat' },
      { x: 58, y: 58, r: 1.5, name: 'Mekbuda' },
      { x: 62, y: 72, r: 1.5, name: '' },
    ],
    lines: [
      [0, 2], [2, 3], [3, 4], // Castor line
      [1, 5], [5, 6], [6, 7], // Pollux line
      [0, 1], // Twins connected at heads
      [2, 5], // Cross connection
    ],
  },
  leo: {
    stars: [
      { x: 30, y: 62, r: 3, name: 'Regulus', bright: true },
      { x: 25, y: 45, r: 1.8, name: 'Eta Leo' },
      { x: 32, y: 30, r: 2.2, name: 'Algieba' },
      { x: 22, y: 20, r: 1.8, name: 'Rasalas' },
      { x: 38, y: 22, r: 1.5, name: 'Epsilon' },
      { x: 62, y: 38, r: 2, name: 'Zosma' },
      { x: 55, y: 48, r: 1.8, name: 'Chertan' },
      { x: 80, y: 35, r: 2.5, name: 'Denebola', bright: true },
    ],
    lines: [
      [0, 1], [1, 2], [2, 3], // Sickle lower
      [3, 4], [4, 2], // Sickle upper (head)
      [0, 6], [6, 5], [5, 7], // Body to Denebola
    ],
  },
};

export default constellationStars;
