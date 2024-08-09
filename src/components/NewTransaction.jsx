import React, { useState } from "react";

function NewTransaction() {
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
      date: date,
      description: description,
      category: category,
      amount: amount,
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
      .then((data) => data("successful"))
      .catch((error) => console.log(error));
    setDate("");
    setDescription("");
    setCategory("");
    setAmount("");
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="date"
            placeholder="Display date"
            value={date}
            onChange={handleDate}
          ></input>
        </div>
        <div>
          <input
            type="text"
            value={description}
            onChange={handleDescription}
          ></input>
        </div>
        <div>
          <input type="text" value={category} onChange={handleCategory} />
        </div>
        <div>
          <input type="number" value={amount} onChange={handleAmount} />
        </div>
        <div>
          <input type="submit" value="Add Transaction" />
        </div>
      </form>
    </div>
  );
}

export default NewTransaction;
