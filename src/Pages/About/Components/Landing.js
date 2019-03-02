import React, { Component } from "react";
import styled from "styled-components";

import Menu from "../../../Components/Menu";

const Container = styled.div`
    min-height: 700px;
    width: 100vw;
    overflow: auto;
    background: url(./images/bridge3.jpg);
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;

    @media (max-width: 1000px) {
        background: url(./images/bridge2mobile.jpg);
    }

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
                    <Menu dark={false} />
                    <ContentContainer>
                        {/* <SquresCont>
                            <img
                                src="./images/about-leader-squares.svg"
                                alt=""
                            />
                        </SquresCont> */}
                        <div style={{minHeight: "120px"}}></div>
                        <div style={{textAlign: "center", maxWidth: "800px" }}>
                            <h2 style={{color: "white", lineHeight: "65px", fontSize: "55px", color: "white"}}>Our Vision is to Build<br></br>the Future of Value</h2>
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
