import React from "react";
import Statistics from "../Statistics";
import { RevenueAnalysis } from "./ContentAreaIndex";

function DashboardContent() {
  return (
    <div className="flex flex-col">
      <div>
        <Statistics />
      </div>
      <div className="w-[150vh]">
        <RevenueAnalysis />
      </div>
    </div>
  );
}

export default DashboardContent;
