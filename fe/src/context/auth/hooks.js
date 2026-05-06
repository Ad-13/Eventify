import { useContext } from 'react'
import { AuthStateContext, AuthDispatchContext } from './contexts'
import { AUTH_ACTIONS } from './actions'
import { authApi } from '../../api/auth'
import { storage } from '../../api/storage'

export function useAuthState() {
  const context = useContext(AuthStateContext)
  if (!context) throw new Error('useAuthState must be used within AuthProvider')
  return context
}

export function useAuthDispatch() {
  const context = useContext(AuthDispatchContext)
  if (!context) throw new Error('useAuthDispatch must be used within AuthProvider')
  return context
}

export function useLogin() {
  const dispatch = useAuthDispatch()

  return async (credentials) => {
    dispatch({ type: AUTH_ACTIONS.LOGIN_START })
    try {
      const { token, user } = await authApi.login(credentials)
      storage.setToken(token)
      dispatch({ type: AUTH_ACTIONS.LOGIN_SUCCESS, payload: { token, user } })
    } catch (error) {
      dispatch({ type: AUTH_ACTIONS.LOGIN_ERROR, payload: error.message })
      throw error
    }
  }
}

export function useLogout() {
  const dispatch = useAuthDispatch()

  return () => {
    storage.removeToken()
    dispatch({ type: AUTH_ACTIONS.LOGOUT })
  }
}
