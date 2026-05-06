const Spinner = ({ text = 'Loading…' }) => (
  <div className="flex items-center justify-center min-h-[60vh]">
    <p className="text-vd-muted text-sm animate-pulse">{text}</p>
  </div>
)

export default Spinner
