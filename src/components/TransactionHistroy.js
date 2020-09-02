import React from 'react';

export const TransactionHistory = () => {
    return (
        <div>
            <h3>
                Transaction History
            </h3>
            <ul className='list'>
                <li className='plus'>
                    Project income
                    <span> SR 10,000</span>
                    <button className='delete-btn'></button>
                </li>
                <li className='minus'>
                    Salary
                    <span> SR (5,000)</span>
                    <button className='delete-btn'></button>
                </li>

            </ul>
        </div>
    )
}