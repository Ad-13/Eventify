import { useState } from "react";
import { Link } from "react-router-dom";
import { usersApi } from "../api/users";


export default function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [successMsg, setSuccessMsg] = useState(null);

  async function handleSubmit(e) {
    e.preventDefault();
    setError(null);
    setSuccessMsg(null);
    setLoading(true);
    try {
      await usersApi.createUser({ email: email.trim(), password });
      setSuccessMsg("Account created. You can sign in next.");
      setEmail("");
      setPassword("");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 font-[family-name:var(--font-body)]">
      <div className="w-full max-w-sm rounded-[var(--radius-card)] bg-vd-surface border border-vd-raised p-6 shadow-lg">
        <h1 className="font-[family-name:var(--font-heading)] text-2xl text-vd-text mb-1">
          Sign up
        </h1>
        <p className="text-sm text-vd-muted mb-6">
          Create an Eventify account (password min. 8 characters).
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label
              htmlFor="signup-email"
              className="block text-sm text-vd-muted mb-1"
            >
              Email
            </label>
            <input
              id="signup-email"
              type="email"
              autoComplete="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-[var(--radius-btn)] bg-vd-raised border border-vd-dim px-3 py-2 text-vd-text placeholder:text-vd-dim focus:outline-none focus:ring-2 focus:ring-vd-accent"
            />
          </div>
          <div>
            <label
              htmlFor="signup-password"
              className="block text-sm text-vd-muted mb-1"
            >
              Password
            </label>
            <input
              id="signup-password"
              type="password"
              autoComplete="new-password"
              required
              minLength={8}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full rounded-[var(--radius-btn)] bg-vd-raised border border-vd-dim px-3 py-2 text-vd-text placeholder:text-vd-dim focus:outline-none focus:ring-2 focus:ring-vd-accent"
            />
          </div>

          {error && (
            <p className="text-sm text-vd-rose" role="alert">
              {error}
            </p>
          )}
          {successMsg && (
            <p className="text-sm text-vd-green" role="status">
              {successMsg}
            </p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-[var(--radius-btn)] bg-vd-accent text-vd-bg font-medium py-2.5 hover:opacity-90 disabled:opacity-50"
          >
            {loading ? "Creating account…" : "Create account"}
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-vd-muted">
          <Link to="/" className="text-vd-accent2 hover:underline">
            ← Back to home
          </Link>
        </p>
      </div>
    </div>
  );
}
