import React from 'react'
import Logo from "../assets/yt-logo.png";
import { signOut } from 'firebase/auth';
import { useUserContext } from '../context/AddUserContext';
import { auth } from '../utils/firebase';

function Header() {
  let {user}=useUserContext()
  function handleSignOut(){
signOut(auth).then(() => {
  // Sign-out successful.
}).catch((error) => {
  // An error happened.
});

  }
  return (
    <>
   <div className=" p-5 bg-gray-500">
      <img src={Logo} width="100" height="100" alt="" />
      {user && ( <button onClick={handleSignOut} className='bg-red-500 w-28 h-12 mt-4 '>sign Out</button>)}{""}</div>
        
    </>
  )
}

export default Header