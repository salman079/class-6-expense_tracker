import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

export const AccountSummary = () => {

    const { transactions } = useContext(GlobalContext);

    const transactionAmounts = transactions.map(transaction => transaction.transactionAmount);

    const income = transactionAmounts
        .filter(transaction => transaction > 0)
        .reduce((acc, transaction) => (acc += transaction), 0)
        .toFixed(2);

    const expense = Math.abs(transactionAmounts
        .filter(transaction => transaction < 0)
        .reduce((acc, transaction) => (acc += transaction), 0)
        ).toFixed(2);

    return (
        <div className='inc-exp-container'>
            <div>
                <h4>INCOME</h4>
                <p className='money plus'>
                    {income}
                </p>
            </div>
            <div>
                <h4>EXPENSES</h4>
                <p className='money minus'>
                    {expense}
                </p>
            </div>
        </div>
    )
}   