export const API_BASE_URL = "http://localhost:3001/api";

export const API_PATHS = {
  users: "/users",
  authLogin: "/auth/login",
  authProfile: "/auth/profile",
};

/**
 * Full URL for an API path, e.g. getApiUrl(API_PATHS.authLogin)
 */
export function getApiUrl(path) {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${API_BASE_URL}${normalized}`;
}
