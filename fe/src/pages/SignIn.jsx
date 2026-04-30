import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useLogin } from '../context/auth'

const SignIn = () => {
  const navigate = useNavigate()
  const login = useLogin()

  const [formData, setFormData] = useState({ email: '', password: '' })
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)

  const handleChange = e => setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))

  const handleSubmit = async e => {
    e.preventDefault()
    setError(null)
    setLoading(true)
    try {
      await login(formData)
      navigate('/')
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-[calc(100vh-57px)] flex items-center justify-center px-4">
      <div className="card w-full max-w-sm p-8">

        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-lg font-heading text-vd-text mb-1">Welcome back</h1>
          <p className="text-xs text-vd-muted">Sign in to manage your events</p>
        </div>

        {/* Error banner */}
        {error && (
          <div className="mb-4 px-3 py-2 rounded-lg bg-rose-500/10 border border-rose-500/30
                          text-xs text-vd-rose">
            {error}
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div>
            <label className="field-label" htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              placeholder="you@example.com"
              value={formData.email}
              onChange={handleChange}
              className="field-input"
            />
          </div>

          <div>
            <label className="field-label" htmlFor="password">Password</label>
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              required
              placeholder="••••••••"
              value={formData.password}
              onChange={handleChange}
              className="field-input"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="btn-accent w-full mt-2 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? 'Signing in…' : 'Sign in →'}
          </button>
        </form>

        <p className="text-xs text-center text-vd-muted mt-6">
          No account yet?{' '}
          <Link to="/signup" className="text-vd-accent2 hover:underline">Sign up</Link>
        </p>

      </div>
    </div>
  )
}

export default SignIn
