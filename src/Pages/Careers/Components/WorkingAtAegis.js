import React, { Component } from "react";
import styled from "styled-components";

const Container = styled.div`
    height: 80vh;
    background: #ffffff;
    display: flex;
    justify-content: center;
    align-items: center;
`;

class WorkingAtAegis extends Component {
    render() {
        return (
            <Container>
                <h2 style={{textAlign: "center", color: "white", lineHeight: "65px", fontSize: "55px", color: "#353535"}}>Join Our Team to <br></br>Build the Future of Finance</h2>
            </Container>
        );
    }
}
export default WorkingAtAegis;
