import { Header, SideBar, TransactionNavBar } from "./Pages";

function Transaction() {
  return (
    <>
    <Header />
      <div className="flex">
        <div className="fixed">
          <SideBar />
        </div>
        <div className="ml-56 flex-1 p-6">
          <TransactionNavBar/>
          {/* <TransactionContent /> */}
          {/* other content based on condition */}
        </div>
      </div>
  </>
  )
}

export default Transaction