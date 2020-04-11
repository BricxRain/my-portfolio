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
    font-family: 'Monserrat';
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
                    
                    <Row>
                        <Col>
                            <StyledBannerPosition>
                                I have over 6 years of experience as a software engineer, and have worked at both small startups and large organizations. While I'm a proficient full-stack developer, my expertise is in building scalable backend services (API services, stream processing, and async mechanisms).

                                I love building things. While hard engineering problems are often intrinsically fun to tackle, I'm most attracted to solving real customer problems with a business justification. I'm looking for a senior individual contributor role where I can take on on collaborative team leadership responsibilites, and gain experience with architecture and project management.
                            </StyledBannerPosition>
                        </Col>

                        <Col>
                            <StyledBannerPosition>
                                HIGHLIGHTS
                                Migrated a monolithic Heroku Ruby on Rails API to multiple Scala services hosted on AWS. Delivered ahead of schedule, projected to save $18k/quarter.
                                Presented research and proof-of-concept to convince team to move from Hadoop MR to Spark; reduced nodes by 60% and ran 5-8x faster.
                                Automated test automation in ramp-up to large data center migration, saving hundreds of developer hours.
                                Presented "Understanding the GIL to Prevent Race Conditions" at RubyConf 2016.
                                Awarded patent for novel approach to item normalization in 3rd party catalog data feeds.
                            </StyledBannerPosition>
                        </Col>
                    </Row>

                </Container>
            </div>
        );
    }

}

export default AboutMe;