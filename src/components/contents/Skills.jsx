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

const StyledBannerNameSub = styled.span`
    font-size: 1.7rem;
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

class Skills extends React.Component {

    render() {
        return (
            <div style={{ background: '#eaf1f1' }}>
                <Container style={{ padding: '60px 0' }}>
                    <div>
                        <Element id='scroll-skills' name='scroll-skills'>
                            <h1><StyledBannerName>Skills</StyledBannerName></h1>
                        </Element>
                    </div>
                    <div>
                        <hr style={{ marginTop: '8px', backgroundColor: '#0f473c', height: '3px', width: '50%' }}/>
                    </div>

                    <Row style={{ marginRight: '0px', marginLeft: '0px', textAlign: 'left' }}>
                        <Col md="6">
                            <StyledBannerPosition>
                                <h4>DevOps</h4>
                                <StyledUnorderedList>
                                    <ul className="skills-ul">
                                        <li>
                                            Great understanding on different operating systems such as Windows, MacOs, Unix and Linux.
                                            <ul>
                                                <li>
                                                    Linux distributions (e.g Debian such as Ubuntu and Linux Mint, Fedora such as Red Hat and CentOS)
                                                </li>
                                            </ul>
                                        </li>
                                        <li>Implements automated testing tools like PHPUnit, Dusk for Laravel and Selenium from previous projects.</li>
                                        <li>Implements and maintains containerize application using Docker and deployment tools like Ansible and Terraform. </li>
                                        <li>
                                            Manages Amazon Web Services accounts with technologies (e.g EC2, RDS, ELB, EBD, S3, VPC, Route53, IAM, CloudWatch, CodePipeline, CodeBuild, CodeDeploy). Here are the responsibilities:
                                            <ul>
                                                <li>
                                                    Deploying, automating, maintaining and managing AWS cloud based staging and production system.
                                                </li>
                                                <li>
                                                    Build, release and configuration management of staging and production systems.
                                                </li>
                                                <li>
                                                    System troubleshooting and problem solving across platform and application domains.
                                                </li>
                                                <li>
                                                    Suggesting architecture improvements, recommending process improvements.
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                </StyledUnorderedList>
                            </StyledBannerPosition>
                        </Col>

                        <Col md="6">
                            <StyledBannerPosition>
                                <h4>Technologies using..</h4>
                                <p>Hello! i'm Bricx from Pagsanjan Laguna, currently residing at Makati City Philippines. I have over 3 years of experience as a Software Engineer and have worked at both small startups and large organizations. I'am a proficient full-stack engineer, but my expertise is in building scalable backend services. I also have great experience on DevOps works such deploying, automating, maintaining and managing servers or cloud based platform. I do also a lot of freelance work which i enjoyed on doing because it helps me to maintain my skills fresh on always updated about current innovations and technologies.</p>
                                <p>I really enjoying what i'm doing right now. As a software engineer, my mindset is to learn things that related to this field on a daily basis. I always want to be the best version of myself yesterday. I used to read a lot of blog and contents about technologies, programming, software development and any related topics about my career path. I'm looking for a senior individual roles where i can take on collaborative team leadership responsibilities, share my experience and knowledge to young believers who are the passion same as me and gain more experience with architecture and project management.</p>
                            </StyledBannerPosition>
                        </Col>
                    </Row>


                    <div>
                        <h1><StyledBannerNameSub>Technology Use</StyledBannerNameSub></h1>
                    </div>
                    <div>
                        <hr style={{ marginTop: '8px', backgroundColor: '#0f473c', height: '2px', width: '30%' }}/>
                    </div>
                </Container>
            </div>
        );
    }

}

export default Skills;