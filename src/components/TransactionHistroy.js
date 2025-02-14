import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import { Transaction } from '../components/Transaction';


export const TransactionHistory = () => {
    
    const { transactions } = useContext(GlobalContext);

    return (
        <div>
            <h3>
                Transaction History
            </h3>
            <ul className='list'>
                {transactions.map(transaction => 
                    (
                    <Transaction key={transaction.id} transaction ={transaction} /> 
                    )
                )}    
            </ul>
        </div>
    )
}