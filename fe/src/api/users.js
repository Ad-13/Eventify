import { API_PATHS, getApiUrl } from "./config";


export async function registerUser({ email, password }) {
  const body = { email, password };

  const res = await fetch(getApiUrl(API_PATHS.users), {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });

  let data = null;
  try {
    // parse the response body as JSON
    data = await res.json();
  } catch {
    /* non-JSON body */
  }

  if (!res.ok) {
    let errorMessage =
      typeof data.error === "string"
        ? data.error
        : `Sign up failed (${res.status})`;

    throw new Error(errorMessage);
  }

  return data;
}
