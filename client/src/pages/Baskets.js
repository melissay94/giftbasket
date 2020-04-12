import React from "react";
import { Redirect, useParams } from "react-router-dom";
import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";
import BasketHeader from "../components/BasketHeader";
import GiftCard from "../components/GiftCard";

// Call to get specific basket
const GET_BASKET = gql`
  query basket($id: Int!) {
    basket(id: $id) {
      name
      gifts {
        title
        description
      }
    }
  }`;

function Baskets(props) {

  const {id} = useParams();

  const { data, loading, error } = useQuery(GET_BASKET, {
    variables: { id: parseInt(id) }
  });
  
  if (!props.isLoggedIn) {
    return <Redirect to="/" />
  }

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error!</div>;

  const basket = data.basket;
  
  return(
    <div>
      <BasketHeader basket={ basket ? basket : null } />
      {basket.gifts.map((item, index) => (
        <GiftCard key={index} gift={item} />
      ))}
    </div>
  );
}

export default Baskets;
