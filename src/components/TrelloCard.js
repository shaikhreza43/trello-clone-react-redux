import { Card, CardContent, Typography } from '@material-ui/core';
import React from 'react';

const TrelloCard = ({ text }) => {

  return (
    <Card style={styles.cardContainer}>
      <CardContent>
        <Typography variant="body2" component="p">
          {text}
        </Typography>
      </CardContent>
    </Card>
  )
}


const styles = {
  cardContainer:{
    marginBottom:10
  }
}

export default TrelloCard;