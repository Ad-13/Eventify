import { storage } from './storage'

const BASE_URL = import.meta.env.VITE_API_URL ?? 'http://localhost:3001/api'

async function request(endpoint, options = {}) {
  const token = storage.getToken()

  const headers = {
    'Content-Type': 'application/json',
    ...options.headers,
    ...(token ? { Authorization: `Bearer ${token}` } : {}),
  }

  const response = await fetch(`${BASE_URL}${endpoint}`, {
    ...options,
    headers,
  })

  if (response.status === 204) return null

  const data = await response.json()

  if (!response.ok) {
    throw new Error(data.message ?? `HTTP ${response.status}`)
  }

  return data
}

export const api = {
  get: (endpoint, options = {}) =>
    request(endpoint, { ...options, method: 'GET' }),

  post: (endpoint, body, options = {}) =>
    request(endpoint, { ...options, method: 'POST', body: JSON.stringify(body) }),

  put: (endpoint, body, options = {}) =>
    request(endpoint, { ...options, method: 'PUT', body: JSON.stringify(body) }),

  delete: (endpoint, options = {}) =>
    request(endpoint, { ...options, method: 'DELETE' }),
}
