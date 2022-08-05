import React from "react";
import about from "../../assets/about.jpg";
import aboutsrc from "../../assets/aboutsrc.webp";

import "../../styles/About.css";

function About() {
  return (
    <div>
      <img className="topImage" src={aboutsrc} alt="image" />
      <div className="paraImage">
        <div className="paraHeading">
          <h2>Who we are</h2>
          <p>
            Zomato’s mission is better food for more people. Started in 2010,
            Zomato offers services like restaurant search & discovery, reviews,
            home delivery of food, online table reservation, and digital
            payments when dining out. It also works with restaurant partners to
            provide tools that enable them to engage and acquire more customers
            while empowering them with a last-mile delivery service and a
            one-stop procurement solution - Hyperpure, for ingredients and
            kitchen products. Apart from this, Zomato has been focusing on
            providing transparent and flexible earning opportunities to its
            delivery fleet, and contributing towards a more sustainable society
            through its non-profit entity Feeding India.
          </p>
        </div>
        <img className="bottomImage" src={about} alt="hai " />
      </div>
    </div>
  );
}

export default About;
