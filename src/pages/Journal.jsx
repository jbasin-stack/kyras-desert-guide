import { useState, useEffect } from 'react'
import JournalEntry from '../components/JournalEntry'
import './Journal.css'

function Journal() {
  const [entries, setEntries] = useState([])
  const [newEntry, setNewEntry] = useState('')
  const [selectedMood, setSelectedMood] = useState('')
  const [isLoading, setIsLoading] = useState(true)

  const moods = ['😊', '⭐', '🐫', '🌅', '🌙', '💫', '🏜️', '🎉']

  // Load entries from localStorage on mount
  useEffect(() => {
    try {
      const savedEntries = localStorage.getItem('journalEntries')
      if (savedEntries) {
        const parsed = JSON.parse(savedEntries)
        setEntries(parsed)
      }
    } catch (error) {
      console.error('Error loading journal entries:', error)
    } finally {
      setIsLoading(false)
    }
  }, [])

  // Save entries to localStorage whenever they change
  useEffect(() => {
    if (!isLoading) {
      try {
        localStorage.setItem('journalEntries', JSON.stringify(entries))
      } catch (error) {
        console.error('Error saving journal entries:', error)
      }
    }
  }, [entries, isLoading])

  const handleAddEntry = (e) => {
    e.preventDefault()

    if (!newEntry.trim()) {
      return
    }

    const entry = {
      id: `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
      content: newEntry.trim(),
      timestamp: new Date().toISOString(),
      mood: selectedMood
    }

    setEntries([entry, ...entries]) // Add to beginning (newest first)
    setNewEntry('')
    setSelectedMood('')
  }

  const handleEditEntry = (id, updatedContent, updatedMood) => {
    setEntries(entries.map(entry =>
      entry.id === id
        ? { ...entry, content: updatedContent, mood: updatedMood }
        : entry
    ))
  }

  const handleDeleteEntry = (id) => {
    setEntries(entries.filter(entry => entry.id !== id))
  }

  const handleClearMood = () => {
    setSelectedMood('')
  }

  if (isLoading) {
    return (
      <div className="journal-page">
        <div className="container">
          <p>Loading your journal...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="journal-page">
      <div className="container">
        <header className="journal-header">
          <h1>My Desert Journey 📔</h1>
          <p className="journal-subtitle">
            Capture your memories, thoughts, and experiences from your desert adventure
          </p>
        </header>

        <div className="journal-content">
          {/* Add Entry Form */}
          <section className="add-entry-section">
            <h2>New Entry</h2>
            <form onSubmit={handleAddEntry} className="add-entry-form">
              <div className="form-group">
                <label htmlFor="entry-content" className="sr-only">
                  Entry content
                </label>
                <textarea
                  id="entry-content"
                  value={newEntry}
                  onChange={(e) => setNewEntry(e.target.value)}
                  placeholder="What's on your mind? Share your desert experiences, sights, sounds, and feelings..."
                  className="entry-textarea"
                  rows="6"
                />
              </div>

              <div className="form-group">
                <label className="mood-label">How are you feeling?</label>
                <div className="mood-selector">
                  {moods.map(mood => (
                    <button
                      key={mood}
                      type="button"
                      onClick={() => setSelectedMood(mood)}
                      className={`mood-button ${selectedMood === mood ? 'selected' : ''}`}
                      aria-label={`Select mood ${mood}`}
                    >
                      {mood}
                    </button>
                  ))}
                  {selectedMood && (
                    <button
                      type="button"
                      onClick={handleClearMood}
                      className="mood-clear-button"
                      aria-label="Clear mood selection"
                    >
                      ✕
                    </button>
                  )}
                </div>
              </div>

              <div className="form-actions">
                <button
                  type="submit"
                  className="save-button"
                  disabled={!newEntry.trim()}
                >
                  Save Entry
                </button>
                <span className="character-count">
                  {newEntry.length} characters
                </span>
              </div>
            </form>
          </section>

          {/* Entries Display */}
          <section className="entries-section">
            <div className="entries-header">
              <h2>Your Entries</h2>
              {entries.length > 0 && (
                <span className="entry-count">
                  {entries.length} {entries.length === 1 ? 'entry' : 'entries'}
                </span>
              )}
            </div>

            {entries.length === 0 ? (
              <div className="empty-state">
                <div className="empty-state-icon">✍️</div>
                <p className="empty-state-text">
                  No entries yet. Start writing to capture your desert memories!
                </p>
              </div>
            ) : (
              <div className="entries-list">
                {entries.map(entry => (
                  <JournalEntry
                    key={entry.id}
                    entry={entry}
                    onEdit={handleEditEntry}
                    onDelete={handleDeleteEntry}
                  />
                ))}
              </div>
            )}
          </section>
        </div>
      </div>
    </div>
  )
}

export default Journal
