import React from 'react';
import { Container } from 'react-bootstrap';
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

class Skills extends React.Component {

    render() {
        return (
            <div style={{ background: '#eaf1f1' }}>
                <Container style={{ padding: '60px 0' }}>
                    <div>
                        <h1><StyledBannerName>Skills</StyledBannerName></h1>
                    </div>
                    <div>
                        <hr style={{ marginTop: '8px', backgroundColor: '#0f473c', height: '3px', width: '50%' }}/>
                    </div>

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