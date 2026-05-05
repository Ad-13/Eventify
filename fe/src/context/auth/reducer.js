import { AUTH_ACTIONS } from "./actions";

export const initialState = {
  user: null,
  loading: false,
  error: null,
};

export function authReducer(state, action) {
  switch (action.type) {
    case AUTH_ACTIONS.LOGIN_START:
      return { ...state, loading: true, error: null };

    case AUTH_ACTIONS.LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        user: action.payload,
        error: null,
      };

    case AUTH_ACTIONS.LOGIN_FAILURE:
      return {
        ...state,
        loading: false,
        user: null,
        error: action.payload,
      };

    case AUTH_ACTIONS.LOGOUT:
      return { ...initialState };

    default:
      throw new Error(`Unknown auth action: ${action.type}`);
  }
}
