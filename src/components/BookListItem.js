import React, { Component } from 'react';
import { Item } from 'semantic-ui-react';

class BookListItem extends Component {
    render() {
        const {
            book,
            onBookSelect,
        } = this.props;

        return (
            <Item onClick = {() => onBookSelect(book)}>
                <Item.Image size='tiny' src={book.imgUrl} />
                <Item.Content verticalAlign='middle'>
                    <Item.Header>
                        {book.title}
                    </Item.Header>
                    <Item.Meta>
                        ${book.price}
                    </Item.Meta>
                    <Item.Description>
                        {book.author}
                    </Item.Description>
                </Item.Content>
            </Item>
        )
    }
}

export default BookListItem;