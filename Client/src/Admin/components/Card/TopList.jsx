import React from "react";

function TopList() {
  return (
    <div className="flex flex-row justify-around">
      <div className="flex flex-col border-2 p-4 w-[12vw]">
        <span>Top Resturent</span>
        <span>Oliviua Cafe</span>
        <span>Brown Hash Cafe</span>
        <span>De light Inn</span>
      </div>
      <div className="flex flex-col border-2 p-4 w-[12vw]">
        <span>Top Delivery Address</span>
        <span>Oliviua Cafe</span>
        <span>Brown Hash Cafe</span>
        <span>De light Inn</span>
      </div>
      <div className="flex flex-col border-2 p-4 w-[12vw]">
        <span>Top Buyers</span>
        <span>Oliviua Cafe</span>
        <span>Brown Hash Cafe</span>
        <span>De light Inn</span>
      </div>
      <div className="flex flex-col border-2 p-4 w-[12vw]">
        <span>Mo:Mo</span>
        <span>Chaumin</span>
        <span>Pizza</span>
      </div>
    </div>
  );
}

export default TopList;
