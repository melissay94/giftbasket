import React from 'react';
import { Card, CardContent, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: '100%',
    minHeight: 360,
    margin: theme.spacing(2),
  },
  mediaContainer: {
    display: 'flex',
    justifyContent: 'center',
  },
  media: {
    height: '180px',
  },
}));

function FunFactCard({ cardInfo }) {
  const classes = useStyles();

  return (
    <Card className={classes.root} elevation={3}>
      <CardContent>
        <div className={classes.mediaContainer}>
          <img
            className={classes.media}
            src={cardInfo.image}
            alt={cardInfo.imgTitle}
          />
        </div>
        <Typography gutterBottom variant="h5">
          {cardInfo.title}
        </Typography>
        <Typography variant="body2" color="textSecondary">
          {cardInfo.description}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default FunFactCard;
