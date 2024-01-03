import React from 'react'
import { useUserContext } from '../context/AddUserContext'

function Browse() {
    let {user}=useUserContext()
    console.log(user);
  return (
    <div>Browse</div>
  )
}

export default Browse