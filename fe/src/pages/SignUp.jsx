import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { usersApi } from '../api/users'

const SignUp = () => {
  const navigate = useNavigate()

  const [error,    setError]    = useState(null)
  const [loading,  setLoading]  = useState(false)


  const handleSubmit = async e => {
    e.preventDefault()
    setError(null)
    setLoading(true)

    const { name, email, password } = e.target.elements

    try {
      await usersApi.createUser({
        name:     name.value,
        email:    email.value,
        password: password.value,
      })
      navigate('/signin')
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
          <div className="w-11 h-11 rounded-xl bg-vd-accent/15 border border-[--vd-border2]
                          flex items-center justify-center text-lg mx-auto mb-4">
            ✦
          </div>
          <h1 className="font-heading text-xl text-vd-text mb-1">Create account</h1>
          <p className="text-xs text-vd-muted">Join Eventify to create and discover events</p>
        </div>

        {/* Error */}
        {error && <div className="alert-error mb-5">✕ {error}</div>}

        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <div className="field-group">
            <label className="field-label" htmlFor="name">Full name</label>
            <input
              id="name" name="name" type="text"
              autoComplete="name" required
              placeholder="Your name"
              className="field-input"
            />
          </div>

          <div className="field-group">
            <label className="field-label" htmlFor="email">Email</label>
            <input
              id="email" name="email" type="email"
              autoComplete="email" required
              placeholder="you@example.com"
              className="field-input"
            />
          </div>

          <div className="field-group">
            <label className="field-label" htmlFor="password">Password</label>
            <input
              id="password" name="password" type="password"
              autoComplete="new-password" required minLength={8}
              placeholder="••••••••"
              className="field-input"
            />
          </div>

          <button type="submit" disabled={loading} className="btn-accent w-full mt-1">
            {loading ? 'Creating account…' : 'Create account →'}
          </button>
        </form>

        <p className="text-xs text-center text-vd-muted mt-6">
          Already have an account?{' '}
          <Link to="/signin" className="text-vd-accent2 hover:underline">Sign in</Link>
        </p>
      </div>
    </div>
  )
}

export default SignUp
