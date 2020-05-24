import React from 'react';
import { Col } from 'react-bootstrap';

const ProjectFigure = ({project, showModal}) => {
    const { id, image, firstTitle, secondTitle, color } = project;

    const handleClickModal = (event) => {
        event.preventDefault();
        showModal(project);
    }

    return (
        <Col md="6">
            <figure name={id} onClick={handleClickModal} className={`snip1104 ${color}`}>
                <img src={require(`../../images/projects/${image}`)} alt="sample34" />
                <figcaption>
                    <h2>{firstTitle} <span> {secondTitle}</span></h2>
                </figcaption>
            </figure>
        </Col>
    );
}
 
export default ProjectFigure;