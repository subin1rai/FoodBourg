import { Link } from 'react-router-dom'
import AddUserBtn from '../Button/AddUserBtn';

function AllUserNavBar() {
  return (
    <nav className='flex justify-between'>
      <div className='flex space-x-7'>
        <Link to="/staff"><span className='text-xl'>Staff</span></Link>
        <Link to="/vendor"><span className='text-xl'>Vendor</span></Link>
        <Link to="/deliveryBoy"><span className='text-xl'>Delivery Boy</span></Link>
        <Link to="/user"><span className='text-xl'>User</span></Link>
      </div>
      <AddUserBtn/>
    </nav>
  )
}

export default AllUserNavBar;
