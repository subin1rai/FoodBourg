import { Link } from 'react-router-dom'

function AllUserNavBar() {
  return (
    <nav className='flex justify-between'>
      <div className='flex space-x-7'>
        <Link to="/staff"><span className='text-xl'>Staff</span></Link>
        <Link to="/vendor"><span className='text-xl'>Vendor</span></Link>
        <Link to="/deliveryBoy"><span className='text-xl'>Delivery Boy</span></Link>
        <Link to="/user"><span className='text-xl'>User</span></Link>
      </div>
      <button type="button" className="focus:outline-none text-white bg-[#C41E24] hover:bg-red-800 font-medium rounded-lg text-sm px-7 py-4 me-2 mb-2">Add User</button>
    </nav>
  )
}

export default AllUserNavBar;
