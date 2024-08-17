import React from "react";
import { LuUser2 } from "react-icons/lu";

function CardComponent({ count, name }) {
  return (
    <div className="border p-4 rounded-lg shadow-md w-[300px] mx-auto">
      <div className="flex items-center mb-4 justify-between">
        <span className="text-2xl font-semibold">{count}</span>
        <LuUser2 className="text-2xl" />
      </div>
      <span className="block text-gray-600 mb-4">{name}</span>

      {/* Progress Bar */}
      <div className="relative pt-1">
        <div className="w-full bg-gray-200 rounded-full h-2.5">
          <div
            className="bg-blue-600 h-2.5 rounded-full"
            style={{ width: "10%" }}
          ></div>
        </div>
      </div>
    </div>
  );
}

export default CardComponent;
