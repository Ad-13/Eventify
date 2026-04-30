import { AUTH_ACTIONS } from './actions'

export const initialState = {
  user:      null,    // { id, name, email }
  token:     null,    // JWT string
  isLoading: false,
  error:     null,
}

export function authReducer(state, action) {
  switch (action.type) {

    case AUTH_ACTIONS.LOGIN_START:
      return { ...state, isLoading: true, error: null }

    case AUTH_ACTIONS.LOGIN_SUCCESS:
      return {
        ...state,
        isLoading: false,
        user:  action.payload.user,
        token: action.payload.token,
        error: null,
      }

    case AUTH_ACTIONS.LOGIN_ERROR:
      return { ...state, isLoading: false, error: action.payload }

    case AUTH_ACTIONS.LOGOUT:
      return { ...initialState }

    case AUTH_ACTIONS.SET_USER:
      return { ...state, user: action.payload, isLoading: false }

    default:
      return state
  }
}
