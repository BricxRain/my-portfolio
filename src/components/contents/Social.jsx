import React from 'react';
import { Container } from 'react-bootstrap';

class Social extends React.Component {
    render() { 
        return (
            <div>
                <Container style={{ padding: '60px 0' }}>
                    <img className="social-images" src={require('../../images/social/react.png')} alt="" srcSet=""/>
                    <img className="social-images" src={require('../../images/social/react.png')} alt="" srcSet=""/>
                    <img className="social-images" src={require('../../images/social/react.png')} alt="" srcSet=""/>
                    <img className="social-images" src={require('../../images/social/react.png')} alt="" srcSet=""/>
                    <img className="social-images" src={require('../../images/social/react.png')} alt="" srcSet=""/>
                </Container>
            </div>
        );
    }
}
 
export default Social;