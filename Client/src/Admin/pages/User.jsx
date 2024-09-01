import { Header, SideBar, UserContent  } from "./Pages";

function User() {
  return (
    <>      
      <Header />
      <div className="flex">
        <div className="fixed">
          <SideBar />
        </div>
        <div className="ml-56 flex-1 p-6">
          <UserContent />
        </div>
      </div>
    </>
  );
}

export default User;
