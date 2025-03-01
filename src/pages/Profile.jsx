import React from 'react'
import {useNavigate, useParams } from 'react-router-dom'

function Profile() {
   const navigate = useNavigate()
   const { name} = useParams()
  return (
    <div>
      This is profile of {name}


      <button onClick={()=>{
         localStorage.removeItem('logindata')
         navigate('/')
         
      }}>Logout</button>

<button onClick={()=>{
         localStorage.removeItem('useraddress')
         navigate('/')
         
      }}>Delete Address</button>
    </div>

  )
}

export default Profile
