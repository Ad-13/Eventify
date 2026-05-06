import { useReducer, useEffect } from 'react'
import { AuthStateContext, AuthDispatchContext } from './contexts'
import { authReducer, initialState } from './reducer'
import { AUTH_ACTIONS } from './actions'
import { storage } from '../../api/storage'
import { authApi } from '../../api/auth'

export function AuthProvider({ children }) {
  const [state, dispatch] = useReducer(authReducer, {
    ...initialState,
    token: storage.getToken(),
  })

  useEffect(() => {
    if (!state.token) return

  const fetchProfile = async () => {
    try {
      const user = await authApi.getProfile();

      dispatch({
        type: AUTH_ACTIONS.SET_USER,
        payload: user,
      });
    } catch (error) {
      storage.removeToken();
      console.error({ error });
      dispatch({
        type: AUTH_ACTIONS.LOGOUT,
      });
    }
  };

  fetchProfile();
  }, [])

  return (
    <AuthDispatchContext.Provider value={dispatch}>
      <AuthStateContext.Provider value={state}>
        {children}
      </AuthStateContext.Provider>
    </AuthDispatchContext.Provider>
  )
}
