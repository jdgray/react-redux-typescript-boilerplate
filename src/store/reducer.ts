import { combineReducers } from "redux";
import actions from "./actions";

export const fooBar = (state = { bar: "" }, action: any) => {
  switch (action.type) {
    case actions.ADD_FOO:
      state = Object.assign({}, state, {
        bar: action.payload
      });
      break;
  }
  return state;
};

export default combineReducers({ fooBar });