import React, { Component } from 'react';
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';

class Navigationbar extends Component {
  render() {
    return (
      <Navbar bg='primary' variant='dark'>
        <Navbar.Brand href='#home'>Fakebook</Navbar.Brand>
        <Nav className='mr-auto'>
          <Nav.Link href='/'>Home</Nav.Link>
          <Nav.Link href='/profile'>Profile</Nav.Link>
          <Nav.Link href='#pricing'>Message</Nav.Link>
        </Nav>
        <Form inline>
          <FormControl type='text' placeholder='Search' className='mr-sm-2' />
          <Button variant='outline-light'>Search</Button>
        </Form>
      </Navbar>
    );
  }
}

export default Navigationbar;
