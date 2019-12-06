import { CHANGE_TURN } from "../constants";

const initialState = true;

const squares = (previousState = initialState, action) => {
  if (action.type === CHANGE_TURN) {
    return !previousState;
  }
  else {
    return previousState;
  }
}

export default squares;