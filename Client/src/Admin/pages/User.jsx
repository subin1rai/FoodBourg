import React from "react";
import Header from "../components/Header.jsx";
import SideBar from "../components/SideBar.jsx";
import UserTable from "../components/UserTable.jsx";
import Pagination from "../components/Pagination.jsx";

function User() {
  return (
    <>
      <Header />
      <div className="flex">
        <SideBar />
        <div className="w-full p-4">
          <UserTable />
          <Pagination/>
        </div>
      </div>
    </>
  );
}

export default User;
