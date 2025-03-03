import React, { useState } from 'react'
import './Cart.css'
import { useCart } from '../CartContext'
import FormStrcuture from '../components/FormStrcuture'
import '../components/Formstructure.css'

function Cart() {

  const {logindata,address}= useCart() 
  const [toggle,settoggle] = useState(false)
  return (
    <div className='cart'>

      <div className="cartbox">
        <div className="left">
          <div className="loginsignup">
            {
              logindata.name!==null ? (<div className='loginsuccessfull'>
               <p>Login Successfull</p>
              </div>) : (
                 <div className='notloggedin'>
                  <div className={toggle===false? 'loginsignupbutton' : 'notshow'}>
                  <div className="loginheading">
      <div className="accountheading">
        <h1>Account</h1>
        <p>To place Order Please Log in</p>
      </div>
      <div className="loginimage">
        <img src='https://www.shutterstock.com/image-photo/fried-salmon-steak-cooked-green-600nw-2489026949.jpg' alt='error' />
      </div>


    </div>
                    <button onClick={()=>{
                      settoggle(true)
                    }}>Log in</button>
                    <button>Sign up</button>
                  </div>
                  {
                    toggle===true ? <FormStrcuture/>:<div></div>
                  }
                 </div>
              )
            }
          </div>
          <div className="address">
            {
              logindata.name===null && address.city===null ? (<div>
                <p>Delivery Address</p>
              </div>) : ( logindata.name!==null && address.city===null ? <div>

                <p>defualt address</p>
              </div> : <div>
                <p>Address Confirmed</p>
              </div>) 
            }

          </div>
          <div className="payment">

          </div>

        </div>
        <div className="cartbox">
          this is cart items
        </div>
      </div>
      
    </div>
  )
}

export default Cart
