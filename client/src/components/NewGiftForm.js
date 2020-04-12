import React, { useState } from 'react';
import {
  TextField, Radio, RadioGroup, FormControlLabel, FormControl, FormLabel, Grid, Button,
} from '@material-ui/core';

function NewGiftForm(props) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [link, setLink] = useState('');
  const [isPublic, setIsPublic] = useState('false');

  const handleRadio = (e) => {
    setIsPublic(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newGift = {
      title,
      description,
      link,
      isPublic: isPublic == 'true',
    };

    props.addGift(newGift);
    props.toggleModal(false);
  };

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
            Add Gift
          </Button>
        </Grid>
      </Grid>
    </form>
  );
}

export default NewGiftForm;
