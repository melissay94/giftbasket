import React from 'react';
import { Grid } from '@material-ui/core';
import GiftCard from './GiftCard';

function GiftList({ gifts, isNewBasketFlow}) {
  return (
    <Grid container>
      {
      gifts.length > 0 ? gifts.map((item) => (
        <Grid item xs={6} md={4} lg={3} key={item.id}>
          <GiftCard gift={item} isNewBasketFlow={isNewBasketFlow} />
        </Grid>
      )) : <div>No Gifts Added Yet.</div>
      }
    </Grid>
  );
}

export default GiftList;
