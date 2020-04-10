import React from "react";
import { Typography, Button } from "@material-ui/core";

// Basket delete call needed

function BasketHeader(props) {
  return(
    <div>
      <div>
        <Typography variant="h2">
          {props.basket.name ? props.basket.name : "No name"}
        </Typography>
        <Typography variant="body2">
          {props.basket.birthdate ? props.basket.birthdate : "No birthdate"}
        </Typography>
      </div>
      <Button color="secondary" 
        href={`/basket/${props.basket.id ? props.basket.id : "" }/edit`}>Edit</Button>
      <Button color="secondary">Delete</Button>
    </div>
  );
}

export default BasketHeader;
