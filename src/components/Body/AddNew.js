// Balance.js
import React from "react";
import Form from "./Form";

const AddNew = () => {
  return (
    <div className="w-full md:w-4/12 px-6 ">
      <div className="bg-accent rounded-t-3xl py-0.5">
        <h1 className="text-center my-3 font-semibold text-lg text-accent-content">Add New Item</h1>
      </div>
      <div className="w-full h-full rounded-3xl shadow-2xl shadow-stone-700 p-6">
        <Form />
      </div>
    </div>
  );
};

export default AddNew;