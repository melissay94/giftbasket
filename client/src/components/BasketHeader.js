import React from 'react';
import { Typography, Button } from '@material-ui/core';

// Basket delete call needed

function BasketHeader({ basket }) {
  return (
    <div>
      <div>
        <Typography variant="h2">
          {basket.name ? basket.name : 'No name'}
        </Typography>
        <Typography variant="body2">
          {basket.birthdate ? basket.birthdate : 'No birthdate'}
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
