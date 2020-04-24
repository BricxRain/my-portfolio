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
    font-weight: 300;
    font-size: 18px;
    text-align: left;
    color: #595d61;
`;

const StyledUnorderedList = styled.span`
    font-family: 'Yanus';
    font-weight: 300;
    font-size: 15px;
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
                                <p>Hello! i'm Bricx from Pagsanjan Laguna, currently residing at Makati City Philippines. I have over 3 years of experience as a Software Engineer and have worked at both small startups and large organizations. I'am a proficient full-stack engineer, but my expertise is in building scalable backend services. I also have great experience on DevOps works such deploying, automating, maintaining and managing servers or cloud based platform. I do also a lot of freelance work which i enjoyed on doing because it helps me to maintain my skills fresh on always updated about current innovations and technologies.</p>

                                <p>I really enjoying what i'm doing right now. As a software engineer, my mindset is to learn things that related to this field on a daily basis. I always want to be the best version of myself yesterday. I used to read a lot of blog and contents about technologies, programming, software development and any related topics about my career path. I'm looking for a senior individual roles where i can take on collaborative team leadership responsibilities, share my experience and knowledge to young believers who are the passion same as me and gain more experience with architecture and project management.</p>
                            </StyledBannerPosition>
                        </Col>

                        <Col md="6">
                            <StyledUnorderedList>
                                <h4>HIGHLIGHTS</h4>
                                <h5>Awards and recognition received</h5>
                                <ul className="aboutMeUL">
                                    <li>
                                        2017
                                        <ul>
                                            <li>
                                                Grand Champion - ISITE 2nd Regional IT Skills Competition
                                                <ul>
                                                    <li>
                                                        Mobile Application Development (University of Perpetual Help System)
                                                    </li>
                                                </ul>
                                            </li>
                                            <li>Best in Thesis (Laguna University)</li>
                                            <li>Vice President's Lister (Laguna University)</li>
                                        </ul> 
                                    </li>
                                    <li>2016 - Best in Mobile Application Development (Laguna University)</li>
                                    <li>2015 - Best in Java Programming (Laguna University)</li>
                                    <li>2014 - Best in Project design (Laguna University)</li>
                                </ul>

                                <h5>Significant Experiences</h5>
                                <li>Migrated a monolithic Heroku Ruby on Rails API to multiple Scala services hosted on AWS. Delivered ahead of schedule, projected to save $18k/quarter.</li>
                                <li>Presented research and proof-of-concept to convince team to move from Hadoop MR to Spark; reduced nodes by 60% and ran 5-8x faster.</li>
                                <li>Automated test automation in ramp-up to large data center migration, saving hundreds of developer hours.</li>
                                <li>Presented "Understanding the GIL to Prevent Race Conditions" at RubyConf 2016.</li>
                                <li>Awarded patent for novel approach to item normalization in 3rd party catalog data feeds.</li>
                            </StyledUnorderedList>
                        </Col>
                    </Row>

                </Container>
            </div>
        );
    }

}

export default AboutMe;