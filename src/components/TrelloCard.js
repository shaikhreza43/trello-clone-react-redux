import { Card, CardContent, Typography } from '@material-ui/core';
import React from 'react';
import { Draggable } from 'react-beautiful-dnd';

const TrelloCard = ({ text, id, index }) => {

  return (
    <Draggable draggableId={String(id)} index={index}>

      {(provided) => (
        <div {...provided.draggableProps} ref={provided.innerRef} {...provided.dragHandleProps}>
          <Card style={styles.cardContainer}>
            <CardContent>
              <Typography variant="body2" component="p">
                {text}
              </Typography>
            </CardContent>
          </Card>
        </div>
      )}
    </Draggable>
  )
}


const styles = {
  cardContainer: {
    marginBottom: 10
  }
}

export default TrelloCard;