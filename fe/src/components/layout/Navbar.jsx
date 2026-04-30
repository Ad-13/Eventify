import { Link } from 'react-router-dom'

export function Navbar() {
  return (
    <nav className="flex items-center justify-between px-6 py-3
                    border-b border-vd-border
                    backdrop-blur-sm sticky top-0 z-50">

      {/* Logo */}
      <Link to="/" className="flex items-center gap-2 text-vd-text text-2xl font-medium">
        <span className="w-6 h-6 rounded-md bg-vd-accent flex items-center justify-center text-white">
          ◈
        </span>
        Eventify
      </Link>

      {/* Nav links */}
      <div className="flex items-center gap-4 text-vd-muted">
        <Link to="/" className="hover:text-vd-text transition-colors">Events</Link>
      </div>

      {/* Auth actions */}
      <div className="flex items-center gap-2">
        <Link to="/signin" className="btn-ghost px-3 py-1.5">Sign in</Link>
        <Link to="/signup" className="btn-accent px-3 py-1.5">Sign up</Link>
      </div>
    </nav>
  )
}
