import React, { Component } from 'react';
import Navbar from './Navigationbar';
import ProfileCard from './ProfileCard';
import FriendsOnline from './FriendsOnline';
import { Redirect } from 'react-router';
import { connect } from 'react-redux';

export class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userdetails: this.props.userdetails
    };
  }

  render() {
    return this.props.isLoggedin == false ? (
      <Redirect
        to={{
          pathname: '/login'
        }}
      />
    ) : (
      <div>
        <Navbar />
        <ProfileCard  userloggedin={this.props.searcheduser}/>
        <FriendsOnline />
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    userdetails: state.UserDatabase,
      searcheduser: state.searcheduser,
    isLoggedin: state.isLoggedin
  };
};
export default connect(
  mapStateToProps,
  null
)(Home);
