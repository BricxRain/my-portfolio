import React from 'react';
import { Col } from 'react-bootstrap';

const ProjectFigure = (props) => {
    const {id, image, firstTitle, secondTitle, color} = props.project;
    return (
        <Col md="6">
            <figure onClick={props.modalOpen} className={`snip1104 ${color}`}>
                <img src={require(`../../images/projects/${image}`)} alt="sample34" />
                <figcaption>
                    <h2>{firstTitle} <span> {secondTitle}</span></h2>
                </figcaption>
            </figure>
        </Col>
    );
}
 
export default ProjectFigure;