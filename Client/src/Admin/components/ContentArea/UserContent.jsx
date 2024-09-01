import React from "react";
import {
  UserTable,
  Pagination,
  AllUserNavBar,
  SearchFilter,
} from "./ContentAreaIndex";

function UserContent() {
  return (
    <div>
      <AllUserNavBar />
      <SearchFilter/>
      <UserTable/>
      <div className="flex justify-end">
      <Pagination/>
      </div>
    </div>
  );
}

export default UserContent;
