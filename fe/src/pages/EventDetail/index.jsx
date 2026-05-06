import { useState, useEffect } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { eventsApi } from '../../api/events'
import { useAuthState } from '../../context/auth'
import { formatDateLong } from '../../utils/date'
import PageState from '../../components/ui/PageState'
import Spinner from '../../components/ui/Spinner'
import MetaItem from './MetaItem'

const EventDetail = () => {
  const navigate = useNavigate()

  const { id } = useParams()
  const { user } = useAuthState()

  const [event, setEvent] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [deleting, setDeleting] = useState(false)

  const handleDelete = async () => {
    setDeleting(true)
    try {
      await eventsApi.delete(id)
      navigate('/')
    } catch (err) {
      setError(err.message)
      setDeleting(false)
    }
  }

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
  if (error) return <PageState type="error" message={error} />
  if (!event) return null

  const { title, description, date, location, category } = event

  return (
    <div className="max-w-5xl mx-auto px-6 py-10">

      <Link
        to="/"
        className="inline-flex items-center gap-1.5  text-vd-muted
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
              <span className="absolute top-3 right-3  px-2.5 py-1 rounded-full
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
            <p className=" text-vd-muted leading-relaxed mb-8">{description}</p>
          )}

          {user ? (
            <>
              <button className="btn-accent w-full py-3 mb-3.5">Register for this event</button>
              <button
                onClick={handleDelete}
                disabled={deleting}
                className="w-full py-2.5 rounded-btn text-sm font-medium
                           border border-vd-rose/40 text-vd-rose
                           hover:bg-vd-rose/10 hover:border-vd-rose/70
                           active:scale-[0.98] transition-all duration-200
                           disabled:opacity-40 disabled:cursor-not-allowed"
              >
                {deleting ? 'Deleting…' : 'Delete event'}
              </button>
            </>
          ) : (
            <Link to="/signin" className="btn-accent w-full py-3 text-center block">
              Sign in to register
            </Link>
          )}
        </div>
      </div>
    </div>
  )
}

export default EventDetail
