import React from 'react';
import { Redirect } from 'react-router-dom';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import GiftList from '../components/GiftList';

// Query here for all gifts in the app
const GET_FEED = gql`
  query {
    gifts {
      id,
      title,
      description,
      isPublic
    }
  }
`;

function Feed({ isLoggedIn }) {
  const { data, loading, error } = useQuery(GET_FEED);

  if (!isLoggedIn) {
    return <Redirect to="/" />;
  }

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error!</div>;

  const { gifts } = data;

  return (
    <div>
      <GiftList gifts={gifts} />
    </div>
  );
}

export default Feed;
