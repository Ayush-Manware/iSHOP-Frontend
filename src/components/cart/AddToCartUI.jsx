import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../../redux/Slice";

const AddToCartUI = () => {
  const selector = useSelector((state) => state.cartName);

  const [state, setState] = useState();
  const [grandTotal, setGrandTotal] = useState()

   useEffect(()=>{
    let subTotal = 0;
    selector.map((f) => {
        let qtyPrice = f.qty * f.price
        setState(qtyPrice)
        subTotal += parseInt(qtyPrice)
    })
    setGrandTotal(subTotal)
   },[selector])

  let totalPrice = 0;
  const price = selector.map((f) => (totalPrice += f.price));

  const dispatch = useDispatch();

  let toggle = false;

  if (totalPrice === 0) {
    toggle = false;
  } else {
    toggle = true;
  }

  return (
    <div className="cartSingleContainer">



      <div className="cartTotal">Total : {grandTotal}</div>



      {selector.map((item, index) => {
        return (
          <div className="cartCard" key={index}>
            <div className="cartImgDiv">
              <img src={item.image} alt="" className="cartImage" />
            </div>
            <div className="cartContentDiv">
              <h2>{item.title}</h2>
              <div className="keyFeatures">
                <p>- {item.key1}</p>
                <p>- {item.key2}</p>
                <p>- {item.key3}</p>
                <p>- {item.key4}</p>
              </div>
              <div className="secondLayer">
                <p> Price : {state}</p>

                <div className="btnsDiv">
                  <button
                    onClick={() => dispatch(increment(item.id))}
                    className="cartUIBtn"
                  >
                    +
                  </button>
                  <button
                    onClick={() => dispatch(decrement(item.id))}
                    className="cartUIBtn"
                  >
                    -
                  </button>
                  <p className="quantity">{item.qty}</p>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default AddToCartUI;
