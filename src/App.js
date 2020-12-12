import './App.css';
import TrelloList from './components/TrelloList';
import { connect } from 'react-redux';
import TrelloActionButton from './components/TrelloActionButton';

function App({ lists }) {
  return (
    <div className="App">
      <div style={styles.listContainer}>
        {lists.map(list => <TrelloList key={list.id} title={list.title} cards={list.cards} />)}
        <TrelloActionButton list/>
      </div>
    </div>
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
