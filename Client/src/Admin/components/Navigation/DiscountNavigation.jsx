import React from 'react'
import AddUserBtn from '../Button/AddUserBtn';


function DiscountNavigation() {
  return (
    <nav className='flex justify-between'>
    <div className='flex space-x-7'>
      <button><span className='text-xl bg-yellow-400'>Coupon</span></button>
    </div>
    <AddUserBtn/>
  </nav>
  )
}

export default DiscountNavigation