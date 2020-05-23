import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import styled from 'styled-components';

const StyledEmphasis = styled.span`
    font-weight: bold;
    color: #0073b0;
`;

const IbidenHRIS = (props) => {
    return (
        <Modal
            className="skill-modal"
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    IbidenHRIS
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <ul className="h5 skill-li">
                    <li>Great understanding on different <StyledEmphasis>operating systems</StyledEmphasis> such as <StyledEmphasis>Windows</StyledEmphasis>, <StyledEmphasis>MacOs</StyledEmphasis>, <StyledEmphasis>Unix</StyledEmphasis> and <StyledEmphasis>Linux</StyledEmphasis>. Linux distributions (e.g <StyledEmphasis>Debian</StyledEmphasis> such as <StyledEmphasis>Ubuntu</StyledEmphasis> and <StyledEmphasis>Linux Mint</StyledEmphasis>, <StyledEmphasis>Fedora</StyledEmphasis> such as <StyledEmphasis>Red Hat</StyledEmphasis> and <StyledEmphasis>CentOS</StyledEmphasis>)</li>
                    <li>Implements <StyledEmphasis>automated testing tools</StyledEmphasis> like <StyledEmphasis>PHPUnit</StyledEmphasis>, <StyledEmphasis>Dusk for Laravel</StyledEmphasis> and <StyledEmphasis>Selenium</StyledEmphasis> from previous projects.</li>
                    <li>Implements and maintains <StyledEmphasis>containerized applications</StyledEmphasis> using <StyledEmphasis>Docker</StyledEmphasis> and deployment tools like <StyledEmphasis>Bash</StyledEmphasis>, <StyledEmphasis>Ansible</StyledEmphasis> and <StyledEmphasis>Terraform</StyledEmphasis>.</li>
                    <li>
                        Manages <StyledEmphasis>Amazon Web Services</StyledEmphasis> with technologies (e.g <StyledEmphasis>IAM</StyledEmphasis>, <StyledEmphasis>EC2</StyledEmphasis>, <StyledEmphasis>S3</StyledEmphasis>, <StyledEmphasis>ELB</StyledEmphasis>, <StyledEmphasis>VPC</StyledEmphasis>, <StyledEmphasis>Route53</StyledEmphasis>, <StyledEmphasis>CodeCommit</StyledEmphasis>, <StyledEmphasis>CodeBuild</StyledEmphasis>, <StyledEmphasis>CodeDeploy</StyledEmphasis>, <StyledEmphasis>CodePipeline</StyledEmphasis>, <StyledEmphasis>CloudWatch</StyledEmphasis> and <StyledEmphasis>RDS</StyledEmphasis>). Here are the responsibilities:
                        <ul>
                            <li>Deploying, automating, maintaining and managing AWS cloud based staging and production systems.</li>
                            <li>Build, release and configuration management of staging and production systems.</li>
                            <li>System troubleshooting and problem solving across platform and application domains.</li>
                            <li>Suggesting architecture improvements, recommending process improvements.</li>
                        </ul>
                    </li>
                </ul>
            </Modal.Body>
            <Modal.Footer>
                <Button className="skill-button-modal" onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}
 
export default IbidenHRIS;