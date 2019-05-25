import React, { Component } from 'react';
import { Item } from 'semantic-ui-react';

import BookListItem from './BookListItem';

class BookList extends Component {
    render() {
        const {
            books,
            onBookSelect,
        } = this.props;

        const bookListItem = books.map(book => {
            return (
                <BookListItem onBookSelect={onBookSelect}
                              key={book.ISBN}
                              book={book} />
            );
        })

        return (
            <Item.Group divided link>
                {bookListItem}
            </Item.Group>
        )
    }
}

export default BookList;