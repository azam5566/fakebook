import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

class Myinfocard extends Component {
  render() {
    return (
      <div className='myinfocard'>
        <Card>
          <Button variant='primary' className='profilebtn'>
            My Posts
          </Button>
          <Button variant='primary' className='profilebtn'>
            My Friends
          </Button>
          <Button variant='primary' className='profilebtn'>
            My Account
          </Button>
          <Button variant='primary' className='profilebtn'>
            Settings
          </Button>
        </Card>
      </div>
    );
  }
}

export default Myinfocard;
