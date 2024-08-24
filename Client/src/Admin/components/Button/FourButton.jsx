import React from 'react'

function FourButton() {
  return (
    <div>
        <button type="button" className="focus:outline-none text-black bg-[#E5E5E5] font-medium text-sm px-5 py-2.5 mb-2">Weekly</button>
        <button type="button" className="focus:outline-none text-white bg-[#39B54A] font-medium text-sm px-5 py-2.5 mb-2">Today</button>
        <button type="button" className="focus:outline-none text-black bg-[#E5E5E5] font-medium text-sm px-5 py-2.5 mb-2">Monthly</button>
        <button type="button" className="focus:outline-none text-black bg-[#E5E5E5] font-medium text-sm px-5 py-2.5 mb-2">All Time</button>
    </div>
  )
}

export default FourButton