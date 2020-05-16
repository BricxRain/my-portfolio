import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Element } from 'react-scroll';
import styled from 'styled-components';

const StyledBannerName = styled.span`
    font-family: 'Yanus';
    text-transform: uppercase;
    font-weight: 700;
    color: #0f473c;
`;

const StyledBannerPosition = styled.span`
    font-family: 'Yanus';
    font-size: 20px;
    text-align: left;
    color: #595d61;
`;

class Projects extends React.Component {

    render() {
        return (
            <div>
                <Container style={{ padding: '60px 0' }}>
                    <div>
                        <Element id='scroll-projects' name='scroll-projects'>
                            <h1><StyledBannerName>Projects</StyledBannerName></h1>
                        </Element>
                    </div>
                    <div>
                        <hr style={{ marginTop: '8px', backgroundColor: '#0f473c', height: '3px', width: '50%' }}/>
                    </div>
                    
                    <Row style={{ marginRight: '0px', marginLeft: '0px', textAlign: 'left' }}>
                        <Col md="6">
                            <StyledBannerPosition>
                                <h4>My personal interests include:</h4>

                                <li>Deep learning. It's an exciting time for machine learning. I'm working through several online classes, and swap articles with collegues.</li>
                                <li>RC Planes and Boats. I've been an enthusiastic hobbiest since I was a teenager - but only as an adult am I able to afford the higher-quality devices. I like to modify existing kits to improve speed, and add instrumentation.</li>
                                <li>Mountaineering. I live in the Pacific Northwest, home of some of the greatest mountains and trails in the country. I enjoy spending weekends on scrambles and getting lost in the woods.</li>
                            </StyledBannerPosition>
                        </Col>

                        <Col md="6">
                            <StyledBannerPosition>
                                <h3>HIGHLIGHTS</h3>
                                <li>Migrated a monolithic Heroku Ruby on Rails API to multiple Scala services hosted on AWS. Delivered ahead of schedule, projected to save $18k/quarter.</li>
                                <li>Presented research and proof-of-concept to convince team to move from Hadoop MR to Spark; reduced nodes by 60% and ran 5-8x faster.</li>
                                <li>Automated test automation in ramp-up to large data center migration, saving hundreds of developer hours.</li>
                                <li>Presented "Understanding the GIL to Prevent Race Conditions" at RubyConf 2016.</li>
                                <li>Awarded patent for novel approach to item normalization in 3rd party catalog data feeds.</li>
                            </StyledBannerPosition>
                        </Col>
                    </Row>

                </Container>
            </div>
        );
    }

}

export default Projects;