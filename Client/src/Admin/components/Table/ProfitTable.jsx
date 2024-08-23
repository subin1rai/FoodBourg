import React from "react";

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
              Order Id
            </th>
            <th scope="col" className="px-6 py-3">
              Sales
            </th>
            <th scope="col" className="px-6 py-3">
              Delivery
            </th>
            <th scope="col" className="px-6 py-3">
              Charge
            </th>
            <th scope="col" className="px-6 py-3">
              Profit
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="odd:bg-white even:bg-gray-50 border-b">
            <th scope="row" className="px-6 py-4 font-medium text-gray-900">
              2079-09-11
            </th>
            <td className="px-6 py-4">O1</td>
            <td className="px-6 py-4">Rs. 12345.23</td>
            <td className="px-6 py-4">2</td>
            <td className="px-6 py-4">189</td>
            <td className="px-6 py-4">Rs. 12333</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default SalesTable;
