import React from "react";
import { RevenueAnalysis, Statistics, TopList } from "./ContentAreaIndex";

function DashboardContent() {
  return (
    <div className="flex flex-col">
      <Statistics />
      <div className="w-[1250px] p-10 shadow-lg ml-4">
        <RevenueAnalysis />
        <TopList />
      </div>
    </div>
  );
}

export default DashboardContent;
