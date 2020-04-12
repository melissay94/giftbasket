import React from "react";
import { Typography} from "@material-ui/core";
import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";
import SelectGiftList from "./SelectGiftList";

const GET_GIFTS = gql`
  query {
    currentUser {
      gifts {
        id,
        title, 
        description,
        link
      }
    }
  }`;

function ExistingGiftsPanel(props) {
  const { children, value, index, ...other } = props;

  const { data, loading, error } = useQuery(GET_GIFTS);

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      aria-labelledby={"Existing Gifts list tab panel"}
      { ...other}>
      <Typography variant="h4">Current Saved Gifts</Typography>
        { error ? <div>Error!</div> : null }
        { loading ? <div>Loading...</div> : null }
        { data ? <SelectGiftList 
              gifts={data.currentUser.gifts} 
              toggleExistingGiftIds={props.toggleExistingGiftIds}
              existingGiftIds={props.existingGiftIds} /> : null }
      </div>
  );
}

export default ExistingGiftsPanel;