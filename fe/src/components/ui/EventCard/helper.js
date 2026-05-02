export const CATEGORY_CONFIG = {
  music: { emoji: '🎵', className: 'text-vd-rose  bg-rose-500/20' },
  tech: { emoji: '💻', className: 'text-vd-blue  bg-blue-500/20' },
  art: { emoji: '🎨', className: 'text-vd-green bg-emerald-500/20' },
  sport: { emoji: '⚡', className: 'text-vd-blue  bg-blue-500/20' },
  food: { emoji: '🍽', className: 'text-vd-rose  bg-rose-500/20' },
  other: { emoji: '◈',  className: 'text-vd-muted bg-vd-raised' },
}

export const CARD_GRADIENTS = {
  music: 'from-[#2d1b4e] to-vd-surface',
  tech: 'from-[#1b2d4e] to-vd-surface',
  art: 'from-[#1b4e2d] to-vd-surface',
  sport: 'from-[#1b2d4e] to-vd-surface',
  food: 'from-[#4e1b2d] to-vd-surface',
  other: 'from-vd-raised to-vd-surface',
}

export const getCategoryConfig = category => {
  const key = category?.toLowerCase() ?? 'other'
  return CATEGORY_CONFIG[key] ?? CATEGORY_CONFIG.other
}

export const getGradient = category => {
  const key = category?.toLowerCase() ?? 'other'
  return CARD_GRADIENTS[key] ?? CARD_GRADIENTS.other
}
