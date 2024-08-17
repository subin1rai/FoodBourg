import React from "react";
import { TbLayoutDashboard } from "react-icons/tb";
import { LuUser2 } from "react-icons/lu";
import { LuFlagTriangleRight } from "react-icons/lu";
import { FiGift } from "react-icons/fi";
import { AiOutlineDollar } from "react-icons/ai";
import { CiDiscount1 } from "react-icons/ci";

function SideBar() {
  return (
    <nav className="bg-primary p-[20px] h-[89.5vh]">
        
      <div className="dashboard flex items-center gap-[.5rem] m-2">
        <TbLayoutDashboard className="text-white text-2xl" />
        <span className="text-sm text-white font-bold">Dashboard</span>
      </div>

      <div className="dashboard flex items-center gap-[.5rem] m-2">
        <LuUser2 className="text-white text-2xl" />
        <span className="text-sm text-white font-bold">All User</span>
      </div>

      <div className="dashboard flex items-center gap-[.5rem] m-2">
        <LuFlagTriangleRight className="text-white text-2xl" />
        <span className="text-sm text-white font-bold">Page & Ads</span>
      </div>

      <div className="dashboard flex items-center gap-[.5rem] m-2">
        <FiGift className="text-white text-2xl" />
        <span className="text-sm text-white font-bold">Business Model</span>
      </div>

      <div className="dashboard flex items-center gap-[.5rem] m-2">
        <AiOutlineDollar className="text-white text-2xl" />
        <span className="text-sm text-white font-bold">Transactions</span>
      </div>

      <div className="dashboard flex items-center gap-[.5rem] m-2">
        <CiDiscount1 className="text-white text-2xl" />
        <span className="text-sm text-white font-bold">Discount & Offer</span>
      </div>

      <div className="dashboard flex items-center gap-[.5rem] m-2">
        <AiOutlineDollar className="text-white text-2xl" />
        <span className="text-sm text-white font-bold">Sales History</span>
      </div>

    </nav>
  );
}

export default SideBar;
