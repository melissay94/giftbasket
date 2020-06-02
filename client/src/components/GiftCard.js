import React from 'react';
import { useParams, Link as RouterLink } from 'react-router-dom';
import { useMutation } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import {
  Typography, 
  Link, 
  Card, 
  CardContent, 
  CardActions, 
  Button
} from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";
import EditGiftModal from "./EditGiftModal";
import useModal from '../hooks/useModal';

const DELETE_GIFT = gql`
  mutation deleteGift($id: Int!) {
    deleteGift(id: $id)
  }`;

const REMOVE_GIFT = gql`
  mutation removeGiftFromBasket($giftId: Int!, $basketId: Int!) {
    removeGiftFromBasket(giftId: $giftId, basketId: $basketId)
  }`;

const ADD_GIFT = gql`
mutation addGiftToUser($id: Int!) {
  addGiftToUser(id: $id) {
    id,
    name,
  }
}
`;

const useStyles = makeStyles(theme => ({
  card: {
    margin: '1em'
  }
}));

function GiftCard({ gift, isNewBasketFlow, isExistingBasketFlow }) {
  const { isShowing, toggleModal } = useModal();
  const { id } = useParams();
  const [deleteGift, { data, loading, error }] = useMutation(DELETE_GIFT, { refetchQueries: ['basket'] } );
  const [removeGift, { }] = useMutation(REMOVE_GIFT, { refetchQueries: ['basket'] });
  const [addGift, { }] = useMutation(ADD_GIFT);
  const classes = useStyles();

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error!</div>;
  
  const handleDeleteGift = () => {
    deleteGift({ variables: { id: gift.id } });
  }

  const handleRemoveGift = () => {
    removeGift({ variables: { giftId: gift.id, basketId: id } });
  }

  const handleAddGift = () => {
    addGift({ variables: { id: gift.id } });
  }

  return (
    <Card elevation={3} className={classes.card}>
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
        { gift.link ? <RouterLink 
          size="small"
          color="secondary"
          component={Link}
          to={gift.link} target="_blank">
            See Product
          </RouterLink> : null }

        { !isNewBasketFlow && !gift.isPublic ? 
          <div>
            <Button
              size="small"
              color="secondary" 
              onClick={() => toggleModal(true)}>Edit Gift</Button>
            {
              isExistingBasketFlow ? 
              <Button 
              size="small"
              color="secondary"
              onClick={() => handleRemoveGift()}>Remove Gift</Button>
              : <Button 
              size="small"
              color="secondary"
              onClick={() => handleDeleteGift()}>Delete Gift</Button>
            }
          </div>
        : <Button 
        size="small"
        color="secondary"
        onClick={() => handleAddGift()}>Add</Button>
      }
      </CardActions>
        <EditGiftModal gift={gift} isShowing={isShowing} toggleModal={toggleModal} />
    </Card>
  );
}

export default GiftCard;
