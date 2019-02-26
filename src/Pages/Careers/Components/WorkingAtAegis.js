import React, { Component } from "react";
import styled from "styled-components";

const Container = styled.div`
    height: 80vh;
    background: #4581af;
    display: flex;
    justify-content: center;
    align-items: center;
`;

class WorkingAtAegis extends Component {
    render() {
        return (
            <Container>
                <h1>Working At Aegis</h1>
            </Container>
        );
    }
}
export default WorkingAtAegis;
