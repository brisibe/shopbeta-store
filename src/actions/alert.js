// types
import { ADD_ALERT, REMOVE_ALERT } from "../actions/types";

const addAlert = (id, status, message, timeout) => {
  return {
    type: ADD_ALERT,
    payload: {
      id,
      status,
      message,
    },
  };
};

const removeAlert = (id) => {
  return {
    type: REMOVE_ALERT,
    id,
  };
};

let nextAlertId = 0;
export const addAlertWithTimout = (status, message) => (dispatch) => {
  let timeout = 2000;
  if (status === "error") timeout = 4000;

  let id = nextAlertId++;

  dispatch(addAlert(id, status, message, timeout));

  setTimeout(() => {
    dispatch(removeAlert(id));
    id = nextAlertId--;
  }, timeout);
};
