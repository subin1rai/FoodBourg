import React from "react";
import logo from "/images/logo.png";
import { IoIosNotificationsOutline } from "react-icons/io";

function Header() {
  return (
    <header className="bg-[#C41E24] flex items-center justify-between px-5 py-2 max-h-[92px] min-h-[92px] overflow-hidden">
      <div className="flex items-center gap-1">
        <img src={logo} alt="logo" className="w-1/2 max-w-[50%] p-2" />
        <span className="text-white text-2xl font-bold">FoodBourg</span>
      </div>

      <div className="flex items-center mr-12">
        <div className="flex items-center text-white text-2xl mr-16 cursor-pointer transition-colors duration-300 ease-in-out hover:text-yellow-500">
          <IoIosNotificationsOutline className="mr-2" />
          <span className="text-base">Notifications</span>
        </div>
        <div className="flex items-center text-white">
          <img
            src="https://newprofilepic.photo-cdn.net//assets/images/article/profile.jpg?90af0c8"
            alt="profile"
            className="rounded-full w-16 h-16 mr-2"
          />
          <span className="text-base font-normal">Admin one</span>
        </div>
      </div>
    </header>
  );
}

export default Header;
