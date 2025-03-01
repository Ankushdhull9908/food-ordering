import React, { useState } from 'react'
import { useCart } from '../CartContext'

function Signup() {
    const { login }= useCart()
    const [name,setname] = useState('')
    const [phone,setphone] = useState('')
    const [pass,setpass] = useState('')


    function submit(e)
    {
        const data = {name:name,phone:phone,pass:pass}
        localStorage.setItem('logindata',JSON.stringify(data))
        login(data)

        e.preventDefault()
    }
  return (
    <div className='signup'>
      <form>
        <input type='text' placeholder='Enter Name'value={name} onChange={(e)=>{
            setname(e.target.value)
        }}/>

        <input type='number' placeholder='Enter Phone'value={phone} onChange={(e)=>{
            setphone(e.target.value)
        }}/>

<input type='password' placeholder='Enter Pass'value={pass} onChange={(e)=>{
            setpass(e.target.value)
        }}/>  



        <button onClick={(e)=>{
            submit(e)
        }}>Sign up</button>
        </form>
    </div>
  )
}

export default Signup
