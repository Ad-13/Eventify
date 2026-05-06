import { Link, useLocation } from 'react-router-dom'
import { useAuthState, useLogout } from '../../context/auth'

const Navbar = () => {
  const path = useLocation().pathname
  const { user } = useAuthState()
  const logout = useLogout()
  

  return (
    <nav className="flex items-center justify-between px-6 py-3
                    border-b border-vd-border
                    backdrop-blur-sm sticky top-0 z-50">

      {/* Logo */}
      <Link to="/" className="flex items-center gap-2.5 text-2xl shrink-0 group">
        <span className="w-7 h-7 rounded-lg bg-vd-accent
                         flex items-center justify-center text-white 
                         group-hover:shadow-lg group-hover:shadow-vd-accent/30
                         transition-shadow duration-300">
          ◈
        </span>
        <span className="font-heading font-medium text-vd-text">
          Eventify
        </span>
      </Link>


      {/* Auth actions */}
      <div className="flex items-center gap-3 shrink-0">
        {user ? (
          <>
            {path === '/events/create' ? null : <Link
              to="/events/create"
              className="btn-accent flex items-center gap-2 group hover:scale-105 active:scale-95 transition-transform duration-200"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2.5}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-5 h-5 group-hover:rotate-90 transition-transform duration-300"
              >
                <line x1="12" y1="5" x2="12" y2="19" />
                <line x1="5" y1="12" x2="19" y2="12" />
              </svg>
              New Event
            </Link>}
            <div className="flex items-center gap-1.5  text-vd-accent2 px-1">
              <span className="w-1.5 h-1.5 rounded-full bg-vd-green shrink-0 animate-pulse" />
              {user.email}
            </div>
            <button onClick={logout} className="btn-ghost  px-3 py-1.5">
              Sign out
            </button>
          </>
        ) : (
          <>
            {/* Sign in — текстовая ссылка, не кнопка */}
            <Link
              to="/signin"
              className=" text-vd-muted hover:text-vd-text
                         border border-vd-muted
                         px-4 py-2 rounded-btn
                         transition-colors duration-200"
            >
              Sign in
            </Link>

            {/* Sign up — полноценная кнопка с весом */}
            <Link
              to="/signup"
              className="inline-flex items-center gap-1.5
                         px-4 py-2 rounded-btn  font-medium
                         bg-vd-accent text-white
                         hover:bg-vd-accent/90 transition-all duration-200
                         hover:shadow-md hover:shadow-white/10
                         active:scale-[0.97]"
            >
              Sign up
            </Link>
          </>
        )}
      </div>
    </nav>
  );
}

export default Navbar
