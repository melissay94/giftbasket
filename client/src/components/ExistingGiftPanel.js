import React from "react";
import { Typography} from "@material-ui/core";
import GiftList from "./GiftList";

function ExistingGiftsPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      aria-labelledby={"Existing Gifts list tab panel"}
      { ...other}>
      <Typography variant="h4">Current Saved Gifts</Typography>
        <GiftList gifts={[]} />
      </div>
  );
}

export default ExistingGiftsPanel;