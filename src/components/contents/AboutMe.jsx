import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
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
    
class AboutMe extends React.Component {

    render() {
        return (
            <div>
                <Container style={{ padding: '60px 0' }}>
                    <div>
                        <h1><StyledBannerName>About Me</StyledBannerName></h1>
                    </div>
                    <div>
                        <hr style={{ marginTop: '8px', backgroundColor: '#0f473c', height: '3px', width: '50%' }}/>
                    </div>
                    
                    <Row style={{ marginRight: '0px', marginLeft: '0px', textAlign: 'left' }}>
                        <Col md="6">
                            <StyledBannerPosition>
                                <p>I have over 6 years of experience as a software engineer, and have worked at both small startups and large organizations. While I'm a proficient full-stack developer, my expertise is in building scalable backend services (API services, stream processing, and async mechanisms).</p>

                                <p>I love building things. While hard engineering problems are often intrinsically fun to tackle, I'm most attracted to solving real customer problems with a business justification. I'm looking for a senior individual contributor role where I can take on on collaborative team leadership responsibilites, and gain experience with architecture and project management.</p>
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

export default AboutMe;