// import React, { useRef, useState } from 'react'
// import Header from './Header'
// import { checkValidData} from '../utils/validate';
// import {addDoc,collection} from "@firebase/firestore"
// import { firestore } from '../utils/firebase';
// import { auth } from '../utils/firebase';
// // import {firebase} from '../utils/firebase';
// import { createUserWithEmailAndPassword,signInWithEmailAndPassword } from "firebase/auth";

// const Login = () => {
//   const email = useRef(null);
//   const password= useRef(null);
//   const name = useRef(null);
//   const [errorMessage,setErrorMessage]=useState(null);
//   const ref = collection(firestore,"message");

//   const handleButtonClick =()=>{

//     // validate the form data

//     //  console.log(email.current.value);
//     //  console.log(password.current.value)
//      const message= checkValidData(email.current.value , password.current.value);
//     //  console.log(message);
//      setErrorMessage(message);


//  if(!isSignInForm){
//   createUserWithEmailAndPassword(auth, email.current.value ,password.current.value)
//   .then((userCredential) => {
//     // Signed up 
//     const user = userCredential.user;
//     console.log(user);
//     // ...
//   })
//   .catch((error) => {
//     const errorCode = error.code;
//     const errorMessage = error.message;
//     setErrorMessage(errorCode+""+errorMessage);
//     // ..
//   });
// }
//  else{
//   signInWithEmailAndPassword(auth,email.current.value,password.current.value)
//   .then((userCredential) => {
//     // Signed in 
//     const user = userCredential.user;
//     console.log(user);
//     // ...
//   })
//   .catch((error) => {
//     const errorCode = error.code;
//     const errorMessage = error.message;
//     setErrorMessage(errorCode+""+errorMessage);
//   });
//  }


//   };

//   const [isSignInForm , setSignInForm] = useState(true);
//   const toggleSignInForm=()=>{
//      setSignInForm(!isSignInForm)
//   }

//   // const handleSave = async(e)=>{
//   //    e.preventDefault();
//   //   //  console.log(email.current.value);
//   //   //  console.log(password.current.value);
//   //   //  console.log(name.current.value);


//   //    let data={
//   //     email:email.current.value,
//   //     password:password.current.value,
//   //     // name:name.current.value
//   //    }

//   //    try{
//   //     addDoc(ref,data)
//   //    }catch(e){
//   //     console.log(e);
//   //    }
//   // }
//   const handleSave=()=>{
//     console.log("hi")
//   }
//   return (
//     <div>
//       <Header/>
//       <div className='absolute'>
//       <img src='https://assets.nflxext.com/ffe/siteui/vlv3/ca6a7616-0acb-4bc5-be25-c4deef0419a7/c5af601a-6657-4531-8f82-22e629a3795e/IN-en-20231211-popsignuptwoweeks-perspective_alpha_website_medium.jpg'
//         alt='Netfilx Logo'
//       />
//       </div>
//       <form onSubmit={handleSave} className=' w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0  text-white rounded-lg'>
//        <h1 className='font-bold text-3xl py-4'>{isSignInForm ? 'Sign In':"Sign Up"}</h1>
//        {!isSignInForm && (<input ref={name} type='text' placeholder='Full Name'
//          className='p-2 my-2 w-full  bg-gray-700'/>)}
//         <input  ref={email}  type='text' placeholder='Email Address'
//          className='p-2 my-2 w-full bg-gray-700' />
   
//    <input ref={password}   type='password' placeholder='Password'
//          className='p-2 my-2 w-full bg-gray-700'/>
//    <p className='text-red-500 font-bold text-lg py-3'>{errorMessage}</p>
//         <button
//          className='p-4 my-4
//           bg-red-700
//          text-white w-full' onClick={handleButtonClick}>{isSignInForm ? 'Sign In':"Sign Up"}</button>
//          <p className='py-4 cursor-pointer' onClick={toggleSignInForm}>{isSignInForm ? "New to Netfilx?  Sign up Now" : "Already Signed?  Sign In Now"}</p>
//       </form>
     
//     </div>
//   )
// }

// export default Login



import React, { useRef, useState } from "react";
import Header from "./Header";
// import { checkValidData} from '../utils/validate';
import { checkValidData } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";

import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { BG_URL, USER_AVATAR } from "../utils/constants";
import {  useNavigate } from "react-router-dom";

const Login = () => {
  const navigate=useNavigate();
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const dispatch = useDispatch();

  const email = useRef(null);
  const password = useRef(null);
  const fullName = useRef(null);

  const handleButtonClick = () => {
    // Validate the form data
    // checkValidData
    const message = checkValidData(
      email?.current?.value,
      password?.current?.value,
      fullName?.current?.value
    );
    setErrorMessage(message);
    if (message) return; // this means that the error message is being displayed (meaning this condition is true) and refrains from further execution

    // Sign In/Sign Up Logic
    if (!isSignInForm) {
      // Sign up logic
      createUserWithEmailAndPassword(
        // api
        auth,
        email?.current?.value,
        password?.current?.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          console.log(user);

          navigate("/browse");
          updateProfile(user, {
            displayName: fullName?.current?.value,
            photoURL: USER_AVATAR,
          })
            .then(() => {
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
            })
            .catch((error) => {
              setErrorMessage(error.message);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    } else {
      // Sign in logic
      signInWithEmailAndPassword(
        auth,
        email?.current?.value,
        password?.current?.value
     

      )
        .then((userCredential) => {
          const user = userCredential.user;
          console.log(user);
          navigate("/browse");

        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    }
  };

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img alt="netflix-bg-icon" src={BG_URL} />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="absolute p-12 bg-black w-3/12 my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80"
      >
        <h1 className="font-bold text-3xl py-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            ref={fullName}
            type="text"
            placeholder="Full Name"
            className="p-4 my-4 w-full rounded-lg bg-gray-600"
          />
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email Address"
          className="p-4 my-4 w-full rounded-lg bg-gray-600"
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-4 my-4 w-full rounded-lg bg-gray-600"
        />
        <p className="text-red-600">{errorMessage}</p>
        <button
          className="p-4 my-6 bg-red-700 w-full rounded-lg"
          onClick={handleButtonClick}
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="mx-1 text-gray-500">
          {isSignInForm ? "New to Netflix? " : "Already Registered? "}
          <span
            className="text-white hover:underline cursor-pointer"
            onClick={toggleSignInForm}
          >
            {isSignInForm ? "Sign up now" : "Sign in"}
          </span>
          .
        </p>
      </form>
    </div>
  );
};

export default Login;
