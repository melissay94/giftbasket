import React from 'react';
import { Link } from 'react-router-dom';
import logoImg from '../assets/GiftBasketLogo.png';

function Logo({ link }) {
  return (
    <Link to={link} className="logo_container">
      <img src={logoImg} alt="GiftBasket logo" className="logo" />
      <h1 className="app_name">GiftBasket</h1>
    </Link>
  );
}

export default Logo;
