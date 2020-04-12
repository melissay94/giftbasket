import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { List, ListItem, ListItemText, ListItemIcon, Divider } from "@material-ui/core";
import CheckIcon from "@material-ui/icons/Check";

function SelectGiftList(props) {

  return(
    <List>
      {props.gifts.map((gift, index) => (
        <ListItem
          button
          selected={props.existingGiftIds.includes(gift.id)}
          onClick={e => props.toggleExistingGiftIds(e, gift.id)}
          key={index}
          >
            <ListItemIcon>
              <CheckIcon />
            </ListItemIcon>
            <ListItemText 
              primary={gift.title}
              secondary={gift.description} />
          </ListItem>
      ))}
    </List>
  )
}

export default SelectGiftList;