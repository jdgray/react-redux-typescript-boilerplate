import actions from "./actions";

export interface AddFooAction {
  type: actions.ADD_FOO;
  payload: string;
}

export function addFoo(bar: string): AddFooAction {
  return {
    type: actions.ADD_FOO,
    payload: bar
  };
}