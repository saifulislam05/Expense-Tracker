import React from "react";
import {
  getFilteredTransaction,
  getTotalAmound,
} from "../../CommonFunctions/CommonFunctions";
import { useTransactions } from "../../Context/Context";
import Transactions from "./Transactions";

const Details = () => {
  const { expenseState } = useTransactions();
  const { transactions } = expenseState;

  const incomeAmount = getTotalAmound(
    getFilteredTransaction(transactions, "income")
  );
  const expenseAmount = getTotalAmound(
    getFilteredTransaction(transactions, "expense")
  );

  const balance = incomeAmount - expenseAmount;

  return (
    <div className="w-full rounded-3xl shadow-2xl shadow-stone-700 ">
      <div className="bg-accent rounded-t-3xl py-0.5">
        <h1 className="text-center my-3 font-semibold text-lg text-accent-content">
          Details
        </h1>
      </div>
      <div className="p-6">
        {transactions.length === 0 ? (
          <p className="text-center mt-4 font-semibold text-warning">
            No Transaction done yet !
          </p>
        ) : (
          /* Uncommented the below line assuming that 'budget' is defined elsewhere
             <p className="text-center text-xl mb-2 font-semibold">Budget: ${budget}</p>
          */ <>
            <div className="grid grid-cols-3 mb-3 pb-2 text-center border-b-2">
              <div className=" ">
                <p className="text-base">Income</p>
                <p className="text-success">${incomeAmount}</p>
              </div>
              <div className=" text-lg font-semibold">
                <p className="">Balance</p>
                <p className="text-accent">${balance}</p>
              </div>
              <div className="">
                <p className="text-base">Expense</p>
                <p className="text-error">${expenseAmount}</p>
              </div>
            </div>
            <Transactions />
          </>
        )}
      </div>
    </div>
  );
};

export default Details;
