import { Header, SideBar, Pagination, AllUserNavBar , SearchFilter, CouponTable} from "./Pages";

function Discount() {
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
        < CouponTable/>
        <div className="flex justify-end m-6">
          <Pagination />
        </div>
      </div>
    </div>
  </>
  )
}

export default Discount