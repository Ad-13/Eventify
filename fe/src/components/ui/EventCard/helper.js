export const CATEGORY_CONFIG = {
  music: {
    emoji:    '🎵',
    badge:    'text-pink-300   bg-pink-500/20',
    bar:      'bg-gradient-to-r from-pink-600/60  via-purple-600/40 to-transparent',
  },
  tech: {
    emoji:    '💻',
    badge:    'text-blue-300   bg-blue-500/20',
    bar:      'bg-gradient-to-r from-blue-600/60  via-cyan-600/40   to-transparent',
  },
  art: {
    emoji:    '🎨',
    badge:    'text-emerald-300 bg-emerald-500/20',
    bar:      'bg-gradient-to-r from-emerald-600/60 via-teal-600/40 to-transparent',
  },
  sport: {
    emoji:    '⚡',
    badge:    'text-amber-300  bg-amber-500/20',
    bar:      'bg-gradient-to-r from-amber-600/60  via-orange-600/40 to-transparent',
  },
  food: {
    emoji:    '🍽',
    badge:    'text-orange-300 bg-orange-500/20',
    bar:      'bg-gradient-to-r from-orange-600/60 via-red-600/40   to-transparent',
  },
  other: {
    emoji:    '◈',
    badge:    'text-vd-muted   bg-vd-raised',
    bar:      'bg-gradient-to-r from-purple-700/40 via-vd-raised/60 to-transparent',
  },
}

export const getConfig = (category) => {
  const key = category?.toLowerCase() ?? 'other'
  return CATEGORY_CONFIG[key] ?? CATEGORY_CONFIG.other
}

export const getCapacityLabel = (capacity) => {
  if (capacity == null) return { label: 'Free entry', dimmed: true  }
  if (capacity === 0)   return { label: 'Sold out',   dimmed: false }
  return { label: `${capacity} spots left`, dimmed: true }
}
