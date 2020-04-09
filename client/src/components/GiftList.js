import React from "react";
import { Grid } from "@material-ui/core";
import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";
import GiftCard from "./GiftCard";

const GET_GIFTS = gql`
  query {
    getCurrentUser {
      gifts {
        title, 
        description,
        link
      }
    }
  }`;

function GiftList(props) {

  const { data, loading, error } = useQuery(GET_GIFTS);

  if (loading) return <div>Loading...</div>
  if (error) return <div>Error!</div>

  return (
    <Grid container>{
      data.getCurrentUser.gifts.length > 0 ? props.gifts.map((item, index) => (
        <Grid item xs={6} md={4} lg={3} key={index}>
          <GiftCard gift={item} />
        </Grid>
      )) : <div>No Gifts Added Yet.</div>
      }
    </Grid>
  );
}

export default GiftList;