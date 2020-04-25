import React from 'react';
import { Nav, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faFacebookSquare, faTwitterSquare, faGithubSquare } from '@fortawesome/free-brands-svg-icons';

const SocialLink = () => {
    return (
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
    );
}
 
export default SocialLink;