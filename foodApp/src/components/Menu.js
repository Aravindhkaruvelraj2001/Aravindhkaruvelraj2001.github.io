import React from "react";
import { MenuList } from "./MenuList";
import Show from "./UI/Show";
import "../styles/Menu.css";

function Menu() {
  return (
    <div style={{ backgroundColor: "#7efca0" }}>
      <div>
        <h1>Our Menu</h1>
      </div>
      <div className="menu">
        {MenuList.map((item, key) => {
          return (
            <Show
              key={key}
              name={item.name}
              image={item.image}
              price={item.price}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Menu;
