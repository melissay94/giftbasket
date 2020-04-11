import React from "react";
import { Card, CardContent, Typography, CardActions, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: "100%",
    minHeight: 360,
    margin: theme.spacing(2)
  }
}));

function BasketCard(props) {

  const classes = useStyles();

  return(
    <Card className={classes.root}>
      <CardContent>
        <Typography gutterBottom variant="h5">
          {props.basket.name ? props.basket.name : "Empty Basket"}
        </Typography>
        <Typography variant="body2">
          {props.basket.birthdate ? props.basket.birthdate : "Empty Birthdate"}
        </Typography>
      </CardContent>
      <CardActions>
        <Button 
          size="small" 
          color="secondary" 
          href={`basket/${props.basket.id ? props.basket.id : ""}`}>
            See More
        </Button>
      </CardActions>
    </Card>
  );
}

export default BasketCard;
