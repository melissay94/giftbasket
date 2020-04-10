import React from "react";
import { Grid } from "@material-ui/core";
import GiftCard from "./GiftCard";

function GiftList(props) {

  return (
    <Grid container>{
      props.gifts.length > 0 ? props.gifts.map((item, index) => (
        <Grid item xs={6} md={4} lg={3} key={index}>
          <GiftCard gift={item} />
        </Grid>
      )) : <div>No Gifts Added Yet.</div>
      }
    </Grid>
  );
}

export default GiftList;