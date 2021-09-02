/* eslint-disable import/no-anonymous-default-export */
import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  LOGOUT,
} from "../actions/types";

const user = JSON.parse(localStorage.getItem("user"));

const initialState = user
  ? { isLoggedIn: true, user, error: false, errorMessage: {} }
  : { isLoggedIn: false, user: null, error: false, errorMessage: {} };

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case REGISTER_SUCCESS:
      return {
        ...state,
        isLoggedIn: false,
        error: false,
        authenticatedUser: true
      };

    case REGISTER_FAIL:
      return {
        ...state,
        isLoggedIn: false,
        error: true,
        authenticatedUser: false

      };

    case LOGIN_SUCCESS:
      return {
        ...state,
        isLoggedIn: true,
        error: false,
        user: payload.user,
        authenticatedUser: true
      };

    // return {
    //   ...state,
    //   isLoggedIn: false,
    //   error: true,
    //   errorMessage: payload,
    //   user: null,
    // };

    case LOGIN_FAIL:
      return Object.assign({}, state, {
        isLoggedIn: false,
        error: true,
        authenticatedUser: false
      });

    case LOGOUT:
      return {
        ...state,
        isLoggedIn: false,
        error: false,
        user: null,
        authenticatedUser: false
      };

    default:
      return state;
  }
}
