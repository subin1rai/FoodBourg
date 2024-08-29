import { Link } from "react-router-dom";
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
        <Link to="/admin">
          <TbLayoutDashboard className="icon" />
          <span className="nav-name">Dashboard</span>
        </Link>
      </div>

      <div className="dashboard flex items-center gap-[.5rem] m-2">
        <Link to="/user">
          <LuUser2 className="icon" />
          <span className="nav-name">All User</span>
        </Link>
      </div>

      <div className="dashboard flex items-center gap-[.5rem] m-2">
        <LuFlagTriangleRight className="icon" />
        <span className="nav-name">Page & Ads</span>
      </div>

      <div className="dashboard flex items-center gap-[.5rem] m-2">
        <FiGift className="icon" />
        <span className="nav-name">Business Model</span>
      </div>

      <div className="dashboard flex items-center gap-[.5rem] m-2">
        <Link to="/transaction">
          <AiOutlineDollar className="icon" />
          <span className="nav-name">Transactions</span>
        </Link>
      </div>

      <div className="dashboard flex items-center gap-[.5rem] m-2">
        <Link to="/discount">
          <CiDiscount1 className="icon" />
          <span className="nav-name">Discount & Offer</span>
        </Link>
      </div>

      <div className="dashboard flex items-center gap-[.5rem] m-2">
        <AiOutlineDollar className="icon" />
        <span className="nav-name">Sales History</span>
      </div>
    </nav>
  );
}

export default SideBar;
