import React, { Component } from 'react';
import { Card, Image } from 'semantic-ui-react';

class BookDetail extends Component {
    render() {
        const {
            book,
        } = this.props;
        
        return (
            <Card>
                <Image src={book.imgUrl} />
                <Card.Content>
                    <Card.Header align='center'>{book.title}</Card.Header>
                    <Card.Meta>{book.author}</Card.Meta>
                    <Card.Meta>{book.publisher}</Card.Meta>
                    <Card.Meta>{book.price}</Card.Meta>
                    <Card.Meta>{book.introduce}</Card.Meta>
                </Card.Content>
            </Card>
        )
    }
}

export default BookDetail;