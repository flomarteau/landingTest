import React, { Component } from 'react';
import {
  Card,
  CardDeck,
  CardImg,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText
} from 'reactstrap';

class Locations extends Component {
  constructor() {
    super();
    this.state = {
      locations: [
        {
          name: "Location 1",
          phone: "06 00 00 00 00",
          address: "1 rue de la mairie, 75010 Paris",
          timetable: "Monday through Sunday - 1pm to 11pm"
        },
        {
          name: "Location 2",
          phone: "01 00 00 00 00",
          address: "34, boulevard de l'église, 75003 Paris",
          timetable: "Monday through Sunday - 1pm to 11pm"
        },
        {
          name: "Location 3",
          phone: "08 00 00 00 00",
          address: "21, avenue de la république, 75020 Paris",
          timetable: "Monday through Sunday - 1pm to 11pm"
        }
      ]
    }
  };

  render() {

    let locations = this.state.locations;

    return (
    
      <CardDeck>

        {locations.map(locations =>
          
          <Card key = {locations.name}>
            <CardImg top width="100%" src="https://maps.googleapis.com/maps/api/staticmap?center=Brooklyn+Bridge,New+York,NY&zoom=14&size=600x300&maptype=roadmap
            &markers=color:blue%7Clabel:S%7C40.702147,-74.015794&markers=color:green%7Clabel:G%7C40.711614,-74.012318
            &markers=color:red%7Clabel:C%7C40.718217,-73.998284
            &key=AIzaSyDZiQy-j61_p_IIbYLQSTaShhiAOM0OIHs" alt="Card image cap" />
            <CardBody>
              <CardTitle>{locations.name}</CardTitle>
              <CardSubtitle>{locations.phone}</CardSubtitle>
              <CardText>{locations.address}</CardText>
              <CardText>{locations.time}</CardText>
            </CardBody>
          </Card>

        )}
        
      </CardDeck>
  
    );

  }
}

export default Locations;
