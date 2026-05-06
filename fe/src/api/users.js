import { api } from "./client";

export const usersApi = {
  createUser: (userData) => api.post("/users", userData),
  getUsers: () => api.get("/users"),
};
