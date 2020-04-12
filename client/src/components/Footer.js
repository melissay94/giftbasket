import React from 'react';
import { Grid, Typography, Link } from '@material-ui/core';

function Footer() {
  return (
    <Grid container className="footer">
      <Grid item lg={4} md={4} xs={12}>
        <Typography variant="subtitle2">
          Copyright © 2020, Melissa Young
        </Typography>
      </Grid>
      <Grid item lg={4} md={4} xs={12}>
        <Link href="https://github.com/melissay94/giftbasket" target="_blank" color="secondary">GiftBasket GitHub</Link>
      </Grid>
      <Grid item lg={4} md={4} xs={12}>
        <Link href="https://linkedin.com/in/melissadcyoung/" target="_blank" color="secondary">My LinkedIn</Link>
      </Grid>
    </Grid>
  );
}

export default Footer;
