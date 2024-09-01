import { Header, SideBar, DashboardContent } from "./Pages.js";

function Admin() {
  return (
    <>
      {/* <Header />
      <div className="flex">
        <SideBar />
        <div className="w-full overflow-auto">
          <Content />
          <div className="p-4">
            <div className="w-full max-w-full overflow-x-auto">
              <Chart />
            </div>
          </div>
        </div>
      </div> */}

      <Header />
      <div className="flex">
        <div className="fixed">
          <SideBar />
        </div>
        <div className="ml-56 flex-1 p-6">
          <DashboardContent />
        </div>
      </div>
    </>
  );
}

export default Admin;
