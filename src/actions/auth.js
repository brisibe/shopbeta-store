import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGIN_SUCCESS,
  LOGOUT,
} from "./types";
import AuthService from "../services/auth";
import { addAlertWithTimout } from "./alert";

export const registerBuyer = (buyer) => async (dispatch) => {
  try {
    await AuthService.registerBuyer(buyer);

    dispatch({
      type: REGISTER_SUCCESS,
    });

    dispatch(addAlertWithTimout("success", "Registration successfull"));

    dispatch(login(buyer.email, buyer.password));
  } catch (err) {
    dispatch({
      type: REGISTER_FAIL,
    });

    const message = err.response.data;

    message.map((e) => dispatch(addAlertWithTimout("error", e.description)));
  }
};
export const registerSeller = (seller) => async (dispatch) => {
  try {
    await AuthService.registerSeller(seller);

    dispatch(login(seller.email, seller.password));
    dispatch({
      type: REGISTER_SUCCESS,
    });

    dispatch(addAlertWithTimout("success", "Registration successfull"));
  } catch (err) {
    dispatch({
      type: REGISTER_FAIL,
    });

    const message = err.response.data;

    message.map((e) => dispatch(addAlertWithTimout("error", e.description)));
  }
};

export const login = (email, password) => async (dispatch) => {
  try {
    const user = await AuthService.login(email, password);

    return dispatch({
      type: LOGIN_SUCCESS,
      payload: { user: user.data },
    });
  } catch (err) {
    const message =
      (err.response && err.response.data && err.response.data.message) ||
      err.message ||
      err.toString();

    dispatch(addAlertWithTimout("error", message));
  }
};

export const logout = () => (dispatch) => {
  AuthService.logout();
  dispatch({
    type: LOGOUT,
  });
};
