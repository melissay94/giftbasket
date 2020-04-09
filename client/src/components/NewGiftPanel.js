import React from "react";
import { Typography} from "@material-ui/core";
import NewGiftForm from "./NewGiftForm";

function NewGiftPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      aria-labelledby={"New gift form tab panel"}
      { ...other}>
        <Typography variant="h4">Create a New Gift</Typography>
        <NewGiftForm addGift={props.addGift} toggleModal={props.toggleModal} />
      </div>
  );
}

export default NewGiftPanel;