import React from 'react';
import { Container } from 'react-bootstrap';
import { Element } from 'react-scroll';
import styled from 'styled-components';

const StyledBannerName = styled.span`
    font-family: 'Yanus';
    color: #FFFFFF;
    text-transform: uppercase;
`;

const StyledBannerPosition = styled.span`
    font-family: 'Yanus';
    color: #FFFFFF;
`;

class Banner extends React.Component {

    render() {
        return (
            <div style={{ backgroundColor: '#6c757d' }}>
                <Container style={{ padding: '40px 0' }}>
                    <Element id='scroll-banner' name='scroll-banner'></Element>
                    <div style={{ marginBottom: '30px' }}>
                        <img style={{ borderRadius: '100%', border: '3px solid #FFFFFF', height: '300px', width: '300px' }} src={require('../../images/avatar-plain.png')} alt="" srcSet=""/>
                    </div>
                    <div>
                        <h1><StyledBannerName>Bricx J. Carasco</StyledBannerName></h1>
                    </div>
                    <div>
                        <hr style={{ marginTop: '8px', backgroundColor: '#FFFFFF', height: '3px', width: '50%' }}/>
                    </div>
                    <div>
                        <h3><StyledBannerPosition>Senior Software Engineer in Makati City, PH</StyledBannerPosition></h3>
                    </div>
                </Container>
            </div>
        );
    }

}

export default Banner;