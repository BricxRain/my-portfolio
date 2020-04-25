import React from 'react';
import { Link } from 'react-scroll';
import styled from 'styled-components';

const StyledNavbarLinks = styled.span`
    font-family: 'Yanus';
`;

class NavLink extends React.Component {

    state = {
        scroll_offset: 0
    }

    componentDidMount() {
        let scroll_offset = -150;
        if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) )
            scroll_offset = -360;
        this.setState({
            scroll_offset
        });
    }

    render() { 
        console.log(this.state.scroll_offset)
        return (
            <React.Fragment>
                <Link
                    className="nav-link"
                    to="scroll-about-me" 
                    spy={true} 
                    smooth="easeInOutCubic" 
                    offset={this.state.scroll_offset} 
                    duration={1000} 
                    onSetActive={this.handleSetActive}>
                    <StyledNavbarLinks>About Me</StyledNavbarLinks>
                </Link>

                <Link
                    className="nav-link"
                    to="scroll-skills" 
                    spy={true} 
                    smooth="easeInOutCubic" 
                    offset={this.state.scroll_offset} 
                    duration={1000} 
                    onSetActive={this.handleSetActive}>
                    <StyledNavbarLinks>Skills</StyledNavbarLinks>
                </Link>

                <Link
                    className="nav-link"
                    to="scroll-interest" 
                    spy={true} 
                    smooth="easeInOutCubic" 
                    offset={this.state.scroll_offset} 
                    duration={1000} 
                    onSetActive={this.handleSetActive}>
                    <StyledNavbarLinks>Interests</StyledNavbarLinks>
                </Link>

                <Link
                    className="nav-link"
                    to="scroll-contact" 
                    spy={true} 
                    smooth="easeInOutCubic" 
                    offset={this.state.scroll_offset} 
                    duration={1000} 
                    onSetActive={this.handleSetActive}>
                    <StyledNavbarLinks>Contact</StyledNavbarLinks>
                </Link>
            </React.Fragment>
        );
    }
}
 
export default NavLink;