import React from "react";
import { MdOutlineEdit } from "react-icons/md";
import { RiDeleteBin6Line } from "react-icons/ri";

function SalesTable() {
  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg bg-white">
      <table className="w-full text-sm text-left text-gray-700">
        <thead className="text-xs uppercase bg-gray-100">
          <tr>
            <th scope="col" className="px-6 py-3">
              Date
            </th>
            <th scope="col" className="px-6 py-3">
              Sales Id
            </th>
            <th scope="col" className="px-6 py-3">
              Buyer Name
            </th>
            <th scope="col" className="px-6 py-3">
              Vendor Name
            </th>
            <th scope="col" className="px-6 py-3">
              Sales Item
            </th>
            <th scope="col" className="px-6 py-3">
              Address
            </th>
            <th scope="col" className="px-6 py-3">
              Total Payment
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="odd:bg-white even:bg-gray-50 border-b">
            <th scope="row" className="px-6 py-4 font-medium text-gray-900">
              2079-09-11
            </th>
            <td className="px-6 py-4">S02</td>
            <td className="px-6 py-4">John</td>
            <td className="px-6 py-4">Sales Point</td>
            <td className="px-6 py-4">2 Chicken</td>
            <td className="px-6 py-4">Kathmandu</td>
            <td className="px-6 py-4">Rs. 12333</td>
            {/* <td className="px-6 py-4 flex space-x-4">
              <a href="#" className="text-blue-600">
                <MdOutlineEdit className="text-2xl" />
              </a>
              <a href="#" className="text-red-600">
                <RiDeleteBin6Line className="text-2xl" />
              </a>
            </td> */}
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default SalesTable;
