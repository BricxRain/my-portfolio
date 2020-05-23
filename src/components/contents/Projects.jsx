import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Element } from 'react-scroll';
import '../../css/projects.css';
import styled from 'styled-components';
import PesoSystem from '../modals/projects/PesoSystem';
import RaceTechPH from '../modals/projects/RaceTechPH';
import WorkBook from '../modals/projects/WorkBook';
import AcrossWeb from '../modals/projects/AcrossWeb';
import IbidenHRIS from '../modals/projects/IbidenHRIS';
import IbidenLMS from '../modals/projects/IbidenLMS';
import LegareSystem from '../modals/projects/LegareSystem';
import MappleTour from '../modals/projects/MappleTour';
import SAMSAdmin from '../modals/projects/SAMSAdmin';


const StyledBannerName = styled.span`
    font-family: 'Yanus';
    text-transform: uppercase;
    font-weight: 700;
    color: #0f473c;
`;

const defaultState = {
    isPesoSystem: false,
    isRaceTechPH: false,
    isWorkBook: false,
    isAcrossWeb: false,
    isIbidenHRIS: false,
    isIbidenLMS: false,
    isLegareSystem: false,
    isMappleTour: false,
    isSAMSAdmin: false
}

class Projects extends React.Component {

    state = defaultState;

    setModalClose = () => {
        this.setState(defaultState);
    }

    showModalPesoSystem = () => {
        this.setState({
            isPesoSystem: true
        });
    }

    showModalRaceTechPH = () => {
        this.setState({
            isRaceTechPH: true
        });
    }

    showModalWorkBook = () => {
        this.setState({
            isWorkBook: true
        });
    }

    showModalAcrossWeb = () => {
        this.setState({
            isAcrossWeb: true
        });
    }

    showModalIbidenHRIS = () => {
        this.setState({
            isIbidenHRIS: true
        });
    }

    showModalIbidenLMS = () => {
        this.setState({
            isIbidenLMS: true
        });
    }

    showModalLegareSystem = () => {
        this.setState({
            isLegareSystem: true
        });
    }

    showModalMappleTour = () => {
        this.setState({
            isMappleTour: true
        });
    }

    showModalSAMSAdmin = () => {
        this.setState({
            isSAMSAdmin: true
        });
    }

    render() {
        return (
            <div>
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
                        <Col md="6">
                            <figure onClick={this.showModalPesoSystem} className="snip1104 blue">
                                <img src={require('../../images/projects/pesoemployment.png')} alt="sample34" />
                                <figcaption>
                                    <h2>PESO <span> System</span></h2>
                                </figcaption>
                            </figure>
                        </Col>

                        <Col md="6">
                            <figure onClick={this.showModalRaceTechPH} className="snip1104 green">
                                <img src={require('../../images/projects/racetech.png')} alt="sample35" />
                                <figcaption>
                                    <h2>Race <span> TechPH</span></h2>
                                </figcaption>
                            </figure> 
                        </Col>

                        <Col md="6">
                            <figure onClick={this.showModalWorkBook} className="snip1104 green">
                                <img src={require('../../images/projects/workbook.png')} alt="sample34" />
                                <figcaption>
                                    <h2>Work <span> Book</span></h2>
                                </figcaption>
                            </figure>
                        </Col>

                        <Col md="6">
                            <figure onClick={this.showModalAcrossWeb} className="snip1104 blue">
                                <img src={require('../../images/projects/acrossweb.png')} alt="sample33" />
                                <figcaption>
                                    <h2>Across <span> WEB</span></h2>
                                </figcaption>
                            </figure>
                        </Col>

                        <Col md="6">
                            <figure onClick={this.showModalIbidenHRIS} className="snip1104 blue">
                                <img src={require('../../images/projects/acrossweb.png')} alt="sample35" />
                                <figcaption>
                                    <h2>Ibiden <span> HRIS</span></h2>
                                </figcaption>
                            </figure> 
                        </Col>

                        <Col md="6">
                            <figure onClick={this.showModalIbidenLMS} className="snip1104 green">
                                <img src={require('../../images/projects/acrossweb.png')} alt="sample34" />
                                <figcaption>
                                    <h2>Ibiden <span> LMS</span></h2>
                                </figcaption>
                            </figure>
                        </Col>

                        <Col md="6">
                            <figure onClick={this.showModalLegareSystem} className="snip1104 green">
                                <img src={require('../../images/projects/acrossweb.png')} alt="sample34" />
                                <figcaption>
                                    <h2>legare <span> System</span></h2>
                                </figcaption>
                            </figure>
                        </Col>

                        <Col md="6">
                            <figure onClick={this.showModalMappleTour} className="snip1104 blue">
                                <img src={require('../../images/projects/acrossweb.png')} alt="sample35" />
                                <figcaption>
                                    <h2>Mapple <span> Tour</span></h2>
                                </figcaption>
                            </figure> 
                        </Col>

                        <Col md="6">
                            <figure onClick={this.showModalSAMSAdmin} className="snip1104 blue">
                                <img src={require('../../images/projects/acrossweb.png')} alt="sample34" />
                                <figcaption>
                                    <h2>SAMS <span> Admin</span></h2>
                                </figcaption>
                            </figure>
                        </Col>
                    </Row>

                    <PesoSystem show={this.state.isAcrossWeb} onHide={this.setModalClose}/>
                    <RaceTechPH show={this.state.isRaceTechPH} onHide={this.setModalClose}/>
                    <WorkBook show={this.state.isWorkBook} onHide={this.setModalClose}/>
                    <AcrossWeb show={this.state.isAcrossWeb} onHide={this.setModalClose}/>
                    <IbidenHRIS show={this.state.isIbidenHRIS} onHide={this.setModalClose}/>
                    <IbidenLMS show={this.state.isIbidenLMS} onHide={this.setModalClose}/>
                    <LegareSystem show={this.state.isLegareSystem} onHide={this.setModalClose}/>
                    <MappleTour show={this.state.isMappleTour} onHide={this.setModalClose}/>
                    <SAMSAdmin show={this.state.isSAMSAdmin} onHide={this.setModalClose}/>
                </Container>
            </div>
        );
    }

}

export default Projects;