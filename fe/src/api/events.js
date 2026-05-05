import { api } from "./client";

export const eventsApi = {
  create: (eventData) => api.post("/events", eventData),
};
