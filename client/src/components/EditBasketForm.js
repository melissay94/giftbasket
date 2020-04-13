
import React, { useState } from 'react';
import {
  TextField, Typography, Button, Grid
} from '@material-ui/core';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';
import { useMutation } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import { Redirect } from 'react-router-dom';

const UPDATE_BASKET = gql`
mutation editBasket($id: Int!, $name: String, $birthdate: String, $address: String) {
  editBasket(id: $id, name: $name, birthdate: $birthdate, address: $address) {
    id, 
    name
  }
}`;

function EditBasketForm({ basket }) {
  const [name, setName] = useState(basket.name);
  const [birthdate, setBirthdate] = useState(basket.birthdate);
  const [address, setAddress] = useState(basket.address);

  const [editBasket, { data, loading, error }] = useMutation(UPDATE_BASKET);

  const handleSubmitBasket = e => {
    e.preventDefault();
    editBasket({ variables: { id: basket.id, name, birthdate, address } });
  }

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error!</div>;
  
  if (data) return <Redirect to={`/basket/${data.editBasket.id}`} />

  return(
    <form onSubmit={(e) => handleSubmitBasket(e)}>
      <Grid container justify="space-around">
        <TextField
          variant="outlined"
          label="Name"
          color="secondary"
          margin="normal"
          value={name}
          className="basket-text-field"
          onChange={e => setName(e.target.value)}
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
          onChange={(e) => setAddress(e.target.value) }
        />
        <Button 
          variant="contained"
          type="submit"
          color="secondary">
            Update Basket
          </Button>
        </Grid>
      </form>
    )
}

export default EditBasketForm;