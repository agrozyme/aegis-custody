import React, { Component } from "react";
import styled from "styled-components";

const Container = styled.div`
    min-height: 650px;
    background: #ffffff;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-image: url(./images/officebuilding.jpg);
    background-size: cover;
    background-position: bottom;
    background-repeat: no-repeat;

    h2 {
        @media (max-width: 1000px) {
            font-size: 35px !important;
            line-height: 45px !important;
            padding: 25px !important;
            overflow: hidden;
        } 
    }
`;

class WorkingAtAegis extends Component {
    render() {
        return (
            <Container>
                <h2 style={{textAlign: "center", color: "white", lineHeight: "65px", fontSize: "55px", color: "#353535", maxWidth: "800px", margin: "20px"}}>Join Our Team to Build the Future of Finance</h2>
                <a style={{textDecoration: "none"}}href="#openPositions" data-uk-scroll="true"><p style={{color: "#FF6A5F",}}>Open Positions</p></a>
            </Container>
        );
    }
}
export default WorkingAtAegis;
