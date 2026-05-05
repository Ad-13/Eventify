import { Link } from 'react-router-dom'
import { formatDateShort } from '../../../utils/date'
import { getCapacityLabel, getConfig } from './helper'

const EventCard = ({ event }) => {
  const { id, title, date, location, category, capacity } = event
  const cfg = getConfig(category)
  const capInfo = getCapacityLabel(capacity)

  return (
    <Link
      to={`/events/${id}`}
      className="card flex flex-col group animate-fade-up
                 hover:-translate-y-1 hover:shadow-xl
                 hover:shadow-black/30 hover:border-vd-border2
                 transition-all duration-300"
    >
      <div className="h-24 bg-vd-raised relative overflow-hidden
                      flex items-center justify-center text-4xl">
        <div className={`absolute inset-0 ${cfg.bar}`} />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIj48ZmVUdXJidWxlbmNlIHR5cGU9ImZyYWN0YWxOb2lzZSIgYmFzZUZyZXF1ZW5jeT0iLjY1IiBudW1PY3RhdmVzPSIzIiBzdGl0Y2hUaWxlcz0ic3RpdGNoIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxyZWN0IHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIiBmaWx0ZXI9InVybCgjYSkiIG9wYWNpdHk9IjAuMDQiLz48L3N2Zz4=')] opacity-50" />

        <span className="relative z-10">{cfg.emoji}</span>

        {category && (
          <span className={`absolute top-2.5 left-2.5 z-10
                            text-[14px] px-2 py-0.5 rounded-full font-medium
                            ${cfg.badge}`}>
            {category}
          </span>
        )}
      </div>

      <div className="p-4 flex flex-col flex-1">
        <p className="text-xs text-vd-accent2 font-medium tracking-widest
                      uppercase mb-1.5">
          {formatDateShort(date)}
        </p>

        <h3 className=" font-medium text-vd-text mb-1.5 leading-snug
                       line-clamp-2
                       group-hover:text-vd-accent2 transition-colors duration-200">
          {title}
        </h3>

        <p className="text-[14px] text-vd-muted mb-4 truncate">
          📍 {location}
        </p>

        <div className="mt-auto flex items-center justify-between">
          <span className={`text-[14px] ${capInfo.dimmed ? 'text-vd-dim' : 'text-vd-rose'}`}>
            {capInfo.label}
          </span>
          <span className="text-[14px] px-2.5 py-1 rounded-md
                           bg-vd-accent/10 border border-vd-border2
                           text-vd-accent2
                           group-hover:bg-vd-accent/20 group-hover:border-vd-accent/50
                           transition-all duration-200">
            View →
          </span>
        </div>
      </div>
    </Link>
  )
}

export default EventCard
