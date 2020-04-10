import React from "react";
import { Typography} from "@material-ui/core";
import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";
import GiftList from "./GiftList";

const GET_GIFTS = gql`
  query {
    currentUser {
      gifts {
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
        { data ? <GiftList gifts={data.currentUser.gifts} /> : null }
      </div>
  );
}

export default ExistingGiftsPanel;