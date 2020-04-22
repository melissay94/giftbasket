import React from 'react';
import { Link } from 'react-router-dom';
import {
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: '100%',
    minHeight: 180,
    margin: theme.spacing(2),
  },
}));

function BasketCard({ basket }) {
  const classes = useStyles();

  const parseDate = (date) => {
    const convertDate = new Date(Date.parse(date));
    const dateTimeArray = convertDate.toString().split(' ');
    const dateString = `${dateTimeArray[1]} ${dateTimeArray[2]}, ${dateTimeArray[3]}`;
    return dateString;
  };

  return (
    <Card className={classes.root} elevation={3}>
      <CardContent>
        <Typography gutterBottom variant="h5">
          {basket.name ? basket.name : 'Empty Basket'}
        </Typography>
        <Typography variant="body2">
          {basket.birthdate ? parseDate(basket.birthdate) : 'Empty Birthdate'}
        </Typography>
      </CardContent>
      <CardActions>
        <Link
          size="small"
          color="secondary"
          component={Button}
          to={`/basket/${basket.id ? basket.id : ''}`}
        >
          See More
        </Link>
      </CardActions>
    </Card>
  );
}

export default BasketCard;
