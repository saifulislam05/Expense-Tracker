import React from "react";

const Form = () => {
  return (
    <div className="w-full  flex flex-col gap-6 *:w-full">
      <select className="select select-accent text-base">
        <option value="income">Income</option>
        <option value="expense">Expense</option>
      </select>
      <input type="text" placeholder="Title" className="input input-accent" />
      <input
        type="number"
        placeholder="Amount"
        className="input input-accent"
      />
          <input type="date" className="input input-accent" />
          <button className="btn btn-accent">Add New Item</button>
    </div>
  );
};

export default Form;
