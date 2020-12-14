import React from 'react';
import TrelloActionButton from './TrelloActionButton';
import TrelloCard from './TrelloCard';
import { Droppable, Draggable } from 'react-beautiful-dnd';

const TrelloList = ({ title, cards, listId, index }) => {

    return (
        <Draggable draggableId={String(listId)} index={index}>
            {(provided) => (
                <div {...provided.draggableProps} ref={provided.innerRef} style={styles.container} {...provided.dragHandleProps}>
                    <Droppable droppableId={String(listId)}>
                        {(provided) => (
                            <div {...provided.droppableProps} ref={provided.innerRef}>
                                <h4>{title}</h4>
                                {cards.map((card, index) => <TrelloCard key={card.id} index={index} text={card.text} id={card.id} />)}
                                <TrelloActionButton listId={listId} />
                                {provided.placeholder}
                            </div>
                        )}

                    </Droppable>
                </div>

            )}
        </Draggable>
    )
}

const styles = {
    container: {
        backgroundColor: '#dfe3e6',
        borderRadius: 3,
        width: 300,
        padding: 8,
        marginRight: 8,
        height: '100%'
    }
}

export default TrelloList;