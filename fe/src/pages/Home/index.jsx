import { useState, useEffect } from 'react'
import { eventsApi } from '../../api/events'
import EventCard from '../../components/ui/EventCard'
import PageState from '../../components/ui/PageState'
import Hero from './Hero'

const Home = () => {
  const [events, setEvents] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [search, setSearch] = useState('')

  useEffect(() => {
    const load = async () => {
      try {
        const data = await eventsApi.getAll()
        setEvents(data?.results || [])
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }
    load()
  }, [])

  if (loading) return <PageState type="loading" />
  if (error) return <PageState type="error" message={error} />

  return (
    <div>
      <Hero
        search={search}
        onSearch={setSearch}
      />

      <section className="max-w-6xl mx-auto px-6 pb-16">
        {events.length === 0
          ? (
            <PageState
              type="empty"
              message={
                search ? 'No events match your search.'
                  : 'No events yet. Be the first to create one!'
              }
            />
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {events.map(event => <EventCard key={event.id} event={event} />)}
            </div>
          )
        }
      </section>
    </div>
  )
}

export default Home
