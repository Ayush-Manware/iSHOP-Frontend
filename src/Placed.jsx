import React from 'react'
import { Link } from 'react-router-dom'

const Placed = () => {
  return (
    <div className="order-main">
        <h1>Order Placed Successfully</h1>
       <p> <Link to={"/"}>Continue Shopping...</Link> </p>
    </div>
  )
}

export default Placed
