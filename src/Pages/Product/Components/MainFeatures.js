import React, { Component } from "react";
import styled from "styled-components";

const Container = styled.div`
    background: #344854;
    color: #fff;
    padding: 40px 60px;
    display: flex;
    align-items: center;
    flex-wrap: wrap;

    p {
        margin: 0px;
        padding: 0px 20px;
    }

    @media (max-width: 600px) {
        padding: 40px 30px;
    }
`;

const Col = styled.div`
    width: ${props => props.width || "50%"};

    @media (max-width: 1000px) {
        width: 100%;
        margin: 20px auto;
    }
`;

const Coins = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 15px;

    img {
        height: 75px;
        margin-right: 20px;
        @media (max-width: 1000px) {
            margin-right: 0px;
        }
        ${props => props.coin && "height: 65px;"}
    }

    p {
        ${props =>
            props.support &&
            `
            font-family: gotham_book_italic;
            letter-spacing: 0.2em;
            text-transform: uppercase;
            margin-top: 20px;
            color: #fff;
        `}
        font-family: ingra, sans-serif;
    }
`;

const largeCopy = {
    fontSize: "25px"
};

const centered = {
    display: "flex",
    flexDirection: "column"
};

class MainFeatures extends Component {
    render() {
        return (
            <Container>
                <Col width="30%" style={centered}>
                    <Coins support={true}>
                        <p>We Currently Support</p>
                    </Coins>
                    <Coins coin={true}>
                        <img src="./images/coin-1.png" alt="" />
                        <img src="./images/coin-2.png" alt="" />
                        <img src="./images/coin-3.png" alt="" />
                    </Coins>
                    <Coins support={true}>
                        <p>and more coming soon</p>
                    </Coins>
                </Col>
                <Col width="70%">
                    <p style={largeCopy}>
                        Inherent technology designed with security controls to
                        prevent against external threats, distributed key
                        management system to safeguard from concentrated access,
                        institutional grade policies and procedures to protect
                        against human error.
                    </p>
                </Col>
            </Container>
        );
    }
}
export default MainFeatures;
