import React from "react";
import { MdOutlineEdit } from "react-icons/md";
import { RiDeleteBin6Line } from "react-icons/ri";

function UserTable() {
  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg bg-white">
      <table className="w-full text-sm text-left text-gray-700">
        <thead className="text-xs uppercase bg-gray-100">
          <tr>
            <th scope="col" className="px-6 py-3">
              User Id
            </th>
            <th scope="col" className="px-6 py-3">
              Full Name
            </th>
            <th scope="col" className="px-6 py-3">
              Email
            </th>
            <th scope="col" className="px-6 py-3">
              Password
            </th>
            <th scope="col" className="px-6 py-3">
              Address
            </th>
            <th scope="col" className="px-6 py-3">
              Phone No
            </th>
            <th scope="col" className="px-6 py-3">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="odd:bg-white even:bg-gray-50 border-b">
            <th scope="row" className="px-6 py-4 font-medium text-gray-900">
              V12
            </th>
            <td className="px-6 py-4">Alex</td>
            <td className="px-6 py-4">java@gmail.com</td>
            <td className="px-6 py-4">12334</td>
            <td className="px-6 py-4">Kathmandu</td>
            <td className="px-6 py-4">98473627162</td>
            <td className="px-6 py-4 flex space-x-4">
              <a href="#" className="text-blue-600">
                <MdOutlineEdit className="text-2xl" />
              </a>
              <a href="#" className="text-red-600">
                <RiDeleteBin6Line className="text-2xl" />
              </a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default UserTable;
