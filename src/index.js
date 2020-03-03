import React from 'react';
import ReactDOM from 'react-dom';

import './index.scss';

import Panel from './components/panel/Panel';
import Header from './components/layout/Header';

import { GlobalProvider } from './context/GlobalState';

const App = () => {
  
  return (
    <>
      <Header />
      <Panel />
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