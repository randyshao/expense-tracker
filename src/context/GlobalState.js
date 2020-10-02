import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

// Initial State
const initialState = {
  transactions: [
    { id: 1, text: 'Flower', amount: -20 },
    { id: 2, text: 'Salary', amount: 300 },
    { id: 3, text: 'Book', amount: -10 },
    { id: 4, text: 'Camera', amount: 150 },
  ],
};

// Create context, which is some data shared across components
export const GlobalContext = createContext(initialState); // argument is the default starting value

// Provider component, used to give access to global state to other components wrapped in it
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState); // To call a reducer action, dispatch is called, takes in (reducer, state)

  return (
    <GlobalContext.Provider // provides state, actions to any components that its wrapped around
      value={{
        transactions: state.transactions,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
