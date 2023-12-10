import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const AddToCart = () => {

  const selector = useSelector((state) => state.cartName);
    console.log(selector);

  return (
    <div className='addToCart'>
       <Link to={'/cartProducts'} className='addToCartLink'> <i class="fa-solid fa-cart-shopping"></i>&nbsp;: {selector.length}</Link>
    </div>
  )
}

export default AddToCart