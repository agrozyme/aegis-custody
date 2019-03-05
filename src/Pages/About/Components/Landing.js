import React, { Component } from "react";
import styled from "styled-components";

import Menu from "../../../Components/Menu";

const Container = styled.div`
    min-height: 650px;
    width: 100vw;
    overflow: auto;
    background: url(./images/skyline2.jpg);
    background-repeat: no-repeat;
    background-position: bottom;
    background-size: cover;

    // @media (max-width: 1000px) {
    //     background: url(./images/bridge2mobile.jpg);
    //     background-repeat: no-repeat;
    //     background-size: cover;
    // }

`;

//     background: url("/images/about-leader.png");

const ContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: #fff;
    height: 100%;
    min-height: 700px;

    @media (max-width: 600px) {
        height: 100%;
    }
    padding: 0px 20px;

    h2 {
        color: #fff;
    }

    @media (max-width: 1000px) {


        h2 {
            font-size: 30px !important;
            line-height: 40px !important;
        }

    }

    div {
        margin-top: -50px;
    }
`;

const AboutSection2 = {
    display: "flex",
    padding: "50px",
    margin: "0 auto",
    maxWidth: "800px"
};

class Landing extends Component {
    render() {
        return (
            <div>
                <Container>
                    <Menu dark={true} />
                    <ContentContainer>
                        <div style={{minHeight: "120px"}}></div>
                        <div style={{textAlign: "center", maxWidth: "800px" }}>
                            <h2 style={{color: "white", lineHeight: "65px", fontSize: "55px", color: "#353535"}}>Our Vision is to Build<br></br>the Future of Value</h2>
                            <p style={{color: "#353535"}}>We are on a mission to create the critical infrastructure for the rapidly growing digital assets markets by building custody technology, products and solutions</p>
                        </div>
                    </ContentContainer>
                </Container>
            </div>
        );
    }
}
export default Landing;
