import React from "react";
import { Link } from "react-router-dom";
import logo_img from "../assets/GiftBasketLogo.png";

function Logo(props) {
  return(
    <div>
      <Link to={props.link}>
        <img src={logo_img} alt="GiftBasket logo" className="logo" />
      </Link>
    </div>
  )
}

export default Logo;