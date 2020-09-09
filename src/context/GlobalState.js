import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

// Create the initial  state
const initialState = {
    transactions: []
}
// Create the Global Context
export const GlobalContext = createContext(initialState);

// Create a Provider for the Global Context
export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    // Actions for Transaction

    // Deleting existing Transaction Action
    function delTransaction(id) {
        dispatch({
            type: 'DELETE_TRANSACTION',
            payload: id
        })
    }
    // Deleting existing Transaction Action

    function addTransaction(transaction) {
        dispatch({
            type: 'ADD_TRANSACTION',
            payload: transaction
        })
    }
    return (
        <GlobalContext.Provider value={
            {
                transactions: state.transactions,
                delTransaction,
                addTransaction
            }
        }>
            { children }
        </GlobalContext.Provider>
    );
} 