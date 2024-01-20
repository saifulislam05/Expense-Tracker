// Body.js
import React from "react";
import AddNew from "./AddNew";
import Details from "./Details";

import PieChart from "./PieChart";

const Body = () => {
  return (
    <div className="flex flex-wrap justify-between">
      <AddNew />
      <Details />
      <PieChart />
    </div>
  );
};

export default Body;
