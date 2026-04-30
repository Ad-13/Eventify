import { Link } from 'react-router-dom'

export function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-4">
      <h1 className="text-4xl text-vd-accent2">404</h1>
      <p className="text-vd-muted text-sm">Page not found</p>
      <Link to="/" className="btn-accent text-sm">Back to events</Link>
    </div>
  )
}
