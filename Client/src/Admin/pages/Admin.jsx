import { Header, SideBar, DashboardContent } from "./Pages.js";

function Admin() {
  return (
    <>
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
