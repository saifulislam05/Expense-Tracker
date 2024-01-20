import React from "react";
import Transaction from "./Transaction";

const Transactions = () => {
  return (
    <div className="shadow-xl rounded-xl">
      <h2 className="text-center text-lg mb-2">Transactions</h2>
      <div className="">
        <Transaction
          type="expense"
          amount="$100"
          category="Mobile"
          date="01/19/2024"
        />
        <Transaction
          type="income"
          amount="$200"
          category="Salary"
          date="01/19/2024"
        />
      </div>
    </div>
  );
};

export default Transactions;
