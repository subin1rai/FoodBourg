// navigation
import Header from "../components/Navigation/Header.jsx";
import SideBar from "../components/Navigation/SideBar.jsx";
import AllUserNavBar from "../components/Navigation/AllUserNavBar.jsx";
import TransactionNavBar from "../components/Navigation/TransactionNavBar.jsx";

import Content from "../components/Statistics.jsx";
import Chart from "../components/Chart/RevenueAnalysis.jsx";
import Pagination from "../components/Pagination.jsx";
import SearchFilter from "../components/SearchFilter.jsx";

// table
import DeliveryTable from "../components/Table/DeliveryTable.jsx";
import CouponTable from "../components/Table/CoupanTable.jsx";
import StaffTable from "../components/Table/StaffTable.jsx";
import SalesTable from "../components/Table/SalesTable.jsx";
import UserTable from "../components/Table/UserTable.jsx";
import VendorTable from "../components/Table/VendorTable.jsx";

// context area
import DashboardContent from "../components/ContentArea/DashboardContent.jsx";
import UserContent from "../components/ContentArea/UserContent.jsx";
import StaffContent from "../components/ContentArea/StaffContent.jsx";

export {
  // page content
  UserContent,
  StaffContent,
  DashboardContent,

  // components
  Content,
  SearchFilter,
  Chart,
  Pagination,

  // navigation
  TransactionNavBar,
  AllUserNavBar,
  Header,
  SideBar,
  
  // table
  DeliveryTable,
  CouponTable,
  StaffTable,
  SalesTable,
  UserTable,
  VendorTable,
};
