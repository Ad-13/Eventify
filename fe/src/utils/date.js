export const formatDateShort = dateStr =>
  new Date(dateStr)
    .toLocaleDateString('en-GB', {
      weekday: 'short',
      day:     'numeric',
      month:   'short',
      hour:    '2-digit',
      minute:  '2-digit',
    })
    .toUpperCase()

export const formatDateLong = dateStr =>
  new Date(dateStr).toLocaleDateString('en-GB', {
    weekday: 'long',
    day:     'numeric',
    month:   'long',
    year:    'numeric',
    hour:    '2-digit',
    minute:  '2-digit',
  })
