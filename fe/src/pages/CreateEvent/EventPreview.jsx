import { formatDateShort } from '../../utils/date'

const CATEGORY_EMOJI = {
  music: '🎵', tech: '💻', art: '🎨',
  sport: '⚡', food: '🍽',
}

const getEmoji = (category) =>
  CATEGORY_EMOJI[category?.toLowerCase()] ?? '🎉'

const buildDateString = (date, time) => {
  if (!date) return null
  const iso = `${date}T${time || '00:00'}`
  return formatDateShort(iso)
}

const EventPreview = ({ formData }) => {
  const { title, date, time, location, category } = formData
  const dateLabel = buildDateString(date, time)
  const emoji     = getEmoji(category)

  return (
    <div className="card">
      {/* Banner */}
      <div className="h-28 bg-linear-to-br from-[#2d1b4e] to-vd-surface
                      flex items-center justify-center text-4xl relative">
        {emoji}
        {category && (
          <span className="absolute top-2.5 left-2.5 text-[10px] px-2 py-0.5
                           rounded-full bg-vd-accent/20 border border-vd-border2
                           text-vd-accent2">
            {category}
          </span>
        )}
      </div>

      {/* Body */}
      <div className="p-4">
        {dateLabel && (
          <p className="text-[10px] text-vd-accent2 font-medium tracking-wide mb-1.5">
            {dateLabel}
          </p>
        )}
        <h3 className="text-sm font-medium text-vd-text mb-1">
          {title || 'Your event title'}
        </h3>
        <p className="text-[10px] text-vd-muted">
          📍 {location || 'City, Venue'}
        </p>
      </div>
    </div>
  )
}

export default EventPreview
