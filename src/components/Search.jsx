import React, { useState } from "react";
import Transaction from "./Transaction";

function TransactionList({ transactionList }) {
  const [search, setSearch] = useState("");

  const searchTransactions = transactionList.filter((transaction) =>
    transaction.description.toLowerCase().includes(search.toLowerCase())
  );

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
      {searchTransactions.map((transaction) => (
        <Transaction transaction={transaction} key={transaction.id} />
      ))}
    </div>
  );
}

export default TransactionList;