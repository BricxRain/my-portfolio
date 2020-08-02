import React from 'react';
import SocialLink from './links/SocialLink';
import NavLink from './links/NavLink';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-scroll';
import styled from 'styled-components';

const StyledNavbarBrand = styled.span`
    font-family: 'BuMarker';
`;

class Header extends React.Component {

    constructor(props) {
        super(props);
        this.refNavbarCollapse = React.createRef();
    }

    scrollFunction = () => {
        if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
            document.getElementById('header').style.fontSize = "24px";
        } else {
            document.getElementById('header').style.fontSize = "35px";
        }
    }

    toggleCollapseNavbar = () => {
        this.refNavbarCollapse.current.classList.remove('show');
    }

    render() {
        window.onscroll = () => {this.scrollFunction()};
        return (
            <React.Fragment>
                <Navbar 
                className="primary navbar" 
                collapseOnSelect 
                expand="lg" 
                variant="dark" 
                sticky="top">
                    <Container>
                        <Navbar.Brand id="header">
                            <Link
                                className="nav-link"
                                to="scroll-banner" 
                                spy={true} 
                                smooth="easeInOutCubic" 
                                offset={-500} 
                                duration={1000}>
                                <StyledNavbarBrand>Bricx Carasco</StyledNavbarBrand>
                            </Link>
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav" ref={this.refNavbarCollapse}>
                            <Nav className="mr-auto navbar-links">
                                <SocialLink />
                            </Nav>
                            <Nav className="navbar-links">
                                <NavLink toggleCollapse={this.toggleCollapseNavbar} />
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </React.Fragment>
        );
    }

}

export default Header;