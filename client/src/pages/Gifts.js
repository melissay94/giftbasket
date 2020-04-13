import React from 'react';
import { Redirect } from 'react-router-dom';
import { useQuery, useApolloClient } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import { Typography, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import GiftList from '../components/GiftList';
import NewGiftModal from '../components/NewGiftModal';
import useModal from '../hooks/useModal';

const GET_GIFTS = gql`
  query currentUser{
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

function Gifts({ isLoggedIn }) {
  const client = useApolloClient();
  const { data, loading, error } = useQuery(GET_GIFTS);
  const { isShowing, toggleModal } = useModal();
  const classes = useStyles();

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
        className={classes.title}
      >
        Your Gifts
      </Typography>
      <Button
        className={classes.button}
        variant="contained"
        color="secondary"
        onClick={() => toggleModal(true)}>Add Gift</Button>
      <GiftList gifts={gifts} />
      <NewGiftModal toggleModal={toggleModal} isShowing={isShowing} />
    </div>
  );
}

export default Gifts;
