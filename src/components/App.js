import React, { useState, useEffect } from "react";
import "./App.css";
import TransactionList from "./TransactionList";
import NewTransaction from "./NewTransaction";

function App() {
  const [transactionList, setTransactionList] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/transactions")
      .then((res) => res.json())
      .then((data) => setTransactionList(data))
      .catch((error) => console.log(error));
  }, []);

  const addTransaction = (newTransaction) => {
    setTransactionList([...transactionList, newTransaction]);
  };

  return (
    <div className="App">
      <div className="App-header">
        <h1 className="header">Flatiron Bank</h1>
        <NewTransaction addTransaction={addTransaction} />
        <TransactionList transactionList={transactionList} />
      </div>
    </div>
  );
}

export default App;
