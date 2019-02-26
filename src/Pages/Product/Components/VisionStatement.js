import React, { Component } from "react";
import styled from "styled-components";

const Container = styled.div`
    background: #1e3543;
    color: #fff;
    padding: 90px 30px;
    text-align: center;

    h1 {
        color: #fff;
    }

    p {
        margin: 0px;
    }
`;

class VisionStatement extends Component {
    render() {
        return (
            <Container>
                <h1>Building for the Future of Finance</h1>
                <p>
                    Aegis Custody caters to institutions, exchanges, hedge
                    funds, investment firms and digital asset businesses
                </p>
            </Container>
        );
    }
}
export default VisionStatement;
