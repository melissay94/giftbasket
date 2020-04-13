import React from 'react';
import { Redirect } from 'react-router-dom';
import { useMutation } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import { Typography, Button } from '@material-ui/core';
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


function BasketHeader({ basket }) {
  const [deleteBasket, { data: deleteData, loading: deleteLoading, error: deleteError }] = useMutation(DELETE_BASKET);
  const [createGift, { loading: giftLoading, error: giftError}] = useMutation(CREATE_GIFT, { refetchQueries: ['basket'] });
  const [addGift, { loading: isAddedLoading, error: isAddedError}] = useMutation(ADD_GIFT, { refetchQueries: ['basket'] });

  const { isShowing, toggleModal } = useModal();

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
        <Typography variant="h2">
          {basket.name ? basket.name : 'No name'}
        </Typography>
        <Typography variant="body2">
          {basket.birthdate ? parseDate(basket.birthdate) : 'No birthdate'}
        </Typography>
      </div>
      <Button onClick={() => toggleModal(true)}>Add Gift</Button>
      <Button
        color="secondary"
        href={`/basket/${basket.id ? basket.id : ''}/edit`}
      >
        Edit

      </Button>
      <Button color="secondary" onClick={e => handleDeleteBasket(e)}>Delete</Button>
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
