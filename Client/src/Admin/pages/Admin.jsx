import {Header, SideBar, Chart, Content} from "./Pages.js";

function Admin() {
  return (
    <>
      <Header />
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
      </div>
    </>
  );
}

export default Admin;
