import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Element } from 'react-scroll';
import styled from 'styled-components';
import SkillSoftwareEngineer from '../modals/SkillSoftwareEngineer';
import SkillDevops from '../modals/SkillDevOps';

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
    font-size: 20px;
    text-align: left;
    color: #595d61;
`;

const StyledEmphasis = styled.span`
    font-weight: bold;
    color: #0073b0;
`;

class Skills extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            isSkillSoftwareEngineer: false,
            isSkillDevOps: false
        }
    }

    showModalSoftwareEngineer = () => {
        this.setState({
            isSkillSoftwareEngineer: true
        });
    }

    showModalDevOps = () => {
        this.setState({
            isSkillDevOps: true
        });
    }

    setModalClose = () => {
        this.setState({
            isSkillSoftwareEngineer: false,
            isSkillDevOps: false
        })
    }

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
                        <Col md="12">
                            <StyledBannerPosition>
                                <StyledUnorderedList>
                                    <ul className="skills-ul">
                                        <li>Proficiency in <StyledEmphasis>PHP</StyledEmphasis> programming language with frameworks like <StyledEmphasis>Laravel</StyledEmphasis>, <StyledEmphasis>Codeigniter</StyledEmphasis>, <StyledEmphasis>CakePHP</StyledEmphasis> and including <StyledEmphasis>native</StyledEmphasis> framework.</li>
                                        <li>Proficiency in <StyledEmphasis>Javascript</StyledEmphasis> programming language with frameworks and libraries like <StyledEmphasis>NodeJs</StyledEmphasis>, <StyledEmphasis>React</StyledEmphasis>, <StyledEmphasis>Vue</StyledEmphasis>, <StyledEmphasis>AngularJs</StyledEmphasis>, <StyledEmphasis>jQuery</StyledEmphasis> and <StyledEmphasis>BackboneJs</StyledEmphasis>.</li>
                                        <li>Knowledge in programming languages such as <StyledEmphasis>Java</StyledEmphasis> for Mobile Application Development and <StyledEmphasis>Python</StyledEmphasis> for Web Development.</li>
                                        <li>Knowledge using <StyledEmphasis>Amazon Web Services</StyledEmphasis> with technologies such as Identity and Access Management (<StyledEmphasis>IAM</StyledEmphasis>), Elastic Compute Cloud (<StyledEmphasis>EC2</StyledEmphasis>), Simple Storage Service (<StyledEmphasis>S3</StyledEmphasis>), Virtual Private Cloud (<StyledEmphasis>VPC</StyledEmphasis>), Elastic Load Balancer (<StyledEmphasis>ELB</StyledEmphasis>), <StyledEmphasis>Route53</StyledEmphasis>, Relational Database Service (<StyledEmphasis>RDS</StyledEmphasis>), <StyledEmphasis>CloudWatch</StyledEmphasis>, <StyledEmphasis>CodeCommit</StyledEmphasis>, <StyledEmphasis>CodeBuild</StyledEmphasis>, <StyledEmphasis>CodeDeploy</StyledEmphasis> and <StyledEmphasis>CodePipeline</StyledEmphasis>.</li>
                                        <li>Knowledge using <StyledEmphasis>DevOps</StyledEmphasis> automation technologies such as <StyledEmphasis>Docker</StyledEmphasis>, <StyledEmphasis>Vagrant</StyledEmphasis>, <StyledEmphasis>Heroku</StyledEmphasis>, <StyledEmphasis>Ansible</StyledEmphasis>, <StyledEmphasis>Terraform</StyledEmphasis>, <StyledEmphasis>Bash</StyledEmphasis> and <StyledEmphasis>YAML</StyledEmphasis></li>
                                    </ul>
                                </StyledUnorderedList>
                            </StyledBannerPosition>
                            <Row>
                                <Col className="mb-2 text-center" md="6"><Button onClick={this.showModalSoftwareEngineer} variant="warning" className="skill-button">Skills as a Software Engineer</Button></Col>
                                <Col className="text-center" md="6"><Button onClick={this.showModalDevOps} variant="info" className="skill-button">Responsibilities as a DevOps</Button></Col>
                            </Row>

                            <SkillSoftwareEngineer show={this.state.isSkillSoftwareEngineer} onHide={this.setModalClose}/>
                            <SkillDevops show={this.state.isSkillDevOps} onHide={this.setModalClose}/>
                        </Col>
                    </Row>

                </Container>
            </div>
        );
    }

}

export default Skills;