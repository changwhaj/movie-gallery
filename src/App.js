import React, { Component } from 'react';
// import './App.css';
import { Grid, Segment } from 'semantic-ui-react';

import Books from './Books';
import SearchBar from './components/SearchBar';
import BookList from './components/BookList';
import BookDetail from './components/BookDetail';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      books : Books,
      selectedBook : Books[0],
    }
  }

  onBookSelect(book) {
    this.setState({
      selectedBook : book,
    })
  }

  searchByTitle(title) {
    let updateList = Books;
    updateList = updateList.filter(book => {
      return book.title.toLowerCase().search(title.toLowerCase()) !== -1;
    });

    this.setState({
      books : updateList,
    })
  }

  render() {
    return (
      <div className='App'>
        <Segment>
          <SearchBar onSearchByTitle={this.searchByTitle.bind(this)} />
        </Segment>
        <Segment>
        <Grid columns={2} divided>
          <Grid.Column>
              <BookList onBookSelect={this.onBookSelect.bind(this)}
                        books={this.state.books}
              />
          </Grid.Column>
          <Grid.Column>
            <BookDetail book={this.state.selectedBook} />
          </Grid.Column>
        </Grid>
        </Segment>
      </div>
    )
  };
}

export default App;
