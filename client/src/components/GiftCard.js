import React from "react";
import { Typography, Link, Card, CardContent, CardActions } from "@material-ui/core";

function GiftCard(props) {
  return(
    <Card>
      <CardContent>
        <Typography variant="h4" >{props.gift.title ? props.gift.title : "No Title" }</Typography>
        <Typography variant="body2">{props.gift.description ? props.gift.description : "" }</Typography>
        <Typography variant="subtitle1">Status: {props.gift.isPublic ? "Public" : "Private" }</Typography>
      </CardContent>
      <CardActions>
        { props.gift.link ? <Link href={props.gift.link} target="_blank">See More</Link> : null }
      </CardActions>
    </Card>
  );
}

export default GiftCard;
