import { Header, SideBar, DashboardContent } from "./Pages.js";

function Admin() {
  return (
    <>
    <div className="flex flex-col">
      <Header />
      <div className="flex">
        <div className="fixed">
          <SideBar />
        </div>
        <div className="ml-56 flex-1">
          <DashboardContent />
        </div>
      </div>
      </div>
    </>
  );
}

export default Admin;
