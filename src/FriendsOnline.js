import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

export class FriendsOnline extends Component {
  render() {
    return (
      <div className='friendscard'>
        <Card>
          <Card.Header className='friendsonline_card_header'>
            Friends Online
          </Card.Header>
          <ListGroup variant='flush'>
            <ListGroup.Item>Cras justo odio</ListGroup.Item>
            <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
            <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
          </ListGroup>
        </Card>
      </div>
    );
  }
}

export default FriendsOnline;
