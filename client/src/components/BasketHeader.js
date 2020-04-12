import React from 'react';
import { Typography, Button } from '@material-ui/core';

// Basket delete call needed

function BasketHeader({ basket }) {
  const parseDate = (date) => {
    const convertDate = new Date(Date.parse(date));
    const dateTimeArray = convertDate.toString().split(' ');
    const dateString = `${dateTimeArray[1]} ${dateTimeArray[2]}, ${dateTimeArray[3]}`;
    return dateString;
  };

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
      <Button color="secondary">Delete</Button>
    </div>
  );
}

export default BasketHeader;
