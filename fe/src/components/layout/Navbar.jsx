import { Link, NavLink } from 'react-router-dom'
import { useAuthState, useLogout } from '../../context/auth'

const Navbar = () => {
  const { user } = useAuthState()
  const logout = useLogout()

  return (
    <nav className="flex items-center justify-between px-6 py-3
                    border-b border-vd-border
                    backdrop-blur-sm sticky top-0 z-50">

      {/* Logo */}
      <Link to="/" className="flex items-center text-2xl gap-2.5 shrink-0">
        <span className="w-7 h-7 rounded-lg bg-vd-accent
                         flex items-center justify-center
                         text-white font-medium">
          ◈
        </span>
        <span className="font-heading font-medium text-vd-text">
          Eventify
        </span>
      </Link>

      {/* Center nav */}
      <div className="flex items-center gap-6">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? 'text-vd-text font-medium'
              : 'text-vd-muted hover:text-vd-text transition-colors'
          }
        >
          Events
        </NavLink>
      </div>

      {/* Auth actions */}
      <div className="flex items-center gap-2.5 shrink-0">
        {user ? (
          <>
            <Link to="/events/new" className="btn-accent px-3 py-1.5">
              + Create event
            </Link>
            <div className="flex items-center gap-1.5 text-vd-accent2 px-2">
              <span className="w-1.5 h-1.5 rounded-full bg-vd-green shrink-0" />
              {user.name}
            </div>
            <button
              onClick={logout}
              className="btn-ghost px-3 py-1.5"
            >
              Sign out
            </button>
          </>
        ) : (
          <>
            <Link to="/signin" className="btn-ghost px-3 py-1.5">Sign in</Link>
            <Link to="/signup" className="btn-accent px-3 py-1.5">Sign up</Link>
          </>
        )}
      </div>
    </nav>
  )
}

export default Navbar