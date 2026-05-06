const PageState = ({ type, message }) => {
  const states = {
    loading: { icon: '◌', text: 'Loading events…' },
    error: { icon: '✕', text: message ?? 'Something went wrong' },
    empty: { icon: '◈', text: 'No events yet. Be the first to create one!' },
  }
  const { icon, text } = states[type]

  return (
    <div className="flex flex-col items-center justify-center py-32 gap-3">
      <span className="text-3xl text-vd-dim">{icon}</span>
      <p className="text-vd-muted text-sm">{text}</p>
    </div>
  )
}

export default PageState
