import React from 'react';
import { Container, Row, Col, InputGroup, FormControl, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuestion, faUserTie, faMailBulk, faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';

const StyledBannerName = styled.span`
    font-family: 'Yanus';
    text-transform: uppercase;
    font-weight: 700;
    color: #0f473c;
`;

class Contact extends React.Component {

    render() {
        return (
            <div style={{ background: '#eaf1f1' }}>
                <Container style={{ padding: '60px 0' }}>
                    <div>
                        <h1><StyledBannerName>Contact</StyledBannerName></h1>
                    </div>
                    <div>
                        <hr style={{ marginTop: '8px', backgroundColor: '#0f473c', height: '3px', width: '50%' }}/>
                    </div>
                    
                    <Row className="pt-5 mr-0 ml-0" style={{ textAlign: 'left' }}>
                        <Col md="6">
                            <label htmlFor="basic-url">Subject</label>
                            <InputGroup className="mb-4">
                                <InputGroup.Prepend>
                                    <InputGroup.Text id="basic-addon1" style={{ border: '0px' }}><FontAwesomeIcon size="2x" icon={faQuestion} /></InputGroup.Text>
                                </InputGroup.Prepend>
                                <FormControl
                                    style={{ borderRadius: '0px' }}
                                    placeholder="Subject"
                                    aria-label="Subject"
                                    aria-describedby="basic-addon1"
                                    />
                            </InputGroup>

                            <label htmlFor="basic-url">Name</label>
                            <InputGroup className="mb-4">
                                <InputGroup.Prepend>
                                    <InputGroup.Text id="basic-addon1" style={{ border: '0px' }}><FontAwesomeIcon size="2x" icon={faUserTie} /></InputGroup.Text>
                                </InputGroup.Prepend>
                                <FormControl
                                    style={{ borderRadius: '0px' }}
                                    placeholder="Name"
                                    aria-label="Name"
                                    aria-describedby="basic-addon1"
                                    />
                            </InputGroup>

                            <label htmlFor="basic-url">Email Address</label>
                            <InputGroup className="mb-4">
                                <InputGroup.Prepend>
                                    <InputGroup.Text id="basic-addon1" style={{ border: '0px' }}><FontAwesomeIcon size="2x" icon={faMailBulk} /></InputGroup.Text>
                                </InputGroup.Prepend>
                                <FormControl
                                    style={{ borderRadius: '0px' }}
                                    placeholder="Email Address"
                                    aria-label="Email Address"
                                    aria-describedby="basic-addon1"
                                    />
                            </InputGroup>
                        </Col>

                        <Col md="6">
                            <div className="mb-4">
                                <label htmlFor="basic-url">Message</label>
                                <FormControl as="textarea" aria-label="Message" rows="7" />
                            </div>

                            <Button variant="outline-primary" className="float-right">Send Email <FontAwesomeIcon icon={faPaperPlane} /></Button>
                        </Col>
                    </Row>

                </Container>
            </div>
        );
    }

}

export default Contact;