import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, removeItem } from "../../redux/Slice";
import { Link } from "react-router-dom";

const AddToCartUI = () => {
  const selector = useSelector((state) => state.cartName);
  const dispatch = useDispatch();

  const [grandTotal, setGrandTotal] = useState(0);

  useEffect(() => {
    let subTotal = 0;
    selector.forEach((f) => {
      let qtyPrice = f.qty * f.price;
      subTotal += parseInt(qtyPrice);
    });
    setGrandTotal(subTotal);
  }, [selector]);

  if (selector.length === 0) {
    return <div>No items added to the cart</div>;
  }

  return (
    <div className="cartSingleContainer">
      <div className="cartTotal">Total : {grandTotal}</div>
      {selector.map((item, index) => (
        <div className="cartCard" key={index}>
          
          <div className="cartImgDiv">
            <img src={item.image} alt="" className="cartImage" />
          </div>

          <div className="cartContentDiv">
            <h2>{item.title}</h2>
            <div className="keyFeatures">
              <p> {item.key1 }</p>
              <p> {item.key2}</p>
              <p> {item.key3}</p>
              <p> {item.key4}</p>
              <p>{item.Brand}</p>
              <p>{item.Model_Name}</p>
              <p>{item.Network_Service_Provider}</p>
              <p>{item.Operating_System}</p>
              <p>{item.RAM_type}</p>
              <p>{item.Graphic_Processor}</p>
              <p>{item.rating}</p>
            </div>
            <div className="secondLayer">
              <p> Price : {item.qty * item.price}</p>
              <p className="quantity">Qty : {item.qty}</p>

              <div className="btnsDiv">
              <button onClick={()=> dispatch(removeItem(item.id))} className="cartUIBtn" > <i className="fa-solid fa-trash"></i></button>
              <button onClick={() => dispatch(decrement(item.id))} className="cartUIBtn"> <i className="fa-solid fa-square-minus"></i> </button>
              <button onClick={() => dispatch(increment(item.id))} className="cartUIBtn"><i className="fa-solid fa-square-plus"></i></button>
              <p className="buyCartBtn"><Link to={'/placed'}>Buy Now</Link></p>
              </div>
            </div>
          </div>    
        </div>
      ))}
    </div>
  );
};

export default AddToCartUI;
