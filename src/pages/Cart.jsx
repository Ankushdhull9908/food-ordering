import React, { useState } from 'react'
import './Cart.css'
import { useCart } from '../CartContext'
import FormStrcuture from '../components/FormStrcuture'
import '../components/Formstructure.css'
import { assets } from '../assets/assets'

function Cart() {

  const { logindata, address } = useCart()
  const [toggle, settoggle] = useState(false)
  const [confaddress,setconfaddress] = useState(false)
  const [payment,setpayment] = useState(false)

  return (
    <div className='cart'>

      <div className="cartbox">
        <div className="left">
          <div className="loginsignup">
            <div className="cartlefticon">
              <img src={assets.profile} alt='profile' />
            </div>
           
            {
              logindata.name !== null ? (<div className='loginsuccessfull'>
                <div><h3>Logged In</h3>
                  <img src={assets.check} alt='check' /></div>
                <h4>{logindata.name} | {logindata.phone}</h4>
              </div>) : (
                <div className='notloggedin'>
                  <div className={toggle === false ? 'loginsignupbutton' : 'notshow'}>
                    <div className="loginheading">
                      <div className="accountheading">
                        <h1>Account</h1>
                        <p>To place Order Please Log in</p>
                      </div>
                      
                      <div className="loginimage">
                        <img src='https://www.shutterstock.com/image-photo/fried-salmon-steak-cooked-green-600nw-2489026949.jpg' alt='error' />
            </div>

                    </div>
                    <div className="buttoncollection">
                    <button onClick={() => {
                      settoggle(true)
                    }}>Log in</button>
                    <button>Sign up</button>
                    </div>
                    
                  </div>
                  {
                    toggle === true ? <FormStrcuture /> : <div></div>
                  }
                </div>
              )
            }
          </div>
          <div className="address">
          <div className="changeaddress">
                  <p onClick={()=> {
                    setconfaddress(false)
                    setpayment(false)
                  } }>Change Address</p>
                </div>
            <div className="cartlefticon">
              <img src={assets.location} alt='profile' />
            </div>
            {
              logindata.name === null ? (<div>
                <h4>Delivery Address</h4>
              </div>) : (logindata.name !== null && confaddress===false? <div className='deliverybox'>
                
                <div className="deliveryaddressheading">
                <h3>Select Delivery Address</h3>
                </div>
                
                <div className="deliveryaddressboxes">
                  <div className="defaultaddress">
                    <p>{address.address}</p>
                    <button onClick={()=> {
                      setconfaddress(true)
                      setpayment(true)
                      }}> 
                      Deliver here
                    </button>
                  </div>
                  <div className="addnewaddress">
                  <button>Add new</button>
                  </div>
                </div>
              </div> : <div className='addresssuccessfull'>
                <h3>Address Confirmed</h3>
                <img src={assets.check} />
                <h4>{address.address}</h4>
              </div>)
            }

          </div>
          <div className="payment">
            <div className="cartlefticon">
              <img src={assets.payment} alt='profile' />
            </div>
            {
              payment===true ? <div>
                <button>Proceed with payment</button>
              </div> : <h3>Payment</h3>
            }

          </div>

        </div>
        <div className="cartsection">
          this is cart items
        </div>
      </div>

    </div>
  )
}

export default Cart
