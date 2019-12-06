import { SET_SQUARE } from "../constants";

const initialState = Array(9).fill('');

const squares = (previousState = initialState, action) => {
  if (action.type === SET_SQUARE) {
    const newSquares = [...previousState];
    newSquares[action.index] = action.xIsNext ? 'X' : 'O'
    return newSquares;
  }
  else {
    return previousState;
  }
}

export default squares;