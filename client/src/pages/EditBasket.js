import React from 'react';
import { Redirect, useParams } from 'react-router-dom';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import EditBasketForm from "../components/EditBasketForm";

const GET_BASKET = gql`
query basket($id: Int!) {
  basket(id: $id) {
    id,
    name,
    birthdate,
    address
  }
}`;

const useStyles = makeStyles((theme) => ({
  title: {
    margin: theme.spacing(5),
  },
}));

function EditBasket({ isLoggedIn }) {

  const { id } = useParams();
  const classes = useStyles();

  const { data: queryData, loading: queryLoading, error: queryError } = useQuery(GET_BASKET, {
    variables: { id: parseInt(id, 10) },
  });

  if (!isLoggedIn) {
    return <Redirect to="/" />
  }

  if (queryLoading) return <div>Loading...</div>;
  if (queryError) return <div>Error!</div>;

  return(
    <div>
    <Typography
      variant="h2"
      align="center"
      className={classes.title}
    >
      Edit {queryData.basket.name}

    </Typography>
      <EditBasketForm basket={queryData.basket}/>
    </div>
  )
}

export default EditBasket;