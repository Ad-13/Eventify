import { api } from './client'

export const authApi = {
  createUser: userData => api.post('/users', userData),
}
