import { api } from "./client";

export const eventsApi = {
  getAll: () => api.get("/events"),
  getById: (id) => api.get(`/events/${id}`),
  getUpcoming: () => api.get("/events/upcoming"),
  create: (eventData) => api.post("/events", eventData),
};
