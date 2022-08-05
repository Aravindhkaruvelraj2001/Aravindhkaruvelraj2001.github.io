import React from "react";
import { useSelector, useDispatch } from "react-redux";
import "../../styles/Cart.css";
import { removeItem } from "../Redux/Action";

const Cart = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state);

  const remove = (item) => {
    console.log(item);
    console.log(data);
    dispatch(removeItem(item));
  };

  // console.log(data);
  if (data.length > 0) {
    return (
      <div className="cartContainer">
        <div className="foodCart">
          <h2>Food Cart</h2>
          <p>Price</p>
        </div>
        {data.map((item) => {
          return (
            <div className="cartWrapper">
              <img className="cartImage" src={item.image} alt="Not available" />
              <div>
                <p>{item.name}</p>
                <div style={{ display: "flex" }}>
                  <p>Quantity:{item.quantity}|</p>
                  <p
                    style={{ color: "blue", cursor: "pointer" }}
                    onClick={() => remove(item)}
                  >
                    delete
                  </p>
                </div>
              </div>
              <div>
                <p className="pBold">{item.price}</p>
              </div>
            </div>
          );
        })}
        <div className="total">
          <p className="pBold">Total</p>
          <p className="pBold">{data[0].price}</p>
        </div>
      </div>
    );
  } else {
    return (
      <div
        style={{
          height: "100vh",
          fontSize: "2em",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#7efca0",
        }}
      >
        Your Cart is Empty :(
      </div>
    );
  }
};

export default Cart;
