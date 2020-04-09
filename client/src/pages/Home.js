import React from "react";
import { Typography, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import BasketCard from "../components/BasketCard";

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(5)
  }
}))

function Home() {

  const baskets = [];
  const classes = useStyles();

  return(
    <div>
      <Typography variant="h2">Your Baskets</Typography>
      <Button color="secondary" variant="contained" className={classes.button}>Create New Basket</Button>
      {baskets.map((item, index) => (
        <BasketCard key={index} basket={item} />
      ))}
    </div>
  );
}

export default Home;
