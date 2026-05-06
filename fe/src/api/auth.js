import { api } from "./client";

export const authApi = {
  login: (email, password) => api.post("/auth/login", { email, password }),
  getProfile: () => api.get("/auth/profile"),
};
