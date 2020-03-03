import React from 'react';
import ReactDOM from 'react-dom';

import './index.scss';

import { GlobalProvider } from './context/GlobalState';

const App = () => {
  
  return (
    <>
      App
    </>
  )
};

const StateContainer = () => {
  return (
    <GlobalProvider>
      <App />
    </GlobalProvider>
  )
}

ReactDOM.render(<StateContainer />, document.getElementById('root'));