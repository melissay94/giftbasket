import React from "react";
import { Redirect } from "react-router-dom";
import { Typography, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import BasketCard from "../components/BasketCard";

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(5)
  }
}))

function Home(props) {
  
  const classes = useStyles();
  
  if (!props.isLoggedIn) {
    return <Redirect to="/" />
  }

  const baskets = [];

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
