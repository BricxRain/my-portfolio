import React from 'react';
import { Container } from 'react-bootstrap';
import styled from 'styled-components';

const StyledBannerName = styled.span`
    font-family: 'Monserrat';
    color: #FFFFFF;
    text-transform: uppercase;
`;

const StyledBannerPosition = styled.span`
    font-family: 'Monserrat';
    color: #FFFFFF;
`;


class Banner extends React.Component {

    render() {
        return (
            <div style={{ backgroundColor: '#6c757d' }}>
                <Container style={{ padding: '40px 0' }}>
                    <div style={{ marginBottom: '30px' }}>
                        <img style={{ borderRadius: '100%', border: '3px solid #FFFFFF', height: '300px', width: '300px' }} src={require('../../images/avatar-plain.png')} alt="" srcset=""/>
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