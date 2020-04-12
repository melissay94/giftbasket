import React from 'react';
import {
  Typography, Link, Card, CardContent, CardActions,
} from '@material-ui/core';

function GiftCard({ gift }) {
  return (
    <Card>
      <CardContent>
        <Typography variant="h4">{gift.title ? gift.title : 'No Title' }</Typography>
        <Typography variant="body2">{gift.description ? gift.description : '' }</Typography>
        <Typography variant="subtitle1">
          Status:
          {' '}
          {gift.isPublic ? 'Public' : 'Private' }
        </Typography>
      </CardContent>
      <CardActions>
        { gift.link ? <Link href={gift.link} target="_blank">See More</Link> : null }
      </CardActions>
    </Card>
  );
}

export default GiftCard;
