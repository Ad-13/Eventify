import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { eventsApi } from '../../api/events'
import { useAuthState } from '../../context/auth'
import { formatDateLong } from '../../utils/date'
import { getInitials } from '../../utils/string'
import { PageState } from '../../components/ui/PageState'
import { Spinner } from '../../components/ui/Spinner'
import { MetaItem } from './MetaItem'

const EventDetail = () => {
  const { id }   = useParams()
  const { user } = useAuthState()

  const [event,   setEvent]   = useState(null)
  const [loading, setLoading] = useState(true)
  const [error,   setError]   = useState(null)

  useEffect(() => {
    const load = async () => {
      try {
        const data = await eventsApi.getById(id)
        setEvent(data)
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }
    load()
  }, [id])

  if (loading) return <Spinner text="Loading event…" />
  if (error)   return <PageState type="error" message={error} />
  if (!event)  return null

  const { title, description, date, location, category, organizer } = event

  return (
    <div className="max-w-5xl mx-auto px-6 py-10">

      <Link
        to="/"
        className="inline-flex items-center gap-1.5 text-xs text-vd-muted
                   hover:text-vd-text transition-colors mb-8"
      >
        ← Back to events
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-8">

        {/* Left */}
        <div>
          <div className="h-44 rounded-xl bg-linear-to-br from-[#2d1b4e] to-vd-surface
                          border border-[--vd-border] flex items-center justify-center
                          text-5xl relative mb-6">
            🎵
            {category && (
              <span className="absolute top-3 right-3 text-xs px-2.5 py-1 rounded-full
                               bg-rose-500/20 text-vd-rose">
                {category}
              </span>
            )}
          </div>

          <h1 className="font-heading text-2xl text-vd-text mb-6">{title}</h1>

          <div className="flex flex-col gap-3 mb-6">
            <MetaItem icon="📅" text={formatDateLong(date)} />
            <MetaItem icon="📍" text={location} />
          </div>

          {description && (
            <p className="text-sm text-vd-muted leading-relaxed mb-8">{description}</p>
          )}

          {user ? (
            <button className="btn-accent w-full py-3">Register for this event</button>
          ) : (
            <Link to="/signin" className="btn-accent w-full py-3 text-center block">
              Sign in to register
            </Link>
          )}
        </div>

        {/* Right */}
        {organizer && (
          <div>
            <p className="text-[10px] text-vd-dim uppercase tracking-widest mb-3">
              Organiser
            </p>
            <div className="card flex items-center gap-3 p-4">
              <div className="w-9 h-9 rounded-full bg-vd-accent/20 border border-[--vd-border2]
                              flex items-center justify-center text-xs text-vd-accent2
                              font-medium shrink-0">
                {getInitials(organizer.name)}
              </div>
              <div>
                <p className="text-sm font-medium text-vd-text">{organizer.name}</p>
                <p className="text-xs text-vd-muted">{organizer.email}</p>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  )
}

export default EventDetail
