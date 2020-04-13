import React from 'react';
import { useMutation } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import {
  Typography, Link, Card, CardContent, CardActions, Button
} from '@material-ui/core';
import EditGiftModal from "./EditGiftModal";
import useModal from '../hooks/useModal';

const DELETE_GIFT = gql`
  mutation deleteGift($id: Int!) {
    deleteGift(id: $id)
  }`;

function GiftCard({ gift, isNewBasketFlow }) {
  const { isShowing, toggleModal } = useModal();
  const [deleteGift, { data, loading, error }] = useMutation(DELETE_GIFT, { refetchQueries: ['basket'] } );

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error!</div>;
  
  const handleDeleteGift = () => {
    deleteGift({ variables: { id: gift.id } });
  }

  return (
    <Card>
      <CardContent>
        <Typography variant="h4">{gift.title ? gift.title : 'No Title' }</Typography>
        <Typography variant="body2">{gift.description ? gift.description : '' }</Typography>
        <Typography variant="subtitle1">
          Status:
          {' '}
          {gift.isPublic ? 'Public' : 'Private' }
        </Typography>
      </CardContent>
      <CardActions>
        { gift.link ? <Link href={gift.link} target="_blank">See Product</Link> : null }

        { !isNewBasketFlow ? 
          <div>
            <Button onClick={() => toggleModal(true)}>Edit Gift</Button>
            <Button>Remove Gift</Button>
            <Button onClick={() => handleDeleteGift()}>Delete Gift</Button>
          </div>
        : null
      }
      </CardActions>
        <EditGiftModal gift={gift} isShowing={isShowing} toggleModal={toggleModal} />
    </Card>
  );
}

export default GiftCard;
