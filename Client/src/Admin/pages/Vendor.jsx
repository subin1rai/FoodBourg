import {
  Header,
  AllUserNavBar,
  SideBar,
  Pagination,
  SearchFilter,
  VendorTable,
} from "./Pages.js";

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
