import React, { useState } from 'react'
import { Link } from 'react-router-dom'
// import ExtraOptions from './ExtraOptions'

const Navbar = () => {

  const [isActive, setIsActive] = useState(false)

  let toggle = ()=>{
    setIsActive(! isActive)
  }

  return (
   <>
     <div className='navbar'>
        <p><Link to={'/'} className='link'>Home</Link></p>
        <p><Link to={'/store'} className='link'>Store</Link></p>
        <p><Link to={'/iphone'} className='link'>Iphone</Link></p>
        <p><Link to={'/ipad'} className='link'>Ipad</Link></p>
        <p><Link to={'/macbook'} className='link'>Macbook</Link></p>
        <p><Link to={'/accesories'} className='link'>Accessories</Link></p>
    </div>
    {/* <ExtraOptions /> */}
   </>
  )
}

export default Navbar