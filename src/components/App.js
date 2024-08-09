import React from 'react';
import "./App.css"
import TransactionList from './TransactionList';
import NewTransaction from './NewTransaction';


function App() {
  return(

    <div className="App">
      <div className="App-header">
        <h1>Flatiron Bank</h1>
        <NewTransaction />
        <TransactionList />
        
      </div>
    </div>
  )
}

export default App;
