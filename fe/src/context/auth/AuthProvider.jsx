import { useReducer, useEffect } from "react";
import { AuthStateContext, AuthDispatchContext } from "./contexts";
import { authReducer, initialState } from "./reducer";
import { AUTH_ACTIONS } from "./actions";
import { storage } from "../../api/storage";
import { authApi } from "../../api/auth";

export function AuthProvider({ children }) {
  const [state, dispatch] = useReducer(authReducer, initialState);

  useEffect(() => {
    const token = storage.getToken();
    if (!token) return;

    dispatch({ type: AUTH_ACTIONS.LOGIN_START });

    let cancelled = false;
    authApi
      .getProfile()
      .then((data) => {
        if (!cancelled) {
          dispatch({
            type: AUTH_ACTIONS.LOGIN_SUCCESS,
            payload: data.user ?? data,
          });
        }
      })
      .catch(() => {
        if (!cancelled) {
          storage.removeToken();
          dispatch({ type: AUTH_ACTIONS.LOGOUT });
        }
      });

    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <AuthStateContext.Provider value={state}>
      <AuthDispatchContext.Provider value={dispatch}>
        {children}
      </AuthDispatchContext.Provider>
    </AuthStateContext.Provider>
  );
}
