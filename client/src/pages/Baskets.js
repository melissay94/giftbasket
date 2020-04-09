import React from "react";
import { Redirect } from "react-router-dom";
import BasketHeader from "../components/BasketHeader";
import GiftCard from "../components/GiftCard";

function Baskets(props) {
  
  if (!props.isLoggedIn) {
    return <Redirect to="/" />
  }

  return(
    <div>
      <BasketHeader />
      {props.gifts.map((item, index) => (
        <GiftCard key={index} gift={item} />
      ))}
    </div>
  );
}

export default Baskets;
