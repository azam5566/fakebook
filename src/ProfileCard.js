import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import './main.css';
import { connect } from 'react-redux';

export class ProfileCard extends Component {
  onClickHandler() {
    window.location = '/profile';
  }

  render() {
      console.log(this.props.userloggedin);
      
    return (
      <div className='profilecard'>
        <Card>
          <Card.Header
            className='friendsonline_card_header'
            onClick={() => this.onClickHandler()}
          >
            <Card.Text variant='primary' className='profiletext'>
              My Profile
            </Card.Text>
          </Card.Header>
          <Card.Body>
            <Card.Img
              className='cardimage'
              variant='top'
                        src={ this.props.userloggedin[0].avatar_url}
            />
            <Card.Title>{this.props.userloggedin[0].login}</Card.Title>
            <Button variant='primary' onClick={() => this.onClickHandler()}>
              Go To Profile
            </Button>
          </Card.Body>
        </Card>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    userdetails: state.UserDatabase
  };
};
export default connect(
  mapStateToProps,
  null
)(ProfileCard);
