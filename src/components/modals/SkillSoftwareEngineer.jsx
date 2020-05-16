import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import styled from 'styled-components';

const StyledEmphasis = styled.span`
    font-weight: bold;
    color: #0073b0;
`;

const SkillSoftwareEngineer = (props) => {
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
                    Responsibilities as a Software Engineer
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <ul className="h5 skill-li">
                    <li>Developing <StyledEmphasis>front end and back end website applications</StyledEmphasis> and <StyledEmphasis>server deployment process</StyledEmphasis> and <StyledEmphasis>automation procedures</StyledEmphasis>.</li>
                    <li>Knowledge of multiple front-end languages and libraries (e.g. <StyledEmphasis>HTML/ CSS</StyledEmphasis>, <StyledEmphasis>Sass</StyledEmphasis>, <StyledEmphasis>Less</StyledEmphasis>, <StyledEmphasis>JavaScript</StyledEmphasis>, <StyledEmphasis>XML</StyledEmphasis>, <StyledEmphasis>jQuery</StyledEmphasis>, <StyledEmphasis>AngularJs</StyledEmphasis>).</li>
                    <li>Knowledge of multiple back-end languages (e.g. <StyledEmphasis>PHP</StyledEmphasis>, <StyledEmphasis>Python</StyledEmphasis>, <StyledEmphasis>Java</StyledEmphasis>) and JavaScript frameworks (e.g. <StyledEmphasis>React</StyledEmphasis>, <StyledEmphasis>Vue</StyledEmphasis>, <StyledEmphasis>Node.js</StyledEmphasis>).</li>
                    <li>Knowledge with databases (e.g. <StyledEmphasis>MySQL</StyledEmphasis>, <StyledEmphasis>PosgreSQL</StyledEmphasis>, <StyledEmphasis>SQL Server</StyledEmphasis>, <StyledEmphasis>MongoDB</StyledEmphasis>), web servers (e.g. <StyledEmphasis>Apache</StyledEmphasis>, <StyledEmphasis>Nginx</StyledEmphasis>) and <StyledEmphasis>UI/UX</StyledEmphasis> design.</li>
                    <li>Knowledge and experience of software methodologies like <StyledEmphasis>Agile</StyledEmphasis> (e.g <StyledEmphasis>Scrum</StyledEmphasis>, <StyledEmphasis>Kanban</StyledEmphasis>), <StyledEmphasis>RAD</StyledEmphasis> and <StyledEmphasis>software development lifecycle</StyledEmphasis>.</li>
                    <li>Proficiency in software paradigms (e.g <StyledEmphasis>Object Oriented Programming</StyledEmphasis>, <StyledEmphasis>PSR-2 to PSR-4</StyledEmphasis>, <StyledEmphasis>MVC</StyledEmphasis>) and coding principles (e.g <StyledEmphasis>SOLID</StyledEmphasis>, <StyledEmphasis>KISS</StyledEmphasis>, <StyledEmphasis>Dry Principle</StyledEmphasis>).</li>
                    <li>Staying abreast of developments in web applications, programming languages, devops trends and latest innovations.</li>
                    <li>Seeing through a project from conception to finished product.</li>
                    <li>Strong organizational and project management skills.</li>
                    <li>Excellent communication and teamwork skills.</li>
                    <li>Write technical documentation.</li>
                    <li>Great problem solving skills.</li>
                    <li>Great attention to detail.</li>
                </ul>
            </Modal.Body>
            <Modal.Footer>
                <Button className="skill-button-modal" onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}
 
export default SkillSoftwareEngineer;