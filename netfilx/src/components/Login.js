import React, { useState } from 'react'
import Header from './Header'

const Login = () => {

  const [isSignInForm , setSignInForm] = useState(true);
  const toggleSignInForm=()=>{
     setSignInForm(!isSignInForm)
  }
  return (
    <div>
      <Header/>
      <div className='absolute'>
      <img src='https://assets.nflxext.com/ffe/siteui/vlv3/ca6a7616-0acb-4bc5-be25-c4deef0419a7/c5af601a-6657-4531-8f82-22e629a3795e/IN-en-20231211-popsignuptwoweeks-perspective_alpha_website_medium.jpg'
        alt='Netfilx Logo'
      />
      </div>
      <form className=' w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0  text-white rounded-lg'>
       <h1 className='font-bold text-3xl py-4'>{isSignInForm ? 'Sign In':"Sign Up"}</h1>
        <input type='text' placeholder='Email Address'
         className='p-2 my-2 w-full bg-gray-700' />
   {!isSignInForm && (<input type='text' placeholder='Full Name'
         className='p-2 my-2 w-full  bg-gray-700'/>)}
   <input type='password' placeholder='Password'
         className='p-2 my-2 w-full bg-gray-700'/>

        <button
         className='p-4 my-4
          bg-red-700
         text-white w-full'>{isSignInForm ? 'Sign In':"Sign Up"}</button>
         <p className='py-4 cursor-pointer' onClick={toggleSignInForm}>{isSignInForm ? "New to Netfilx?  Sign up Now" : "Already Signed?  Sign In Now"}</p>
      </form>
     
    </div>
  )
}

export default Login
