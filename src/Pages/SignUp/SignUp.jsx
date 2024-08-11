import React from "react";
import { Link } from "react-router-dom";
import NavbarLogin from "../../components/NavbarLogin";
import signUpImage from "../../../public/images/Shawarma-bro.png";
const SignUp = () => {
  return (
    <div className="h-screen w-screen flex flex-col">
      <NavbarLogin />
      <div className="w-screen h-[90vh] flex py-10">
        <div className="w-[50%] flex justify-center items-center p-20 mx-6">
          <img src={signUpImage} alt="SignUp Image" />
        </div>
        <div className="border border-neutral-500 w-[35%] flex flex-col mx-32 pt-10 gap-10">
          <div className="flex flex-col justify-center items-center gap-2">
            <h1 className="text-3xl font-semibold">Sign Up</h1>
            <p className="text-sm text-neutral-400">
              {" "}
              create an account an Enjoy Ordering
            </p>
          </div>

            <form action="" className="flex flex-col px-12  gap-4">
            <div className='flex flex-col gap-2'>
       <label htmlFor="" className='text-[18px] '>Name</label>
       <input type="text"  placeholder='John Doe' className='py-3 border-2 border-neutral-400 focus:border-primary focus:outline-none px-4 rounded ' />
       </div>
            <div className='flex flex-col gap-2'>
       <label htmlFor="" className='text-[18px] '>Email</label>
       <input type="text"  placeholder='johndoe@gmail.com' className='py-3 border-2 border-neutral-400 focus:border-primary focus:outline-none px-4 rounded ' />
       </div>
            <div className='flex flex-col gap-2'>
       <label htmlFor="" className='text-[18px] '>Password</label>
       <input type="text"  placeholder='********' className='py-3 border-2 border-neutral-400 focus:border-primary focus:outline-none px-4 rounded ' />
       </div>
       <div className='flex flex-col gap-2'>
  <label htmlFor="" className='text-[18px]'>Confirm Password</label>
  <input 
    type="text" 
    placeholder='********' 
    className='py-3 border-2 border-neutral-400 focus:border-primary focus:outline-none  px-4 rounded' 
  />
</div>

        <p className="text-sm tracking-wider mb-3">By clicking Register, you agree to the <span className="text-primary cursor-pointer underline">Terms of Use and Privacy Policy </span>of FoodBourg.</p>
        <div>
        <button className="w-full bg-primary py-3 text-xl rounded   text-white">
            Register
        </button>
        <p className="text-center mt-5 ">Already a User? <span className='text-primary'>  <Link to='/'>Login</Link></span></p>

       
        </div>
            </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
