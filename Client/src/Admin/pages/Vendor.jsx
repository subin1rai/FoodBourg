import React from "react";
import Header from "../components/Header.jsx";
import SideBar from "../components/SideBar.jsx";
import Pagination from "../components/Pagination.jsx";
import AllUserNavBar from "../components/AllUserNavBar.jsx";
import SearchFilter from "../components/SearchFilter.jsx";
import VendorTable from "../components/Table/VendorTable.jsx";

function Vendor() {
  return (
    <>
      <Header />
      <div className="flex">
        <SideBar />
        <div className="w-full p-4">
          <AllUserNavBar />
          <div className="m-3">
            <SearchFilter />
          </div>
          <VendorTable />
          <div className="flex justify-end m-6">
            <Pagination />
          </div>
        </div>
      </div>
    </>
  );
}

export default Vendor;
