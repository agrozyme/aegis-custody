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
                        <SquresCont>
                            <img
                                src="./images/about-leader-squares.svg"
                                alt=""
                            />
                        </SquresCont>
                        <div style={{ maxWidth: "400px" }}>
                            <h2>Our vision is to build the future of value</h2>
                            <p>
                                Aegis Custody is a FinTech digital assets
                                custodian and management company built for
                                institutional customers including exchanges,
                                funds, STOs and financial services institutions.
                                Founded in 2018, we are an investor backed
                                company based in San Francisco, CA with offices
                                in South Dakota and in Taiwan. Fully operational
                                and launched our self custody solution in Asia
                                and the US. Aegis Custody is In the process of
                                becoming a licensed qualified custodian very
                                soon.
                            </p>
                        </div>
                    </ContentContainer>
                </Container>
                <div style={AboutSection2} />
            </div>
        );
    }
}
export default Landing;
