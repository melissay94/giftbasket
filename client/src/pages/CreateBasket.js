import 'date-fns';
import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { useMutation } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import {
  TextField, Typography, Button, Grid, Fab,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import AddIcon from '@material-ui/icons/Add';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';
import GiftList from '../components/GiftList';
import AddGiftModal from '../components/AddGiftModal';
import useModal from '../hooks/useModal';

const useStyles = makeStyles(() => ({
  title: {
    marginTop: '1em',
  },
  submit: {
    margin: '1em 0 5em 0',
  },
  addGift: {
    marginTop: '1em',
  },
}));

const CREATE_BASKET = gql`
  mutation createBasket($name: String!, $birthdate: String, $address: String, $gifts: [CreateGiftInput!]!, $existingGiftIds: [ID!]!) {
    createBasket(name: $name, birthdate: $birthdate, address: $address, gifts: $gifts, existingGiftIds: $existingGiftIds) {
      id,
      name,
      birthdate,
      gifts {
        title,
        description,
        isPublic
      }
    }
  }`;

function CreateBaskets({ isLoggedIn }) {
  const [name, setName] = useState('');
  const [birthdate, setBirthdate] = useState(new Date());
  const [address, setAddress] = useState('');
  const [gifts, setGifts] = useState([]);
  const [existingGiftIds, setExistingGiftIds] = useState([]);
  const classes = useStyles();
  const { isShowing, toggleModal } = useModal();

  const [createBasket, { data }] = useMutation(CREATE_BASKET);

  const handleSubmitBasket = (e) => {
    e.preventDefault();
    if (name.length < 1) {
      return;
    }


    createBasket({
      variables: {
        name, birthdate, address, gifts, existingGiftIds,
      },
    });
  };

  const addGift = (newGift) => {
    setGifts([
      ...gifts,
      newGift,
    ]);
  };

  const toggleExistingGiftIds = (event, index) => {
    if (existingGiftIds.includes(index)) {
      const indexOf = existingGiftIds.indexOf(index);
      setExistingGiftIds(
        existingGiftIds.slice(0, indexOf).concat(
          existingGiftIds.slice(indexOf + 1),
        ),
      );
    } else {
      setExistingGiftIds([
        ...existingGiftIds,
        index,
      ]);
    }
  };

  if (!isLoggedIn) return <Redirect to="/" />;

  if (data) return <Redirect to={`/basket/${data.createBasket.id}`} />;

  return (
    <div>
      <Typography variant="h2" align="center" className={classes.title}> Create a Basket</Typography>
      <form onSubmit={(e) => handleSubmitBasket(e)}>
        <Grid container justify="space-around">
          <TextField
            variant="outlined"
            label="Name"
            color="secondary"
            margin="normal"
            value={name}
            className="basket-text-field"
            onChange={(e) => setName(e.target.value)}
          />
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardDatePicker
              variant="inline"
              inputVariant="outlined"
              color="secondary"
              format="MM/dd/yyyy"
              margin="normal"
              label="Birthdate"
              value={birthdate}
              onChange={setBirthdate}
              className="basket-text-field"
              KeyboardButtonProps={{
                'aria-label': 'change date',
              }}
            />
          </MuiPickersUtilsProvider>
          <TextField
            variant="outlined"
            label="Address"
            color="secondary"
            margin="normal"
            className="basket-text-field"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
          <div
            className="basket-text-field"
          >
            <Fab
              className={classes.addGift}
              variant="extended"
              type="button"
              color="secondary"
              onClick={() => toggleModal(true)}
            >
              <AddIcon />
              Add Gift
            </Fab>
          </div>
          <div className="basket-text-field">
            <GiftList gifts={gifts} isNewBasketFlow={true} />
          </div>
          <div className="basket-text-field">
            <Button
              type="submit"
              className={classes.submit}
              fullWidth
              variant="contained"
              color="secondary"
            >
              Create Basket!
            </Button>
          </div>
        </Grid>
      </form>
      <AddGiftModal
        toggleModal={toggleModal}
        isShowing={isShowing}
        addGift={addGift}
        existingGiftIds={existingGiftIds}
        toggleExistingGiftIds={toggleExistingGiftIds}
      />
    </div>
  );
}

export default CreateBaskets;
