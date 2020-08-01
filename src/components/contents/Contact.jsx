import React from 'react';
import { Container, Row, Col, FormControl, Button, Fade } from 'react-bootstrap';
import { Element } from 'react-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import CKEditor from 'ckeditor4-react';
import styled from 'styled-components';

const StyledBannerName = styled.span`
    font-family: 'Yanus';
    text-transform: uppercase;
    font-weight: 700;
    color: #0f473c;
`;

const defaultStateForm = {
    subject: '',
    name: '',
    email: '',
    message: '',
    subjectError: '',
    nameError: '',
    emailError: '',
    messageError: '',
    emailResponse: null,
    alertOpen: false
};

class Contact extends React.Component {

    constructor(props) {
        super(props);
        this.state = defaultStateForm;
    }

    changeHandler = e => {
        this.setState({[e.target.name]: e.target.value});
    }

    changeHandlerCKEditor = e => {
        this.setState({
            message: e.editor.getData()
        });
    }

    submitEmailHandler = e => {
        e.preventDefault();
        const isValid = this.validateForm();
        if (isValid) {
            this.sendEmailToMe();
        }
    }

    validateForm = () => {
        let subjectError = '';
        let nameError = '';
        let emailError = '';
        let messageError = '';
        
        if (!this.state.subject)
            subjectError = 'Subject is required!';

        if (!this.state.name)
            nameError = 'Name is required!';

        if (!this.state.email || !this.state.email.includes('@') || !this.state.email.includes('.'))
            emailError = 'Invalid email format!';

        if (!this.state.message)
            messageError = 'Message is required!';

        if (subjectError || nameError || emailError || messageError) {
            this.setState({ subjectError, nameError, emailError, messageError });
            return false;
        }
        return true;
    }

    async sendEmailToMe() {
        const { name, email, subject, message } = this.state;
        const payload = { name, email, subject, message };
        let response = await fetch(process.env.REACT_APP_NODEMAILER_API_URL_SEND_EMAIL, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
        });
        let emailResponse = await response.json();
        this.setState({ emailResponse, alertOpen: true });
        setTimeout(() => {
            this.setState(defaultStateForm);
        }, 5000);
    }

    render() {
        return (
            <div style={{ background: '#eaf1f1' }}>
                <Container style={{ padding: '60px 0' }}>
                    <div>
                        <Element id='scroll-contact' name='scroll-contact'>
                            <h1><StyledBannerName>Contact</StyledBannerName></h1>
                        </Element>
                    </div>
                    <div>
                        <hr style={{ marginTop: '8px', backgroundColor: '#0f473c', height: '3px', width: '50%' }}/>
                    </div>
                    <form onSubmit={this.submitEmailHandler}>
                        <Row className="pt-2 mr-0 ml-0" style={{ textAlign: 'left' }}>
                            <Col md="12">
                                {!this.state.emailResponse ? this.state.emailResponse :
                                <Fade in={this.state.alertOpen}>
                                <div className="alert alert-success" role="alert">
                                    {this.state.emailResponse.message}
                                </div>
                                </Fade>}
                            </Col>
                        </Row>
                        <Row className="pt-2 mr-0 ml-0" style={{ textAlign: 'left' }}>
                            <Col md="3"></Col>
                            <Col md="6">
                                <div className="mb-4">
                                    <label htmlFor="basic-url">Name</label>
                                    <FormControl
                                        name="name"
                                        value={this.state.name}
                                        onChange={this.changeHandler}
                                        style={{ borderRadius: '0px' }}
                                        placeholder="Name"
                                        aria-label="Name"
                                        aria-describedby="basic-addon1"
                                        />
                                </div>

                                <div className="mb-4">
                                    <label htmlFor="basic-url">Subject</label>
                                    <FormControl
                                        name="subject"
                                        value={this.state.subject}
                                        onChange={this.changeHandler}
                                        style={{ borderRadius: '0px' }}
                                        placeholder="Subject"
                                        aria-label="Subject"
                                        aria-describedby="basic-addon1"
                                        />
                                        {this.state.subjectError ? <p className="ml-5 text-danger font-italic">
                                            {this.state.subjectError}
                                        </p> : null}
                                </div>

                                <div className="mb-4">
                                    <label htmlFor="basic-url">Email Address</label>
                                    <FormControl
                                        name="email"
                                        value={this.state.email}
                                        onChange={this.changeHandler}
                                        style={{ borderRadius: '0px' }}
                                        placeholder="Email Address"
                                        aria-label="Email Address"
                                        aria-describedby="basic-addon1"
                                        />
                                </div>

                                <div className="mb-4">
                                    <label htmlFor="basic-url">Message</label>
                                    <CKEditor
                                        name="message"
                                        data={this.state.message}
                                        onChange={this.changeHandlerCKEditor}
                                    />
                                    {this.state.messageError ? <p className="ml-5 text-danger font-italic">
                                        {this.state.messageError}
                                    </p> : null}
                                </div>

                                <Button type="submit" variant="outline-primary" className="float-right">Send Email <FontAwesomeIcon icon={faPaperPlane} /></Button>
                            </Col>
                            <Col md="3"></Col>
                        </Row>
                    </form>

                </Container>
            </div>
        );
    }

}

export default Contact;