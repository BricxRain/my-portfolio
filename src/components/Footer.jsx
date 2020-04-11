import React from 'react';
import { MDBContainer, MDBFooter } from "mdbreact";
import styled from 'styled-components';

const StyledFooterName = styled.span`
    font-family: 'BuMarker';
    font-size: 20px;
`;

class Footer extends React.Component {
    
    state = {
        footer_class: ['font-small', 'pt-1', 'pb-1', 'mt-4', 'footer-style']
    }

    componentDidMount() {
        if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
            this.setState({
                footer_class: [...this.state.footer_class, 'fixed-bottom']
            });
        }
    }

    render() {
        return (
            <MDBFooter id="mdb-footer-checker" className={ this.state.footer_class.join(' ') }>
                <div className="footer-copyright text-center py-2">
                    <MDBContainer fluid>
                    &copy; {new Date().getFullYear()} Copyright <a href="#footer"> | <StyledFooterName>Bricx Carasco</StyledFooterName></a>
                    </MDBContainer>
                </div>
            </MDBFooter>
        );
    }

}

export default Footer;