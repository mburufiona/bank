import React, { useState } from "react";

function NewTransaction({ addTransaction }) {
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [amount, setAmount] = useState("");
  const handleDate = (event) => setDate(event.target.value);
  const handleDescription = (event) => setDescription(event.target.value);
  const handleCategory = (event) => setCategory(event.target.value);
  const handleAmount = (event) => setAmount(event.target.value);

  const handleSubmit = (event) => {
    event.preventDefault();
    const transactionData = {
      date,
      description,
      category,
      amount,
    };
    fetch("http://localhost:3000/transactions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(transactionData),
    })
      .then((res) => res.json())
      .then((newTransaction) => {
        addTransaction(newTransaction);
      })
      .catch((error) => console.log(error));

    setDate("");
    setDescription("");
    setCategory("");
    setAmount("");
  };

  return (
    <div className="TransForm">
      <form onSubmit={handleSubmit}>
        <div className="input-container ic1">
          <input
            type="date"
            placeholder="Display date"
            value={date}
            onChange={handleDate}
          ></input>
        </div>
        <div className="input-container ic2">
          <input
            type="text"
            placeholder="Description"
            value={description}
            onChange={handleDescription}
          ></input>
        </div>
        <div className="input-container ic2">
          <input
            type="text"
            placeholder="Category"
            value={category}
            onChange={handleCategory}
          />
        </div>
        <div className="input-container ic2">
          <input
            type="number"
            placeholder="Amount"
            value={amount}
            onChange={handleAmount}
          />
        </div>
        <div className="input-container ic2">
          <input
            className="submit-button"
            type="submit"
            value="Add Transaction"
          />
        </div>
      </form>
    </div>
  );
}

export default NewTransaction;
