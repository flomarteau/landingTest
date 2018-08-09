import React, { Component } from 'react';
import Locations from './locations.js';
import {
  Container
} from 'reactstrap';

class Contact extends Component {
  render() {

    return (
     
      <Container>
        <p>Our locations</p>
        <Locations/>
      </Container>
      
    );
  }
}

export default Contact;
