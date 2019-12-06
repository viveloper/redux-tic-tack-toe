import { combineReducers } from 'redux';
import squares from './squares';
import xIsNext from './xIsNext';

const rootReducer = combineReducers({
  squares,
  xIsNext
})

export default rootReducer;