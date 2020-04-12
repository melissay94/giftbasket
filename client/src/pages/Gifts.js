import React from 'react';
import { Redirect } from 'react-router-dom';
import { useQuery, useApolloClient } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import { Typography } from '@material-ui/core';
import GiftList from '../components/GiftList';

const GET_GIFTS = gql`
  query {
    currentUser {
      gifts {
        id, 
        title,
        description,
        link,
        isPublic
      }
    }
  }
`;

function Gifts({ isLoggedIn }) {
  const client = useApolloClient();
  const { data, loading, error } = useQuery(GET_GIFTS);

  if (!isLoggedIn) {
    return <Redirect to="/" />;
  }

  if (loading) return <div>Loading...</div>;
  if (error) {
    client.clearStore();
    client.writeData({ data: { isLoggedIn: false } });
    localStorage.removeItem('token');
    return <div>Error!</div>;
  }

  const { gifts } = data.currentUser;

  return (
    <div>
      <Typography
        variant="h2"
        align="center"
      >
        Your Gifts
      </Typography>
      <GiftList gifts={gifts} />
    </div>
  );
}

export default Gifts;
