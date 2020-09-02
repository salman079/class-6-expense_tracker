import React from 'react';

export const AccountSummary = () => {
    return (
        <div className='inc-exp-container'>
            <div>
                <h4>INCOME</h4>
                <p className='income'>SR + 0.00</p>
            </div>
            <div>
                <h4>EXPENSES</h4>
                <p className='expense'>SR - 0.00</p>
            </div>
        </div>
    )
}