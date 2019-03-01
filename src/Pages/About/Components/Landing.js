import React, { Component } from "react";
import styled from "styled-components";

import Menu from "../../../Components/Menu";

const Container = styled.div`
    height: 100vh;
    width: 100vw;
    overflow: auto;
    background: #3082b3;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
`;

//     background: url("/images/about-leader.png");

const ContentContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    height: 100%;

    @media (max-width: 600px) {
        height: 100%;
    }
    padding: 0px 20px;

    background: linear-gradient(
        to bottom,
        rgba(255, 255, 255, 0) 0%,
        rgba(255, 255, 255, 0) 65%,
        rgba(255, 255, 255, 0) 76%,
        rgba(255, 255, 255, 1) 100%
    );

    h2 {
        color: #fff;
    }

    div {
        margin-top: -50px;
    }
`;

const SquresCont = styled.div`
    margin-top: -50px;
    margin-right: 100px;

    img {
        max-width: 300px;
    }

    @media (max-width: 1000px) {
        display: none;
        transform: translateX(50%)
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
                    <Menu dark={false} />
                    <ContentContainer>
                        {/* <SquresCont>
                            <img
                                src="./images/about-leader-squares.svg"
                                alt=""
                            />
                        </SquresCont> */}
                        <div style={{textAlign: "center", maxWidth: "800px" }}>
                            <h2 style={{color: "white", lineHeight: "65px", fontSize: "55px", color: "white"}}>Our vision is to build<br></br>the future of value</h2>
                            <a style={{textDecoration: "none"}}href="#ourTeam" data-uk-scroll="true"><p style={{color: "#FF6A5F",}}>Our Team</p></a>
                        </div>
                    </ContentContainer>
                </Container>
                <div style={AboutSection2} />
            </div>
        );
    }
}
export default Landing;
