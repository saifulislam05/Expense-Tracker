// Income.js
import React from "react";
import Transactions from "./Transactions";

const Details = () => {
  return (
    <div className="w-full md:w-4/12 px-6">
      <div className="bg-accent rounded-t-3xl py-0.5">
        <h1 className="text-center my-3 font-semibold text-lg text-accent-content">
          Details
        </h1>
      </div>
      <div className="w-full h-full rounded-3xl shadow-2xl shadow-stone-700 p-6">
        <div className="grid grid-cols-3 mb-3 pb-2 text-center border-b-2">
          <div className=" ">
            <p className="text-base">Income</p>
            <p className="text-success">$200</p>
          </div>
          <div className=" text-lg font-semibold">
            <p className="">Balance</p>
            <p className="text-accent">$300</p>
          </div>
          <div className="">
            <p className="text-base">Expense</p>
            <p className="text-error">$100</p>
          </div>
        </div>

        <Transactions />
      </div>
    </div>
  );
};

export default Details;
