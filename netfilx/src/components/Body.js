import React, { useEffect } from 'react'
import Browse from './Browse'
import Login from './Login';
import {  onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";

import { addUser, removeUser } from "../utils/userSlice"
import {RouterProvider} from 'react-router-dom'
import { createBrowserRouter } from 'react-router-dom'
const Body = () => {
  const dispatch = useDispatch();
 
    const appRouter=createBrowserRouter([
    {
      path:'/',
      element:<Login/>
    },
    {
        path:"/browse",
        element:<Browse/>
    }
]);

useEffect(() => {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      // when the user signs in or signs up the if() will be executed and the values are added to the store
      const { uid, email, displayName, photoURL } = user;
      dispatch(
        addUser({
          uid: uid,
          email: email,
          displayName: displayName,
          photoURL: photoURL,
        })
      );
     
    } else {
      // when the user signs out then else() will be executed
      dispatch(removeUser());
    }
  });

}, []);
  return (
 
    <div>
    <RouterProvider router={appRouter} />
 
    
    </div>
  )
}

export default Body
