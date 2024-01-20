// Body.js
import React from "react";
import AddNew from "./AddNew";
import Details from "./Details";

import PieChart from "./PieChart";

const Body = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-10 ">
      <AddNew />
      <Details />
      <PieChart />
    </div>
  );
};

export default Body;
