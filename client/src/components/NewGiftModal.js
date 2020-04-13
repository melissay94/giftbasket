import React, { useState } from 'react';
import { useMutation } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import {
  Modal, Backdrop, Fade, Typography,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import NewGiftForm from './NewGiftForm';

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    borderRadius: '5px',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  title: {
    textAlign: 'center',
  },
}));

const CREATE_GIFT = gql`
mutation createGift($title: String!, $description: String, $link: String, $isPublic: Boolean!) {
  createGift(title: $title, description: $description, link: $link, isPublic: $isPublic) {
    id
  }
}`;

function AddGiftModal({
  isShowing,
  toggleModal,
}) {
  const classes = useStyles();
  const [createGift, { data }] = useMutation(CREATE_GIFT, { refetchQueries: ['currentUser'] });

  const addGift = (newGift) => {
    createGift({ variables: {
      title: newGift.title,
      description: newGift.description,
      link: newGift.link,
      isPublic: newGift.isPublic
    }});
  }

  return (
    <Modal
      aria-labelledby="create gift modal"
      aria-describedby="A modal for creating a new gift"
      className={classes.modal}
      open={isShowing}
      onClose={() => toggleModal(false)}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{ timeout: 500 }}
    >
      <Fade in={isShowing}>
        <div className={`${classes.paper} no-outline`}>
          <Typography variant="h4">New Gift</Typography>
          <NewGiftForm addGift={addGift} toggleModal={toggleModal} />
        </div>
      </Fade>
    </Modal>
  );
}

export default AddGiftModal;
