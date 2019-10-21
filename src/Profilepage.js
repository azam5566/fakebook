import React, { Component } from 'react';
import { Navbar } from 'react-bootstrap';
import Nabar from './Navigationbar';
import ProfileCard from './ProfileCard';
import FriendsOnline from './FriendsOnline';
import Myinfocard from './Myinfocard';

class Profilepage extends Component {
  render() {
    return (
      <div>
        <Nabar />
        <Myinfocard />
        <FriendsOnline />
      </div>
    );
  }
}

export default Profilepage;
