import React from 'react';
import { Redirect, Link } from 'react-router-dom';
import { useMutation } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import { Typography, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import AddGiftModal from './AddGiftModal';
import useModal from '../hooks/useModal';

// Basket delete call needed
const DELETE_BASKET = gql`
mutation deleteBasket($id: Int!) {
  deleteBasket(id: $id)
}`;

const CREATE_GIFT = gql`
mutation createGift($basketId: Int, $title: String!, $description: String, $link: String, $isPublic: Boolean!) {
  createGift(basketId: $basketId, title: $title, description: $description, link: $link, isPublic: $isPublic) {
    id
  }
}`;

const ADD_GIFT = gql`
mutation addGiftToBasket($basketId: Int!, $giftId: Int!) {
  addGiftToBasket(basketId: $basketId, giftId: $giftId) {
    id,
    name,
  }
}`;

const useStyles = makeStyles((theme) => ({
  title: {
    margin: theme.spacing(5),
  },
  info: {
    marginLeft: theme.spacing(5),
    marginBottom: theme.spacing(2)
  },
  buttons: {
    width: '50%',
    marginLeft: theme.spacing(4),
    marginRight: theme.spacing(12),
    display: "flex",
    justifyContent: "space-between"
  }
}));

function BasketHeader({ basket }) {
  const [deleteBasket, { data: deleteData, loading: deleteLoading, error: deleteError }] = useMutation(DELETE_BASKET);
  const [createGift, { loading: giftLoading, error: giftError}] = useMutation(CREATE_GIFT, { refetchQueries: ['basket'] });
  const [addGift, { loading: isAddedLoading, error: isAddedError}] = useMutation(ADD_GIFT, { refetchQueries: ['basket'] });

  const { isShowing, toggleModal } = useModal();
  const classes = useStyles();

  const existingGiftIds = basket.gifts.map(gift => {
    return gift.id;
  });

  const parseDate = (date) => {
    const convertDate = new Date(Date.parse(date));
    const dateTimeArray = convertDate.toString().split(' ');
    const dateString = `${dateTimeArray[1]} ${dateTimeArray[2]}, ${dateTimeArray[3]}`;
    return dateString;
  };

  const handleDeleteBasket = e => {
    e.preventDefault();
    
    deleteBasket({ variables: { id: basket.id }});
  }

  const handleCreateGift = newGift => {
    createGift({ variables: { 
      basketId: basket.id,
      title: newGift.title,
      description: newGift.description,
      link: newGift.link,
      isPublic: newGift.isPublic === 'true' ? true : false 
    }});
    toggleModal(false);
  }

  const toggleExistingGiftIds = (e, giftId) => {
    addGift({variables: {
      giftId: giftId,
      basketId: basket.id
    }});
    toggleModal(false);
  }

  if (deleteLoading || giftLoading || isAddedLoading) return <div>Loading...</div>;
  if (deleteError || giftError || isAddedError) return <div>Error!</div>;

  if(deleteData) return <Redirect to="/home" />

  return (
    <div>
      <div>
        <Typography variant="h2" className={classes.title}>
          {basket.name ? basket.name : 'No name'}
        </Typography>
        <div className={classes.info}>
        <Typography variant="body2">
          {basket.birthdate ? parseDate(basket.birthdate) : 'No birthdate'}
        </Typography>
        <Typography variant="body2">
          {basket.address ? basket.address : 'No address'}
        </Typography></div>
      </div>
      <div className={classes.buttons}>
      <Button 
        variant="contained"
        color="secondary"
        onClick={() => toggleModal(true)}>Add Gift</Button>
      <Link
        variant="contained"
        color="secondary"
        component={Button}
        to={`/basket/${basket.id ? basket.id : ''}/edit`}
      >
        Edit

      </Link>
      <Button
        variant="contained"
        color="secondary" 
        onClick={e => handleDeleteBasket(e)}>Delete</Button>
      </div>
      <AddGiftModal
        toggleModal={toggleModal}
        isShowing={isShowing}
        addGift={handleCreateGift}
        existingGiftIds={existingGiftIds}
        toggleExistingGiftIds={toggleExistingGiftIds} />
    </div>
  );
}

export default BasketHeader;
