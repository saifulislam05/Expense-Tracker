import React from "react";
import Transaction from "./Transaction";
import { useExpense } from "../../Context/Context";

const Transactions = () => {
  const { expenseState, expenseDispatch } = useExpense();
  const { transactions } = expenseState;
  return (
    <div className="shadow-xl rounded-xl ">
      <h2 className="text-center text-lg mb-2">Transactions</h2>
      <div className=" rounded-xl overflow-hidden" >
        <div className="min-h-64 overflow-y-scroll scroll-smooth " >
        <div className="h-fit flex flex-col-reverse">
          {transactions.map((transaction) => (
            <Transaction
              key={transaction.id}
              data={transaction}
              dispatch={expenseDispatch}
            />
          ))}

        </div>
        </div>
      
      </div>
    </div>
  );
};

export default Transactions;
