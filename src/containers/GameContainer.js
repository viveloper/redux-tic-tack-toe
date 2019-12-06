import {connect} from 'react-redux';
import Game from '../components/Game';
import { setSquare, changeTurn } from '../actions';

const mapStateToProps = (state, props) => {
  return {
    squares: state.squares,
    xIsNext: state.xIsNext
  }
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    setSquare: (index, xIsNext) => {
      dispatch(setSquare(index, xIsNext))
    },
    changeTurn: () => {
      dispatch(changeTurn())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Game);