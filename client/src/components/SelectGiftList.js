import React from 'react';
import {
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
} from '@material-ui/core';
import CheckIcon from '@material-ui/icons/Check';

function SelectGiftList({ gifts, existingGiftIds, toggleExistingGiftIds }) {
  return (
    <List>
      {gifts.map((gift) => (
        <ListItem
          button
          selected={existingGiftIds.includes(gift.id)}
          onClick={(e) => toggleExistingGiftIds(e, gift.id)}
          key={gift.id}
        >
          <ListItemIcon>
            <CheckIcon />
          </ListItemIcon>
          <ListItemText
            primary={gift.title}
            secondary={gift.description}
          />
        </ListItem>
      ))}
    </List>
  );
}

export default SelectGiftList;
