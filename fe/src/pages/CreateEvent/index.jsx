import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { eventsApi } from '../../api/events'
import { useAuthState } from '../../context/auth'
import EventPreview from './EventPreview'

const CreateEvent = () => {
  const navigate = useNavigate()
  const { user } = useAuthState()

  const [formData, setFormData] = useState({
    title: '',
    description: '',
    category: '',
    date: '',
    time: '',
    location: '',
  })
  const [error, setError]   = useState(null)
  const [loading, setLoading] = useState(false)

  const handleChange = (e) =>
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError(null)
    setLoading(true)
    try {
      // Combine date + time into ISO string; API expects { date: ISOString, organizerId }
      const datetime = new Date(`${formData.date}T${formData.time || '00:00'}`)
      await eventsApi.create({
        title:       formData.title,
        description: formData.description,
        category:    formData.category,
        location:    formData.location,
        date:        datetime.toISOString(),
        organizerId: user.id,
      })
      navigate('/')
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="max-w-5xl mx-auto px-6 py-10">
      <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-10">

        <div>
          <div className="alert-info mb-7">
            🔒 Protected route — only accessible with a valid token
          </div>

          {error && <div className="alert-error mb-5">✕ {error}</div>}

          <form onSubmit={handleSubmit} className="flex flex-col gap-5">

            <div className="field-group">
              <label className="field-label" htmlFor="title">Event title</label>
              <input
                id="title" name="title" type="text"
                required minLength={3}
                placeholder="Give your event a name"
                value={formData.title}
                onChange={handleChange}
                className="field-input"
              />
            </div>

            <div className="field-group">
              <label className="field-label" htmlFor="description">Description</label>
              <textarea
                id="description" name="description"
                rows={4}
                placeholder="What is this event about?"
                value={formData.description}
                onChange={handleChange}
                className="field-textarea"
              />
            </div>

            <div className="field-group">
              <label className="field-label" htmlFor="category">Category</label>
              <input
                id="category" name="category" type="text"
                placeholder="Music, Tech, Art, Sport…"
                value={formData.category}
                onChange={handleChange}
                className="field-input"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="field-group">
                <label className="field-label" htmlFor="date">Date</label>
                <input
                  id="date" name="date" type="date"
                  required
                  value={formData.date}
                  onChange={handleChange}
                  className="field-input"
                />
              </div>
              <div className="field-group">
                <label className="field-label" htmlFor="time">Time</label>
                <input
                  id="time" name="time" type="time"
                  value={formData.time}
                  onChange={handleChange}
                  className="field-input"
                />
              </div>
            </div>

            <div className="field-group">
              <label className="field-label" htmlFor="location">Location</label>
              <input
                id="location" name="location" type="text"
                required
                placeholder="City, Venue name"
                value={formData.location}
                onChange={handleChange}
                className="field-input"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="btn-accent w-full mt-2"
            >
              {loading ? 'Publishing…' : 'Publish event →'}
            </button>

          </form>
        </div>

        <div className="lg:pt-14">
          <p className="text-[10px] text-vd-dim uppercase tracking-widest mb-4">
            Live preview
          </p>
          <EventPreview formData={formData} />
        </div>

      </div>
    </div>
  )
}

export default CreateEvent
