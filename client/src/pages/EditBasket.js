import React from 'react';
import { Redirect, useParams } from 'react-router-dom';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';
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

function EditBasket({ isLoggedIn }) {

  const { id } = useParams();

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
      <EditBasketForm basket={queryData.basket}/>
    </div>
  )
}

export default EditBasket;