import React, { Component } from 'react';
import Navbar from './Navigationbar';
import ProfileCard from './ProfileCard';
import FriendsOnline from './FriendsOnline';
import Profilepage from './Profilepage';
import Home from './Home';
import Login from './Login';
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';

export class App extends Component {
  render() {
    return (
      <div>
        <Provider store={store}>
          <BrowserRouter>
            <Route exact path='/' component={Home} />
            <Route exact path='/profile' component={Profilepage} />
            <Route exact path='/login' component={Login} />
          </BrowserRouter>
        </Provider>
      </div>
    );
  }
}

export default App;
