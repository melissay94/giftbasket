import React from 'react';
import { Redirect } from 'react-router-dom';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import GiftList from '../components/GiftList';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

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

const useStyles = makeStyles((theme) => ({
  title: {
    margin: theme.spacing(5),
  },
  button: {
    margin: '0 auto',
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(5),
    display: 'block',
    width: '65%',
  },
}));

function Feed({ isLoggedIn }) {
  const { data, loading, error } = useQuery(GET_FEED);
  const classes = useStyles();

  if (!isLoggedIn) {
    return <Redirect to="/" />;
  }

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error!</div>;

  const { gifts } = data;

  return (
    <div>
    <Typography
      variant="h2"
      align="center"
      className={classes.title}
    >
      Discover Other Gifts!
    </Typography>
      <GiftList gifts={gifts} />
    </div>
  );
}

export default Feed;
