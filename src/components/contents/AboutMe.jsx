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
    font-weight: 300;
    font-size: 18px;
    text-align: left;
    color: #595d61;
`;

const StyledUnorderedList = styled.span`
    font-family: 'Yanus';
    font-weight: 300;
    font-size: 14px;
    text-align: left;
    color: #595d61;
`;

const StyledEmphasis = styled.span`
    font-weight: bold;
    color: #0073b0;
`;
    
class AboutMe extends React.Component {

    render() {
        return (
            <div>
                <Container style={{ padding: '60px 0' }}>
                    <div>
                        <Element id='scroll-about-me' name='scroll-about-me'>
                            <h1><StyledBannerName>About Me</StyledBannerName></h1>
                        </Element>
                    </div>
                    <div>
                        <hr style={{ marginTop: '8px', backgroundColor: '#0f473c', height: '3px', width: '50%' }}/>
                    </div>
                    
                    <Row style={{ marginRight: '0px', marginLeft: '0px', textAlign: 'left' }}>
                        <Col md="6">
                            <StyledBannerPosition>
                                <p>Hello! i'm <StyledEmphasis>Bricx</StyledEmphasis> from <StyledEmphasis>Pagsanjan Laguna</StyledEmphasis>, currently residing at <StyledEmphasis>Makati City Philippines</StyledEmphasis>. I have over <StyledEmphasis>3 years of experience</StyledEmphasis> as a <StyledEmphasis>Software Engineer</StyledEmphasis> and have worked at both small startups and large organizations. I'am a <StyledEmphasis>proficient full-stack engineer</StyledEmphasis>, but my expertise is in <StyledEmphasis>building scalable backend services</StyledEmphasis>. I also have great experience on <StyledEmphasis>DevOps</StyledEmphasis> works such deploying, automating, maintaining and managing servers or cloud based platform. I do also a lot of <StyledEmphasis>freelance work</StyledEmphasis> which i enjoyed on doing because it <StyledEmphasis>helps me to maintain my skills fresh</StyledEmphasis> on always updated about current innovations and technologies.</p>

                                <p>I really <StyledEmphasis>enjoying what i'm doing right now</StyledEmphasis>. As a software engineer, my mindset is to <StyledEmphasis>learn things that related to this field on a daily basis</StyledEmphasis>. I always want to be the <StyledEmphasis>best version of myself yesterday</StyledEmphasis>. I used to <StyledEmphasis>read a lot</StyledEmphasis> of blogs and contents about technologies, programming, software development and any related topics about my career path. I'm looking for a <StyledEmphasis>senior individual roles</StyledEmphasis> where i can take on collaborative <StyledEmphasis>team leadership responsibilities</StyledEmphasis>, <StyledEmphasis>share my experience</StyledEmphasis> and knowledge to young believers who are the <StyledEmphasis>passion</StyledEmphasis> same as me and <StyledEmphasis>gain more experience</StyledEmphasis> with architecture and project management.</p>
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
                                                <StyledEmphasis>Grand Champion</StyledEmphasis> - ISITE 2nd Regional IT Skills Competition
                                                <ul>
                                                    <li>
                                                        Mobile Application Development (University of Perpetual Help System)
                                                    </li>
                                                </ul>
                                            </li>
                                            <li><StyledEmphasis>Best in Thesis</StyledEmphasis> (Laguna University)</li>
                                            <li><StyledEmphasis>Vice President's Lister</StyledEmphasis> (Laguna University)</li>
                                        </ul> 
                                    </li>
                                    <li>2016 - <StyledEmphasis>Best in Mobile Application Development</StyledEmphasis> (Laguna University)</li>
                                    <li>2015 - <StyledEmphasis>Best in Java Programming</StyledEmphasis> (Laguna University)</li>
                                    <li>2014 - <StyledEmphasis>Best in Project design</StyledEmphasis> (Laguna University)</li>
                                </ul>

                                <h5>Significant Experiences</h5>
                                <li>Discussed and presented in previous and current companies the <StyledEmphasis>importance and benefits of automating the process of deployment and automation testing</StyledEmphasis>, following the plan, execution and  implementation of this agenda.</li>
                                <li>
                                    {/* Promoted as Senior Software Engineer on December, 2019. */}
                                    Promoted as <StyledEmphasis>Senior Software Engineer</StyledEmphasis>, handle tasks such as:
                                    <ul>
                                        <li>managing devops and automation procedure works, </li>
                                        <li>improves operations by conducting systems analysis recommending changes in policies and procedures, </li>
                                        <li>supports and develops other developers by providing advice, coaching and educational opportunities, </li>
                                        <li>documents and demonstrates solutions by developing documentation, flowcharts, layouts, diagrams, charts, code reviews and clear code.</li>
                                    </ul>
                                </li>
                                <li>Presented and discussed <StyledEmphasis>SEO technology</StyledEmphasis> on an IT Conference held in Laguna University, on May 2, 2018</li>
                                <li>Presented and discussed the <StyledEmphasis>future of web development</StyledEmphasis> held in a college university.</li>
                            </StyledUnorderedList>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }

}

export default AboutMe;