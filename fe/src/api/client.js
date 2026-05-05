import { storage } from "./storage";

const BASE_URL = "/api";

async function request(endpoint, options = {}) {
  const token = storage.getToken();

  const headers = {
    "Content-Type": "application/json",
    ...options.headers,
    ...(token ? { Authorization: `Bearer ${token}` } : {}),
  };

  let response;
  try {
    response = await fetch(`${BASE_URL}${endpoint}`, {
      ...options,
      headers,
    });
  } catch (error) {
    throw new Error("Failed to fetch resource", {
      cause: error,
    });
  }

  if (response.status === 204) return null;

  const data = await response.json();

  if (!response.ok) {
    throw new Error(
      data.error ?? data.message ?? `HTTP ${response.status} ${response.statusText}`,
    );
  }

  return data;
}

export const api = {
  get: (endpoint, options) => request(endpoint, { ...options, method: "GET" }),
  post: (endpoint, data, options) =>
    request(endpoint, { ...options, method: "POST", body: JSON.stringify(data) }),
  put: (endpoint, data, options) =>
    request(endpoint, { ...options, method: "PUT", body: JSON.stringify(data) }),
  delete: (endpoint, options) =>
    request(endpoint, { ...options, method: "DELETE" }),
};
