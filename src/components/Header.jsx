import React from 'react';
import { Navbar, Nav, Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faFacebookSquare, faTwitterSquare, faGithubSquare } from '@fortawesome/free-brands-svg-icons';
import styled from 'styled-components';

const StyledNavbarBrand = styled.span`
    font-family: 'BuMarker';
`;

const StyledNavbarLinks = styled.span`
    font-family: 'Yanus';
`;

class Header extends React.Component {

    scrollFunction = () => {
        if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
            document.getElementById('header').style.fontSize = "24px";
        } else {
            document.getElementById('header').style.fontSize = "35px";
        }
    }

    render() {
        window.onscroll = () => {this.scrollFunction()};
        return (
            <React.Fragment>
                <Navbar className="primary navbar" collapseOnSelect expand="lg" variant="dark" sticky="top">
                    <Container>
                        <Navbar.Brand id="header" href="#home"><StyledNavbarBrand>Bricx Carasco</StyledNavbarBrand></Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="mr-auto navbar-links">
                                <Row>
                                    <Col className="col-padding" xs={3}>
                                        <Nav.Link href="https://ph.linkedin.com/in/bricx-carasco" target="_blank"><FontAwesomeIcon style={{ color: '#0073b0' }} icon={faLinkedin} size="lg"/></Nav.Link>
                                    </Col>
                                    <Col className="col-padding" xs={3}>
                                        <Nav.Link href="https://github.com/BricxRain" target="_blank"><FontAwesomeIcon style={{ color: '#23292e' }} icon={faGithubSquare} size="lg"/></Nav.Link>
                                    </Col>
                                    <Col className="col-padding" xs={3}>
                                        <Nav.Link href="https://www.facebook.com/iambricxrain" target="_blank"><FontAwesomeIcon style={{ color: '#1090f2' }} icon={faFacebookSquare} size="lg"/></Nav.Link>
                                    </Col>
                                    <Col className="col-padding" xs={3}>
                                        <Nav.Link href="https://twitter.com/iambricxrain" target="_blank"><FontAwesomeIcon style={{ color: '#1ca1f2' }} icon={faTwitterSquare} size="lg"/></Nav.Link>
                                    </Col>
                                </Row>
                            </Nav>
                            <Nav className="navbar-links">
                                <Nav.Link href="#home"><StyledNavbarLinks>About Me</StyledNavbarLinks></Nav.Link>
                                <Nav.Link href="#home"><StyledNavbarLinks>My Interests</StyledNavbarLinks></Nav.Link>
                                <Nav.Link href="#home"><StyledNavbarLinks>Contact Me</StyledNavbarLinks></Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </React.Fragment>
        );
    }

}

export default Header;