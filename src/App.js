import './App.css';
import TrelloList from './components/TrelloList';
import { connect } from 'react-redux';
import TrelloActionButton from './components/TrelloActionButton';

import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import { sort } from './actions';

function App({ lists, dispatch }) {

  const onDragEnd = (result) => {
    //Reordering Logic 
    const { destination, source, draggableId,type } = result;

    if (!destination) {
      return;
    }

    dispatch(sort(source.droppableId, destination.droppableId, source.index, destination.index, draggableId,type));

  }

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable type="list" direction="horizontal" droppableId="all-list">
        {(provided) => (
          <div className="App">
            <div style={styles.listContainer} {...provided.droppableProps} ref={provided.innerRef}>
              {lists.map((list,index) => <TrelloList listId={list.id} key={list.id} title={list.title} cards={list.cards} index={index} />)}
              <TrelloActionButton list />
            </div>
          </div>
        )}

      </Droppable>
    </DragDropContext>
  );
}

const styles = {
  listContainer: {
    display: "flex",
  }
}

const mapStateToProps = state => ({
  lists: state.lists
})

export default connect(mapStateToProps)(App);
