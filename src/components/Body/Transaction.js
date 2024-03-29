// Transaction.js
import React from "react";
import { AiFillDelete } from "react-icons/ai";
import { FaPlus, FaMinus } from "react-icons/fa";

const Transaction = ({ data,dispatch }) => {
  const { type, amount, title, date } = data;
  return (
    <div
      className={`flex justify-between p-1 border-b ${
        type === "income" ? "bg-[#0080007e]" : "bg-[#fd2b2b1e]"
      } `}
    >
      <div className="flex items-center w-full justify-evenly ">
        {type === "income" ? (
          <FaPlus className="text-green-500 text-xs" />
        ) : (
          <FaMinus className="text-red-500 text-xs" />
        )}
        <span className="w-2/12 text-right">{amount}</span>
        <span className="w-3/12 ">{title}</span>
        <span>{date}</span>

        <AiFillDelete
          className="cursor-pointer text-red-500"
          onClick={() => dispatch({ type: "DELETE_TRANSACTION",payload:data.id })}
        />
      </div>
    </div>
  );
};

export default Transaction;
