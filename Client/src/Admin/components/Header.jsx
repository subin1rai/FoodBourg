import React from "react";
import logo from "/logo2.png";
import { IoIosNotificationsOutline } from "react-icons/io";

function Header() {
  return (
    <header className="flex justify-between items-center bg-primary h-[80px] px-6 sticky top-0">
      <div className="flex items-center space-x-2">
        <img src={logo} alt="logo" className="object-cover" width={60} />
        <span className="text-white text-xl font-semibold">FoodBourg</span>
      </div>

      <div className="flex items-center space-x-6">
        <div className="flex items-center space-x-2 text-white">
          <IoIosNotificationsOutline className="text-3xl" />
          {/* <span className="text-base">Notifications</span> */}
        </div>

        <div className="flex items-center space-x-2 text-white">
          <img
            src="https://newprofilepic.photo-cdn.net//assets/images/article/profile.jpg?90af0c8"
            alt="profile"
            className="rounded-full object-cover"
            width={50}
            height={50}
          />
          <span>Admin one</span>
        </div>
      </div>
    </header>
  );
}

export default Header;
