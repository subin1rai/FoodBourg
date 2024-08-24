import React from "react";
import { MdOutlineEdit } from "react-icons/md";
import { RiDeleteBin6Line } from "react-icons/ri";

function CouponTable() {
  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg bg-white">
      <table className="w-full text-sm text-left text-gray-700">
        <thead className="text-xs uppercase bg-gray-100">
          <tr>
            <th scope="col" className="px-6 py-3">
              Coupon Id
            </th>
            <th scope="col" className="px-6 py-3">
              Discount Rs
            </th>
            <th scope="col" className="px-6 py-3">
              Valid Form
            </th>
            <th scope="col" className="px-6 py-3">
              Valid To
            </th>
            <th scope="col" className="px-6 py-3">
              Max Redeem
            </th>
            <th scope="col" className="px-6 py-3">
              Is Active
            </th>
            <th scope="col" className="px-6 py-3">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="odd:bg-white even:bg-gray-50 border-b">
            <th scope="row" className="px-6 py-4 font-medium text-gray-900">
              B23
            </th>
            <td className="px-6 py-4">Jimmy</td>
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

export default CouponTable;
