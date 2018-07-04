import React, {Component} from 'react';

import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Row,
  Col,
  Container
} from 'reactstrap';

class Header extends Component {
  render() {
    return (

      <Container>
        <Navbar color="light" light expand="md">

          <Row>

            <Col>
              <NavbarBrand href="/">Logo</NavbarBrand>
            </Col>

            <Col>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <NavLink href="/">Item 1</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/">Item 2</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/">Item 3</NavLink>
                </NavItem>
              </Nav>
            </Col>
            
          </Row>
            
        </Navbar>
      </Container>

    );
  }
}

export default Header;
