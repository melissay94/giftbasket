import React, { useState } from 'react';
import { useMutation } from '@apollo/react-hooks';
import gql from "graphql-tag";
import {
  TextField, Radio, RadioGroup, FormControlLabel, FormControl, FormLabel, Grid, Button,
} from '@material-ui/core';

const EDIT_GIFT = gql`
  mutation editGift($id: Int!, $title: String, $description: String, $link: String, $isPublic: Boolean!) {
    editGift(id: $id, title: $title, description: $description, link: $link, isPublic: $isPublic) {
      id,
      title
    }
  }`;

function NewGiftForm({ gift, toggleModal }) {
  const [title, setTitle] = useState(gift.title);
  const [description, setDescription] = useState(gift.description);
  const [link, setLink] = useState(gift.link);
  const [isPublic, setIsPublic] = useState(gift.isPublic ? 'true' : 'false');

  const [editGift, { data, loading, error }] = useMutation(EDIT_GIFT);

  const handleRadio = (e) => {
    setIsPublic(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(title);
    editGift({ variables: { id: gift.id, 
      title, 
      description, 
      link, 
      isPublic: isPublic === "true" ? true : false
     } });
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error!</div>;
  if (data) {
    toggleModal(false);
  }

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <TextField
        variant="outlined"
        label="Title"
        color="secondary"
        fullWidth
        margin="normal"
        value={title}
        className="basket-text-field"
        onChange={(e) => setTitle(e.target.value)}
      />
      <TextField
        variant="outlined"
        label="Description"
        color="secondary"
        fullWidth
        margin="normal"
        value={description}
        className="basket-text-field"
        onChange={(e) => setDescription(e.target.value)}
      />
      <TextField
        variant="outlined"
        label="Link"
        color="secondary"
        fullWidth
        margin="normal"
        value={link}
        className="basket-text-field"
        onChange={(e) => setLink(e.target.value)}
      />
      <FormControl component="fieldset">
        <FormLabel component="legend" color="secondary">Share This Gift?</FormLabel>
        <RadioGroup aria-label="Share This Gift" name="shareGift" value={isPublic} onChange={handleRadio}>
          <FormControlLabel value="true" control={<Radio />} label="Share it!" />
          <FormControlLabel value="false" control={<Radio />} label="Keep it Private" />
        </RadioGroup>
      </FormControl>
      <Grid container>
        <Grid item xs={5} md={6} lg={7} />
        <Grid item xs={7} md={6} lg={5}>
          <Button
            type="submit"
            variant="contained"
            fullWidth
            color="secondary"
          >
            Edit Gift
          </Button>
        </Grid>
      </Grid>
    </form>
  );
}

export default NewGiftForm;
