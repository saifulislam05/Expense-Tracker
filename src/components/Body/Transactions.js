import React from "react";
import Transaction from "./Transaction";
import { useTransactions } from "../../Context/Context";

const Transactions = () => {
  const { expenseState, expenseDispatch } = useTransactions();
  const { transactions } = expenseState;
  return (
    <div className="shadow-xl rounded-xl">
      <h2 className="text-center text-lg mb-2">Transactions</h2>
      <div className="">
        {transactions.map((transaction) => (
          <Transaction
            key={transaction.id}
            data={transaction}
            dispatch={expenseDispatch}
          />
        ))}
      </div>
    </div>
  );
};

export default Transactions;
