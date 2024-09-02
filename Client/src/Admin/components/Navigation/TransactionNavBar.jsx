import FourButton from '../Button/FourButton'

function TransactionNavBar() {
  return (
    <nav className='flex justify-between'>
    <div className='flex space-x-7'>
      <button><span className='text-xl bg-yellow-400'>Sales</span></button>
      <button><span className='text-xl bg-yellow-400'>Profit</span></button>
      <button><span className='text-xl bg-yellow-400'>Tax</span></button>
      <button><span className='text-xl bg-yellow-400'>Transaction Details</span></button>
    </div>
    <FourButton/>
  </nav>
  )
}

export default TransactionNavBar