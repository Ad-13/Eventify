import { Link } from 'react-router-dom'
import { formatDateShort } from '../../../utils/date'
import { getCategoryConfig, getGradient } from './helper'

const EventCard = ({ event }) => {
  const { id, title, date, location, category } = event
  const cat = getCategoryConfig(category)
  const gradient = getGradient(category)

  return (
    <Link
      to={`/events/${id}`}
      className="card flex flex-col group
                 hover:border-[--vd-border2] hover:shadow-lg
                 hover:shadow-vd-accent/5 transition-all duration-200"
    >
      {/* Banner */}
      <div className={`h-16 bg-linear-to-br ${gradient}
                       flex items-center justify-center text-2xl relative`}>
        {cat.emoji}
        {category && (
          <span className={`absolute top-2 left-2 text-[10px] px-2 py-0.5
                            rounded-full font-medium ${cat.className}`}>
            {category}
          </span>
        )}
      </div>

      {/* Body */}
      <div className="p-3 flex flex-col flex-1">
        <p className="text-[10px] text-vd-accent2 font-medium tracking-wide mb-1">
          {formatDateShort(date)}
        </p>
        <h3 className="text-sm font-medium text-vd-text mb-1
                       overflow-hidden text-ellipsis whitespace-nowrap
                       group-hover:text-vd-accent2 transition-colors">
          {title}
        </h3>
        <p className="text-[10px] text-vd-muted mb-3">📍 {location}</p>

        <div className="mt-auto flex items-center justify-end">
          <span className="text-[10px] px-2 py-1 rounded-md
                           bg-vd-accent/10 border border-[--vd-border2]
                           text-vd-accent2">
            View →
          </span>
        </div>
      </div>
    </Link>
  )
}

export default EventCard
