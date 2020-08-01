import React, { useEffect, useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import styled from 'styled-components';

const StyledEmphasis = styled.span`
    font-weight: bold;
    color: #0073b0;
`;

const Project = (props) => {    
    const [product, setProduct] = useState({});
    const [show, setShow] = useState(false);

    useEffect(() => {
        setProduct(props.product);
        setShow(true);
    },[props]);

    return (
        <Modal
            show={show}
            className="skill-modal"
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    <StyledEmphasis>{ product.displayName }</StyledEmphasis>
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p>{ product.description }</p>
                { product.url ? <a target="_blank" rel="noopener noreferrer" href={product.url}>{product.displayName}</a> : <p><i>Not available due to data and company privacy.</i></p> }
            </Modal.Body>
            <Modal.Footer>
                <Button className="skill-button-modal" onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}
 
export default Project;