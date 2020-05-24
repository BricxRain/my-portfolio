import React, { createRef } from 'react';
import { Container, Row } from 'react-bootstrap';
import { Element } from 'react-scroll';
import '../../css/projects.css';
import styled from 'styled-components';
import ProjectFigure from '../sub-components/ProjectFigure';
import Project from '../modals/Project';
import { projects } from '../../json/products';

const StyledBannerName = styled.span`
    font-family: 'Yanus';
    text-transform: uppercase;
    font-weight: 700;
    color: #0f473c;
`;

class Projects extends React.Component {
    constructor () {
        super();
        this.state = {
            isShowModal: false,
            product: {}
        };
        this.wrapper = createRef();
    }

    setModalClose = () => {
        this.setState({ isShowModal: false });
    }

    showModalClickEvent = async (product) => {
        await this.setState({
            product,
            isShowModal: true
        });
    }

    render() {
        return (
            <div ref={this.wrapper}>
                <Container style={{ padding: '60px 0' }}>
                    <div>
                        <Element id='scroll-projects' name='scroll-projects'>
                            <h1><StyledBannerName>Projects</StyledBannerName></h1>
                        </Element>
                    </div>
                    <div>
                        <hr style={{ marginTop: '8px', backgroundColor: '#0f473c', height: '3px', width: '50%' }}/>
                    </div>
                    
                    <Row style={{ marginRight: '0px', marginLeft: '0px', textAlign: 'left' }}>
                        { projects.map(project => <ProjectFigure showModal={this.showModalClickEvent} project={project} key={project.id} />) }
                    </Row>

                    <Project product={this.state.product} show={this.state.isShowModal} onHide={this.setModalClose}/>
                </Container>
            </div>
        );
    }

}

export default Projects;