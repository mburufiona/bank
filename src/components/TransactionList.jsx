import React, { useEffect, useState } from "react";
import Transaction from "./Transaction";
// import Transaction from "./Transaction";

function TransactionList() {
  const [transactionList, setTransactionList] = useState([]);
  const [search, setSearch] = useState("");
  useEffect(() => {
    fetch("http://localhost:3000/transactions")
      .then((res) => res.json())
      .then((transactionList) => setTransactionList(transactionList));
  }, []);
  return (
    <div>
      <form>
        <div>
          <input
            type="text"
            placeholder="Search Transaction"
            onChange={(event) => setSearch(event.target.value)}
            value={search}
          ></input>
        </div>
      </form>
      <h1>Transaction List</h1>
      {transactionList.map((transaction)=>(
        <Transaction transaction={transaction}key={transaction.id}/>
      ))}
    </div>
  );
}

export default TransactionList;
