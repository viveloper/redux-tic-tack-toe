import React from 'react';
import GameContainer from './containers/GameContainer';
import { Provider } from 'react-redux';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <GameContainer />
    </Provider>
  );
}

export default App;