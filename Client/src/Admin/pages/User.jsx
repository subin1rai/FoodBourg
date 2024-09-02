import { Header, SideBar, UserContent, StaffContent, AllUserNavBar  } from "./Pages";

function User() {
  return (
    <>      
      <Header />
      <div className="flex">
        <div className="fixed">
          <SideBar />
        </div>
        <div className="ml-56 flex-1 p-6">
          <AllUserNavBar/>
          <UserContent />
          {/* <StaffContent /> */}
          {/* other content based on condition */}
        </div>
      </div>
    </>
  );
}

export default User;
