import { ADD_ALERT, REMOVE_ALERT } from "../actions/types";

const initialState = {
  alerts: [],
};

export default function alert(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case ADD_ALERT:
      return Object.assign({}, state, {
        alerts: [...state.alerts, payload],
      });

    case REMOVE_ALERT:
      const alerts = state.alerts.filter((alert) => {
        return alert.id !== action.id;
      });
      return Object.assign({}, state, {
        alerts,
      });

    default:
      return state;
  }
}
