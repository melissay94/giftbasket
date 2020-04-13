import React from 'react';
import { Redirect, useParams } from 'react-router-dom';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import BasketHeader from '../components/BasketHeader';
import GiftCard from '../components/GiftCard';

// Call to get specific basket
const GET_BASKET = gql`
  query basket($id: Int!) {
    basket(id: $id) {
      id,
      name,
      birthdate,
      gifts {
        id,
        title,
        description
      }
    }
  }`;

function Baskets({ isLoggedIn }) {
  const { id } = useParams();

  const { data, loading, error } = useQuery(GET_BASKET, {
    variables: { id: parseInt(id, 10) },
  });

  if (!isLoggedIn) {
    return <Redirect to="/" />;
  }

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error!</div>;

  const { basket } = data;

  return (
    <div>
      <BasketHeader basket={basket || null} />
      {basket.gifts.map((item) => (
        <GiftCard key={item.id} gift={item} />
      ))}
    </div>
  );
}

export default Baskets;
