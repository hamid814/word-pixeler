import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

const initialState = {
  word: 'hamix',
  speed: 1,
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  const setWord = word => {
    dispatch({
      type: 'set-word',
      payload: word
    })
  }

  const setSpeed = speed => {
    dispatch({
      type: 'set-speed',
      payload: speed
    })
  }

  return (
    <GlobalContext.Provider
      value={{
        word: state.word,
        speed: state.speed,
        setSpeed,
        setWord,
      }}
    >
      { children }
    </GlobalContext.Provider>
  );
};