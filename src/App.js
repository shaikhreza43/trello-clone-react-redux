import './App.css';
import TrelloList from './components/TrelloList';
import { connect } from 'react-redux';
import TrelloActionButton from './components/TrelloActionButton';

import {DragDropContext} from 'react-beautiful-dnd';

function App({ lists }) {

  const onDragEnd = ()=>{

  }

  return (
    <DragDropContext onDragEnd={onDragEnd}>
    <div className="App">
      <div style={styles.listContainer}>
        {lists.map(list => <TrelloList listId={list.id} key={list.id} title={list.title} cards={list.cards} />)}
        <TrelloActionButton list/>
      </div>
    </div>
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
