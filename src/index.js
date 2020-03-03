import React from 'react';
import ReactDOM from 'react-dom';

import './index.scss';

import Header from './components/layout/Header';
import InsertData from './components/panel/InserData';
import Panel from './components/panel/Panel';

import { GlobalProvider } from './context/GlobalState';

const App = () => {
  
  return (
    <>
      <Header />
      <div className="container">
        <InsertData />
        <Panel />
      </div>
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