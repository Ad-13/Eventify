import { Link } from 'react-router-dom'
import { useAuthState, useLogout } from '../../context/auth'

export function Navbar() {
  const { user } = useAuthState()
  const logout   = useLogout()

  return (
    <nav className="flex items-center justify-between px-6 py-3
                    border-b border-vd-border
                    backdrop-blur-sm sticky top-0 z-50">

      {/* Logo */}
      <Link to="/" className="flex items-center gap-2 text-vd-text text-sm font-medium">
        <span className="w-6 h-6 rounded-md bg-vd-accent flex items-center justify-center text-xs text-white">
          ◈
        </span>
        Eventify
      </Link>

      {/* Nav links */}
      <div className="flex items-center gap-4 text-xs text-vd-muted">
        <Link to="/" className="hover:text-vd-text transition-colors">Events</Link>
      </div>

      {/* Auth actions */}
      <div className="flex items-center gap-2">
        {user ? (
          <>
            <Link to="/events/new" className="btn-accent text-xs px-3 py-1.5">
              + Create event
            </Link>
            <span className="text-xs text-vd-accent2 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-vd-green" />
              {user.name}
            </span>
            <button
              onClick={logout}
              className="btn-ghost text-xs px-3 py-1.5"
            >
              Sign out
            </button>
          </>
        ) : (
          <>
            <Link to="/signin" className="btn-ghost text-xs px-3 py-1.5">Sign in</Link>
            <Link to="/signup" className="btn-accent text-xs px-3 py-1.5">Sign up</Link>
          </>
        )}
      </div>
    </nav>
  )
}
