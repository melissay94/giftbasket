import React from 'react';
import { Redirect } from 'react-router-dom';
import { useMutation } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import { Typography, Button } from '@material-ui/core';

// Basket delete call needed
const DELETE_BASKET = gql`
mutation deleteBasket($id: Int!) {
  deleteBasket(id: $id)
}`;


function BasketHeader({ basket }) {
  const [deleteBasket, { data, loading, error }] = useMutation(DELETE_BASKET);

  const parseDate = (date) => {
    const convertDate = new Date(Date.parse(date));
    const dateTimeArray = convertDate.toString().split(' ');
    const dateString = `${dateTimeArray[1]} ${dateTimeArray[2]}, ${dateTimeArray[3]}`;
    return dateString;
  };

  const handleDeleteBasket = e => {
    e.preventDefault();
    
    deleteBasket({ variables: { id: basket.id }});
  }

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error!</div>;

  if(data) return <Redirect to="/home" />

  return (
    <div>
      <div>
        <Typography variant="h2">
          {basket.name ? basket.name : 'No name'}
        </Typography>
        <Typography variant="body2">
          {basket.birthdate ? parseDate(basket.birthdate) : 'No birthdate'}
        </Typography>
      </div>
      <Button
        color="secondary"
        href={`/basket/${basket.id ? basket.id : ''}/edit`}
      >
        Edit

      </Button>
      <Button color="secondary" onClick={e => handleDeleteBasket(e)}>Delete</Button>
    </div>
  );
}

export default BasketHeader;
