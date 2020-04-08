import React from "react";
import { Card, CardContent, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: "100%",
    minHeight: 360,
    margin: theme.spacing(2)
  },
  mediaContainer: {
    display: "flex",
    justifyContent: "center"
  },
  media: {
    height: "180px"
  }
}));

function FunFactCard(props) {

  const classes = useStyles();

  return(
    <Card className={classes.root} elevation={3}>
      <CardContent>
      <div className={classes.mediaContainer}>
      <img
        className={classes.media}
        src={props.cardInfo.image}
        alt={props.cardInfo.imgTitle} /></div>
        <Typography gutterBottom variant="h5">
          {props.cardInfo.title}
        </Typography>
        <Typography variant="body2" color="textSecondary">
          {props.cardInfo.description}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default FunFactCard;
