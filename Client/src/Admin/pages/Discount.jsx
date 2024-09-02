import DiscountContent from "../components/ContentArea/DiscountContent";
import { Header, SideBar,  
  // AllUserNavBar
} from "./Pages";

function Discount() {
  return (
    <>
    <Header />
      <div className="flex">
        <div className="fixed">
          <SideBar />
        </div>
        <div className="ml-56 flex-1 p-6">
          {/* <AllUserNavBar/> */}
          <DiscountContent />
          {/* <StaffContent /> */}
          {/* other content based on condition */}
        </div>
      </div>
  </>
  )
}

export default Discount