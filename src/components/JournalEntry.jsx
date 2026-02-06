import { useState } from 'react'
import './JournalEntry.css'

function JournalEntry({ entry, onEdit, onDelete }) {
  const [isEditing, setIsEditing] = useState(false)
  const [editedContent, setEditedContent] = useState(entry.content)
  const [editedMood, setEditedMood] = useState(entry.mood)
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false)

  const moods = ['😊', '⭐', '🐫', '🌅', '🌙', '💫', '🏜️', '🎉']

  const formatTimestamp = (isoString) => {
    const date = new Date(isoString)
    const now = new Date()
    const diffMs = now - date
    const diffMins = Math.floor(diffMs / 60000)
    const diffHours = Math.floor(diffMs / 3600000)
    const diffDays = Math.floor(diffMs / 86400000)

    // Relative time for recent entries
    if (diffMins < 1) {
      return 'Just now'
    } else if (diffMins < 60) {
      return `${diffMins} minute${diffMins === 1 ? '' : 's'} ago`
    } else if (diffHours < 24) {
      return `${diffHours} hour${diffHours === 1 ? '' : 's'} ago`
    } else if (diffDays < 7) {
      return `${diffDays} day${diffDays === 1 ? '' : 's'} ago`
    }

    // Full date for older entries
    return date.toLocaleString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
      hour: 'numeric',
      minute: '2-digit',
      hour12: true
    })
  }

  const handleSaveEdit = () => {
    if (editedContent.trim()) {
      onEdit(entry.id, editedContent.trim(), editedMood)
      setIsEditing(false)
    }
  }

  const handleCancelEdit = () => {
    setEditedContent(entry.content)
    setEditedMood(entry.mood)
    setIsEditing(false)
  }

  const handleDelete = () => {
    onDelete(entry.id)
    setShowDeleteConfirm(false)
  }

  const handleClearEditMood = () => {
    setEditedMood('')
  }

  if (isEditing) {
    return (
      <article className="journal-entry editing">
        <div className="entry-edit-form">
          <div className="form-group">
            <label htmlFor={`edit-content-${entry.id}`} className="sr-only">
              Edit entry content
            </label>
            <textarea
              id={`edit-content-${entry.id}`}
              value={editedContent}
              onChange={(e) => setEditedContent(e.target.value)}
              className="edit-textarea"
              rows="6"
              autoFocus
            />
          </div>

          <div className="form-group">
            <label className="mood-label">Mood:</label>
            <div className="mood-selector">
              {moods.map(mood => (
                <button
                  key={mood}
                  type="button"
                  onClick={() => setEditedMood(mood)}
                  className={`mood-button ${editedMood === mood ? 'selected' : ''}`}
                  aria-label={`Select mood ${mood}`}
                >
                  {mood}
                </button>
              ))}
              {editedMood && (
                <button
                  type="button"
                  onClick={handleClearEditMood}
                  className="mood-clear-button"
                  aria-label="Clear mood selection"
                >
                  ✕
                </button>
              )}
            </div>
          </div>

          <div className="edit-actions">
            <button
              onClick={handleSaveEdit}
              className="save-edit-button"
              disabled={!editedContent.trim()}
            >
              Save Changes
            </button>
            <button
              onClick={handleCancelEdit}
              className="cancel-edit-button"
            >
              Cancel
            </button>
          </div>
        </div>
      </article>
    )
  }

  return (
    <article className="journal-entry">
      <div className="entry-header">
        <div className="entry-meta">
          <time className="entry-timestamp" dateTime={entry.timestamp}>
            {formatTimestamp(entry.timestamp)}
          </time>
          {entry.mood && (
            <span className="entry-mood" aria-label="Entry mood">
              {entry.mood}
            </span>
          )}
        </div>
        <div className="entry-actions">
          <button
            onClick={() => setIsEditing(true)}
            className="edit-button"
            aria-label="Edit entry"
            title="Edit entry"
          >
            ✏️
          </button>
          <button
            onClick={() => setShowDeleteConfirm(true)}
            className="delete-button"
            aria-label="Delete entry"
            title="Delete entry"
          >
            🗑️
          </button>
        </div>
      </div>

      <div className="entry-content">
        <p>{entry.content}</p>
      </div>

      {showDeleteConfirm && (
        <div className="delete-confirm">
          <p className="delete-confirm-message">
            Are you sure you want to delete this entry? This action cannot be undone.
          </p>
          <div className="delete-confirm-actions">
            <button
              onClick={handleDelete}
              className="confirm-delete-button"
            >
              Delete
            </button>
            <button
              onClick={() => setShowDeleteConfirm(false)}
              className="cancel-delete-button"
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </article>
  )
}

export default JournalEntry
