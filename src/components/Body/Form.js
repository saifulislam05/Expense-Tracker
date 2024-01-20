import React, { useState } from "react";
import { nanoid } from "nanoid";
import { useTransactions } from "../../Context/Context";

const Form = () => {
  const [type, setType] = useState("");
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");
  const [isFormValid, setIsFormValid] = useState(true);

  const { expenseDispatch } = useTransactions();

  const handleSave = () => {
    setIsFormValid(true);
  if (type && title && amount && date) {
    const obj = {
      id: nanoid(),
      type,
      title,
      amount:Number(amount),
      date,
    };
    expenseDispatch({ type: "ADD_TRANSACTION", payload: obj });
    setType("");
    setTitle("");
    setAmount("");
    setDate("");
  } else {
    setIsFormValid(false);
  }
};


  return (
    <div className="w-full flex flex-col gap-6 *:w-full">
      <select
        className={`select select-accent text-base ${
          !isFormValid && !type ? "select-error" : ""
        }`}
        onChange={(e) => setType(e.target.value)}
        value={type}
        
      >
        <option value="">Select Type</option>
        <option value="income">Income</option>
        <option value="expense">Expense</option>
      </select>
      <input
        type="text"
        placeholder="Title"
        className={`input input-accent ${
          !isFormValid && !title ? "input-error" : ""
        }`}
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        
      />
      <input
        type="number"
        placeholder="Amount"
        className={`input input-accent ${
          !isFormValid && !amount ? "input-error" : ""
        }`}
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        
      />
      <input
        type="date"
        className={`input input-accent ${
          !isFormValid && !date ? "input-error" : ""
        }`}
        value={date}
        onChange={(e) => setDate(e.target.value)}
        
      />
      <button className="btn btn-accent uppercase" onClick={handleSave}>
        add
      </button>
    </div>
  );
};

export default Form;
