import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { authApi } from "../api/auth";
import { storage } from "../api/storage";
import { useAuthDispatch } from "../context/auth";
import { AUTH_ACTIONS } from "../context/auth";

export function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useAuthDispatch();
  // This react hook is used to navigate to another address.
  const navigate = useNavigate();

  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setError(null);
    dispatch({ type: AUTH_ACTIONS.LOGIN_START });
    setLoading(true);

    try {
      const data = await authApi.login(email.trim(), password);

      storage.setToken(data.token);

      dispatch({
        type: AUTH_ACTIONS.LOGIN_SUCCESS,
        payload: data.user,
      });


      // navigate to the home page
      navigate("/");
    } catch (err) {
      const message =
        err instanceof Error ? err.message : "Something went wrong";
      dispatch({ type: AUTH_ACTIONS.LOGIN_FAILURE, payload: message });
      setError(message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 font-[family-name:var(--font-body)]">
      <div className="w-full max-w-sm rounded-[var(--radius-card)] bg-vd-surface border border-vd-raised p-6 shadow-lg">
        <h1 className="font-[family-name:var(--font-heading)] text-2xl text-vd-text mb-1">
          Sign in
        </h1>
        <p className="text-sm text-vd-muted mb-6">
          Welcome back! Enter your credentials.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label
              htmlFor="signin-email"
              className="block text-sm text-vd-muted mb-1"
            >
              Email
            </label>
            <input
              id="signin-email"
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
              htmlFor="signin-password"
              className="block text-sm text-vd-muted mb-1"
            >
              Password
            </label>
            <input
              id="signin-password"
              type="password"
              autoComplete="current-password"
              required
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

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-[var(--radius-btn)] bg-vd-accent text-vd-bg font-medium py-2.5 hover:opacity-90 disabled:opacity-50"
          >
            {loading ? "Signing in…" : "Sign in"}
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-vd-muted">
          Don&apos;t have an account?{" "}
          <Link to="/signup" className="text-vd-accent2 hover:underline">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
}
