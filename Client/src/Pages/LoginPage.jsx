import React from 'react'
import NavbarLogin from '../components/NavbarLogin';
import { Link } from "react-router-dom";

const LoginPage = () => {
  return (
    
 <div className='w-screen h-screen flex flex-col '>
   <NavbarLogin/>
   <div className='flex items-center h-[90vh] justify-between px-8 w-screen gap-3 '> 
    <div className='flex justify-center items-center w-[50%] p-10 '>
    <img src="images/Hamburger-bro1.png" className='' alt="" />
    </div>
    <div className='flex w-[35%] flex-col border-2 justify-center gap-6 mr-6'>
      <div className='flex flex-col items-center gap-1 pt-14 mb-4 '>
        <h1 className='text-3xl font-semibold'>Welcome Back</h1>
        <p className='text-sm text-neutral-400'>Once you try it,you will love it</p>
      </div>

      <form action="" className='flex flex-col px-12  gap-4'>
       <div className='flex flex-col gap-2'>
       <label htmlFor="" className='text-[18px] '>Email</label>
       <input type="text"  placeholder='johndoe@gamil.com' className='py-3 border-2 border-neutral-400 focus:border-primary focus:outline-none px-4 rounded ' />
       </div>
       <div className='flex flex-col gap-2'>
       <label htmlFor="" >Password</label>
       <input type="text" placeholder='********' className='py-3 border-2 px-4 border-neutral-400 focus:border-primary focus:outline-none rounded ' />
       </div>

       <button className='w-full bg-primary py-3 mt-5 rounded text-white text-xl '>Log In</button>
      <p className='felx self-end mt-2'>Forget Password ?</p>
      </form>

      <div className='flex justify-between items-center px-12'>
        <hr  className='border-none bg-neutral-400 h-0.5 w-[35%]'/>
        <p className=''>Continue with</p>
        <hr className='border-none bg-neutral-400 h-0.5 w-[35%]'/>
      </div>

      <div className='flex flex-col items-center gap-6 mb-12'>
       <div className='flex gap-6'>
       <button><img src="images/apple.png" alt="" className='border-2 p-2 rounded' /></button>
       <button><img src="images/google.png" alt=""  className='border-2 p-2 rounded' /></button>
       </div>
      <p>Not a User? <span className='text-primary'> <Link to='/signup'> Register</Link></span></p>
      </div>


    </div>

   </div>
 </div>
  )
}

export default LoginPage;
