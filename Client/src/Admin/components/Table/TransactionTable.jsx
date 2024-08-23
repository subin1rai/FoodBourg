import React from "react";

function TransactionTable() {
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
              Transaction Id
            </th>
            <th scope="col" className="px-6 py-3">
              Transaction Made
            </th>
            <th scope="col" className="px-6 py-3">
              Checkout By
            </th>
            <th scope="col" className="px-6 py-3">
              Purchase Item
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="odd:bg-white even:bg-gray-50 border-b">
            <th scope="row" className="px-6 py-4 font-medium text-gray-900">
              2079-09-11
            </th>
            <td className="px-6 py-4">SP_987</td>
            <td className="px-6 py-4">BN_123</td>
            <td className="px-6 py-4">Cash on Delivery</td>
            <td className="px-6 py-4">Rider Raju Thapa</td>
            <td className="px-6 py-4">2 Chicken Curry</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default TransactionTable;
