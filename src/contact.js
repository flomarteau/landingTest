import React, { Component } from 'react';
import {
  Container,
  CardDeck,
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText
} from 'reactstrap';

class Contact extends Component {
  render() {
    return (
     
      <Container>
        <p>Our locations</p>
        <CardDeck>
          
          <Card>
            <CardImg top width="100%" src="https://maps.googleapis.com/maps/api/staticmap?center=Brooklyn+Bridge,New+York,NY&zoom=14&size=600x300&maptype=roadmap
            &markers=color:blue%7Clabel:S%7C40.702147,-74.015794&markers=color:green%7Clabel:G%7C40.711614,-74.012318
            &markers=color:red%7Clabel:C%7C40.718217,-73.998284
            &key=AIzaSyDZiQy-j61_p_IIbYLQSTaShhiAOM0OIHs" alt="Card image cap" />
            <CardBody>
              <CardTitle>Location name</CardTitle>
              <CardSubtitle>Phone</CardSubtitle>
              <CardText>Address</CardText>
              <CardText>Timetable info</CardText>
            </CardBody>
          </Card>

          <Card>
            <CardImg top width="100%" src="https://maps.googleapis.com/maps/api/staticmap?center=Brooklyn+Bridge,New+York,NY&zoom=14&size=600x300&maptype=roadmap
            &markers=color:blue%7Clabel:S%7C40.702147,-74.015794&markers=color:green%7Clabel:G%7C40.711614,-74.012318
            &markers=color:red%7Clabel:C%7C40.718217,-73.998284
            &key=AIzaSyDZiQy-j61_p_IIbYLQSTaShhiAOM0OIHs" alt="Card image cap" />
            <CardBody>
              <CardTitle>Location name</CardTitle>
              <CardSubtitle>Phone</CardSubtitle>
              <CardText>Address</CardText>
              <CardText>Timetable info</CardText>
            </CardBody>
          </Card>

          <Card>
            <CardImg top width="100%" src="https://maps.googleapis.com/maps/api/staticmap?center=Brooklyn+Bridge,New+York,NY&zoom=14&size=600x300&maptype=roadmap
            &markers=color:blue%7Clabel:S%7C40.702147,-74.015794&markers=color:green%7Clabel:G%7C40.711614,-74.012318
            &markers=color:red%7Clabel:C%7C40.718217,-73.998284
            &key=AIzaSyDZiQy-j61_p_IIbYLQSTaShhiAOM0OIHs" alt="Card image cap" />
            <CardBody>
              <CardTitle>Location name</CardTitle>
              <CardSubtitle>Phone</CardSubtitle>
              <CardText>Address</CardText>
              <CardText>Timetable info</CardText>
            </CardBody>
          </Card>

        </CardDeck>

        <img src="https://maps.googleapis.com/maps/api/staticmap?center=Brooklyn+Bridge,New+York,NY&zoom=13&size=600x300&maptype=roadmap
        &markers=color:blue%7Clabel:S%7C40.702147,-74.015794&markers=color:green%7Clabel:G%7C40.711614,-74.012318
        &markers=color:red%7Clabel:C%7C40.718217,-73.998284
        &key=AIzaSyDZiQy-j61_p_IIbYLQSTaShhiAOM0OIHs" />

        
          
      </Container>
      
    );
  }
}

export default Contact;
