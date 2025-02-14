import React, { useContext } from 'react';

//import Global State
import { GlobalContext } from '../context/GlobalState';

export const Transaction = ({ transaction }) => {

    const { delTransaction } = useContext(GlobalContext);

    const sign = transaction.transactionAmount > 0 ? '+' : '-';
    const transactionType = transaction.transactionAmount > 0 ? 'plus' : 'minus';


    return (
        <li className={transactionType}>
            {transaction.description}
            <span>{sign}SAR {Math.abs(transaction.transactionAmount)}</span>
            <button className="delete-btn" onClick={() => delTransaction(transaction.id)}>
                x
            </button>
        </li>
    )
}