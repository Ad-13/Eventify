import { useContext } from "react";
import { AuthStateContext, AuthDispatchContext } from "./contexts";

export function useAuthState() {
  const state = useContext(AuthStateContext);
  if (state === null) {
    throw new Error("useAuthState must be used within an AuthProvider");
  }
  return state;
}

export function useAuthDispatch() {
  const dispatch = useContext(AuthDispatchContext);
  if (dispatch === null) {
    throw new Error("useAuthDispatch must be used within an AuthProvider");
  }
  return dispatch;
}
