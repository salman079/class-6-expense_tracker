import React from 'react';
import './App.css';
import { Header } from './components/header';
import { Balance } from './components/Balance';
import { AccountSummary } from './components/AccountSummary';
import { TransactionHistory } from './components/TransactionHistroy';
import { AddTransaction } from './components/AddTransaction';
import { GlobalProvider } from './context/GlobalState';


function App() {
  return (
      <GlobalProvider>
        <Header />
        <div className="container">
          <Balance />
          <AccountSummary />
          <TransactionHistory />
          <AddTransaction />
        </div>
      </GlobalProvider>
  );
}

export default App;