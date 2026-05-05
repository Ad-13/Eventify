import { Link, useNavigate } from 'react-router-dom'

const NotFound = () => {
  const navigate = useNavigate()

  return (
    <div className="min-h-[calc(100vh-57px)] flex flex-col items-center justify-center px-4">

      {/* Glow */}
      <div className="pointer-events-none absolute flex justify-center">
        <div className="w-64 h-64 rounded-full bg-vd-accent/8 blur-3xl" />
      </div>

      {/* Content */}
      <div className="relative text-center">
        <p className="font-heading text-8xl font-medium text-vd-accent/20 mb-2 select-none">
          404
        </p>

        <div className="w-12 h-12 rounded-xl bg-vd-accent/15 border border-[--vd-border2]
                        flex items-center justify-center text-xl mx-auto mb-6 -mt-6">
          ◈
        </div>

        <h1 className="font-heading text-2xl text-vd-text mb-2">
          Page not found
        </h1>
        <p className="text-sm text-vd-muted mb-8 max-w-xs mx-auto">
          The page you're looking for doesn't exist or has been moved.
        </p>

        <div className="flex items-center justify-center gap-3">
          <button onClick={() => navigate(-1)} className="btn-ghost">
            ← Go back
          </button>
          <Link to="/" className="btn-accent">
            Back to events
          </Link>
        </div>
      </div>

    </div>
  )
}

export default NotFound
