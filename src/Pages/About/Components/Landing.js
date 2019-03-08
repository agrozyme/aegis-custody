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

class Landing extends Component {
    render() {
        return (
            <div>
                <Container>
                    <Menu dark={true} />
                    <ContentContainer>
                        <div style={{minHeight: "120px"}}></div>
                        <div style={{textAlign: "center", maxWidth: "800px" }}>
                            <h2 style={{color: "white", lineHeight: "65px", fontSize: "55px", color: "#353535"}}>Our Mission</h2>
                            <p style={{color: "#353535"}}>Aegis Custody is building easy-to-use products and services that empower institutions to securely use blockchain technologies and digital assets. 
</p>
                        </div>
                    </ContentContainer>
                </Container>
            </div>
        );
    }
}
export default Landing;
