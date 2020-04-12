import React from 'react';
import { Typography } from '@material-ui/core';
import NewGiftForm from './NewGiftForm';

function NewGiftPanel({
  children,
  value,
  index,
  addGift,
  toggleModal,
  ...other
}) {
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      aria-labelledby="New gift form tab panel"
      {...other}
    >
      <Typography variant="h4">Create a New Gift</Typography>
      <NewGiftForm addGift={addGift} toggleModal={toggleModal} />
    </div>
  );
}

export default NewGiftPanel;
