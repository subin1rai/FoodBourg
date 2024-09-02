import AddUserBtn from '../Button/AddUserBtn';

function AllUserNavBar() {
  return (
    <nav className='flex justify-between'>
      <div className='flex space-x-7'>
        <button><span className='text-xl bg-yellow-400'>Staff</span></button>
        <button><span className='text-xl bg-yellow-400'>Vendor</span></button>
        <button><span className='text-xl bg-yellow-400'>Delivery Boy</span></button>
        <button><span className='text-xl bg-yellow-400'>User</span></button>
      </div>
      <AddUserBtn/>
    </nav>
  )
}

export default AllUserNavBar;
