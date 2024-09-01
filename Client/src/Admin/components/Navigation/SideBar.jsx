import { Link } from "react-router-dom";
import { TbLayoutDashboard } from "react-icons/tb";
import { LuUser2, LuFlagTriangleRight } from "react-icons/lu";
import { FiGift } from "react-icons/fi";
import { AiOutlineDollar } from "react-icons/ai";
import { CiDiscount1 } from "react-icons/ci";

function SideBar() {
  return (
    <nav className="bg-primary p-[20px] h-screen">
      
      <Link to="/admin">
        <div className="dashboard flex items-center gap-[.5rem] m-2">
          <TbLayoutDashboard className="icon" />
          <span className="nav-name">Dashboard</span>
        </div>
      </Link>

      <Link to="/user">
        <div className="dashboard flex items-center gap-[.5rem] m-2">
          <LuUser2 className="icon" />
          <span className="nav-name">All User</span>
        </div>
      </Link>

      <Link to="/ads">
        <div className="dashboard flex items-center gap-[.5rem] m-2">
          <LuFlagTriangleRight className="icon" />
          <span className="nav-name">Page & Ads</span>
        </div>
      </Link>

      <Link to="/businessModel">
        <div className="dashboard flex items-center gap-[.5rem] m-2">
          <FiGift className="icon" />
          <span className="nav-name">Business Model</span>
        </div>
      </Link>

      <Link to="/transaction">
        <div className="dashboard flex items-center gap-[.5rem] m-2">
          <AiOutlineDollar className="icon" />
          <span className="nav-name">Transactions</span>
        </div>
      </Link>

      <Link to="/discount">
        <div className="dashboard flex items-center gap-[.5rem] m-2">
          <CiDiscount1 className="icon" />
          <span className="nav-name">Discount & Offer</span>
        </div>
      </Link>

      <Link to="/salesHistory">
        <div className="dashboard flex items-center gap-[.5rem] m-2">
          <AiOutlineDollar className="icon" />
          <span className="nav-name">Sales History</span>
        </div>
      </Link>
    </nav>
  );
}

export default SideBar;
