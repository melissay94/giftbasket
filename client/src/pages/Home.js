import React, { useState } from "react";
import { Redirect, Link } from "react-router-dom";
import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";
import { Typography, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import BasketCard from "../components/BasketCard";

const useStyles = makeStyles(theme => ({
  title: {
    margin: theme.spacing(5)
  },
  button: {
    margin: `0 auto`,
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(5),
    display: "block",
    width: "65%",
  }
}));

const GET_BASKETS = gql`
  query {
    currentUser {
      baskets {
        name,
        birthdate,
        address
      }
    }
  }`;

function Home(props) {
  
  const classes = useStyles();
  const { data, loading, error } = useQuery(GET_BASKETS);
  
  if (!props.isLoggedIn) {
    return <Redirect to="/" />
  }

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error!</div>;

  const baskets = data.currentUser.baskets;

  return(
    <div>
      <Typography 
        variant="h2" 
        align="center"
        className={classes.title}>Your Baskets</Typography>
      <Button 
        color="secondary" 
        variant="contained"
        component={Link}
        to="/basket/new"
        className={classes.button}
      >Create New Basket</Button>
      {baskets.map((item, index) => (
        <BasketCard key={index} basket={item} />
      ))}
    </div>
  );
}

export default Home;
