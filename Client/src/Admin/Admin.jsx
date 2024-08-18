import React from "react";
import Header from "./components/Header.jsx";
import SideBar from "./components/SideBar.jsx";
import Content from "./components/Content.jsx";
import Chart from "./components/Chart.jsx";

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
