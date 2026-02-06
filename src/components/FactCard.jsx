import './FactCard.css'

function FactCard({ fact }) {
  const { icon, title, content, category } = fact

  // Determine category color
  const getCategoryColor = (category) => {
    switch (category) {
      case 'Moroccan Traditions':
        return 'var(--dusty-rose)'
      case 'Berber Culture':
        return 'var(--lavender-twilight)'
      case 'Sahara Desert Geography':
        return 'var(--warm-terracotta)'
      case 'Desert Wildlife':
        return 'var(--sage-green)'
      case 'Historical Facts':
        return 'var(--sand-beige)'
      default:
        return 'var(--sand-beige)'
    }
  }

  return (
    <div className="fact-card" style={{ '--category-color': getCategoryColor(category) }}>
      <div className="fact-card-icon">{icon}</div>
      <div className="fact-card-category">{category}</div>
      <h3 className="fact-card-title">{title}</h3>
      <p className="fact-card-content">{content}</p>
    </div>
  )
}

export default FactCard
