import { SET_AUTHENTIFICATION, INCREMENT_ACTION_COUNT } from "./action-types";

export function setAuthentification(isLoggedIn) {
  return function(dispatch) {
    dispatch({
      type: SET_AUTHENTIFICATION,
      payload: isLoggedIn
    });
    dispatch({
      type: INCREMENT_ACTION_COUNT
    });
  };
}
