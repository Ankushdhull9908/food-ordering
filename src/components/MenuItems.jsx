import React, { useState } from 'react'
import { restaurants } from '../assets/Restaurants'
import './Menuitem.css'
import { useCart } from '../CartContext'
import { assets } from '../assets/assets'

function MenuItems() {
    const [visibleitem,setvisibleitem] = useState(8)

    const {final } = useCart()

    
  return (
    <div className='fooditems'>
        {
            final.slice(0,visibleitem).map((item,index)=>{
                const estimatedtime = Math.ceil((item.Distance / 30) * 60)

                return(
                    <div className='fooditem' key={index}>
                        <div className="foodimg">
                        <img src={item.image} alt='error'/>
                        </div>
                        <div className="resname">
                        <h3>{item.name}</h3>
                        </div>
                        

                        <div className="ratingdeliverytime">
                            <img src={assets.rating_starts} alt='error'/>
                        <p>{item.rating}</p>
                        <p> - {estimatedtime}min</p>
                        </div>
                        <div className="resaddress">
                        <p>{item.location.address}</p>
                        </div>  
                       
                      
                    </div>
                )
            })
        }

        <div className="showmore">
            <button>Show More</button>
        </div>
      
    </div>
  )
}

export default MenuItems
