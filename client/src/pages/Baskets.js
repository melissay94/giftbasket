import React from "react";
import BasketHeader from "../components/BasketHeader";
import GiftCard from "../components/GiftCard";


function Baskets(props) {
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
