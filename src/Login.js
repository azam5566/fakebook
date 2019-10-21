import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import Alert from 'react-bootstrap/Alert';

export class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userdetails: this.props.userdetails,
      isLoggedin: this.props.isLoggedin,
      username: '',
      srchresult: []
    };
  }

  onInputChange = input => {
    this.setState({ username: input });
  };

  onbuttonclick(username) {
    if (username) {
      const srchresult = this.state.userdetails.filter(
        user => user.login == this.state.username
      );
      if (srchresult.length != 0) {
        this.props.onSubmit({ isLoggedin: true, srchresult });
        // window.location = '/';
        //console.log(this.props.isLoggedin);
      } else {
        alert('no user found');
      }
    }
    //   if (this.state.username === this.state.srchresult.login) {
    //     console.log('success');

    //     window.Location = '/profile';
    //   }
    else {
      alert('please re-enter username');
    }
    //   console.log(this.state.srchresult);
  }

  render() {
    return this.props.isLoggedin == true ? (
      <Redirect
        to={{
          pathname: '/',
          state: { isLoggedin: this.props.isLoggedin }
        }}
      />
    ) : (
      <div>
        <Form>
          <Form.Group controlId='formBasicEmail'>
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type='text'
              placeholder='Enter Username'
              value={this.state.username}
              name='username'
              onChange={e => this.onInputChange(e.target.value)}
            />
          </Form.Group>
          <Button
            variant='primary'
            type='button'
            onClick={() => this.onbuttonclick(this.state.username)}
          >
            Submit
          </Button>
        </Form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    userdetails: state.UserDatabase,
    isLoggedin: state.isLoggedin
  };
};
const mapDispatchToProps = dispatch => {
  return {
    // dispatching plain actions
    onSubmit: login => {
      dispatch({ type: 'login', isLoggedin: login.isLoggedin, srchresult: login.srchresult });
    }
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
