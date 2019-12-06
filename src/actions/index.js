import { SET_SQUARE, CHANGE_TURN } from "../constants"

export const setSquare = (index, xIsNext) => {
  return {
    type: SET_SQUARE,
    index,
    xIsNext
  }
}

export const changeTurn = () => {
  return {
    type: CHANGE_TURN
  }
}