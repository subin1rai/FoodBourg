import React from "react";
import Header from "../components/Chart/Header.jsx";
import SideBar from "../components/SideBar.jsx";
import UserTable from "../components/Table/UserTable.jsx";
import Pagination from "../components/Pagination.jsx";
import AllUserNavBar from "../components/Navigation/AllUserNavBar.jsx";
import SearchFilter from "../components/SearchFilter.jsx";

function User() {
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
          <UserTable />
          <div className="flex justify-end m-6">
            <Pagination />
          </div>
        </div>
      </div>
    </>
  );
}

export default User;
