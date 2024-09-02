import {
    StaffTable,
    Pagination,
    AllUserNavBar,
    SearchFilter,
  } from "./ContentAreaIndex";

function StaffContent() {
  return (
    <div>
    <AllUserNavBar />
    <SearchFilter/>
    <StaffTable/>
    <div className="flex justify-end">
    <Pagination/>
    </div>
  </div>
  )
}

export default StaffContent