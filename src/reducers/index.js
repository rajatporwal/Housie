import { combineReducers } from "redux";
import { GET_USER } from "../actions/types";

function user(state = null, action) {
  switch (action.type) {
    case GET_USER: {
      return action.data;
    }
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  user
});

export default rootReducer;
