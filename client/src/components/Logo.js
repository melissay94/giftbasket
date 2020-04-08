import React from "react";
import { Link } from "react-router-dom";
import logo_img from "../assets/GiftBasketLogo.png";

function Logo(props) {
  return(
      <Link to={props.link} className="logo_container">
        <img src={logo_img} alt="GiftBasket logo" className="logo" />
        <h1 className="app_name">GiftBasket</h1>
      </Link>
  )
}

export default Logo;