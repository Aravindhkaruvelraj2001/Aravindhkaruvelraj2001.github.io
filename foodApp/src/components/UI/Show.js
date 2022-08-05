import React from "react";
import "../../styles/Show.css";
import { addItem } from "../Redux/Action";
import { useDispatch } from "react-redux";

function Show({ name, image, price }) {
  const dispatch = useDispatch();

  const onAddHandler = (name, image, price) => {
    const data = { name, image, price };
    // console.log();
    dispatch(addItem(data));
  };

  return (
    <div className="menuItem">
      <img className="show" src={image} alt="Not available" />
      <div className="name_wrapper">
        <h2 className="name">{name}</h2>
        <div className="bottomButton">
          <p>${price}</p>
          <input
            type="button"
            value="+"
            onClick={() => onAddHandler(name, image, price)}
          />
        </div>
      </div>
    </div>
  );
}

export default Show;
