import React, { Component } from "react";
import styled from "styled-components";

const Section = styled.div`
    // width: 100vw;
    // height: 100vh;
    // position: relative;
    // background: linear-gradient(
    //     135deg,
    //     rgba(255, 106, 95, 1) 0%,
    //     rgba(157, 209, 241, 1) 100%
    // );
    // padding: 30px;
    // display: flex;
    // flex-direction: column;
    // align-items: center;
    // box-sizing: border-box;
    // text-align: center;
`;

const Desktop = styled.div`
    width: 100vw;
    min-height: 100vh;
    position: relative;
    background: linear-gradient(
        135deg,
        rgba(255, 106, 95, 1) 0%,
        rgba(157, 209, 241, 1) 100%
    );
    padding: 80px;
    display: flex;
    flex-direction: column;
    align-items: center;
    box-sizing: border-box;
    text-align: center;

    @media (max-width: 1000px) {
        display: none;
    }
`;

const Mobile = styled.div`
    width: 100vw;
    min-height: 100vh;
    color: #fff;
    position: relative;
    background: linear-gradient(
        135deg,
        rgba(255, 106, 95, 1) 0%,
        rgba(157, 209, 241, 1) 100%
    );
    padding: 65px 30px 75px 30px;
    display: none;
    flex-direction: column;
    align-items: center;
    box-sizing: border-box;
    text-align: center;

    @media (max-width: 1000px) {
        display: flex;
    }
    div div {
        justify-content: space-around;
    }
`;

const Header = styled.div`
    max-width: 500px;
    color: #fff;
    margin-top: 30px;

    h2 {
        color: #fff;
        margin-bottom: 0px;
    }

    p {
        margin-top: 5px;
    }
`;

const Container = styled.div`
    width: 70%;
    height: 100%;
    margin: 0px auto;
    display: flex;
`;

const Col = styled.div`
    width: ${props => props.width || "50%"};
    height: 100%;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    color: #fff;

    h2 {
        font-size: 2.2em;
        margin: 0px;
        color: #fff;
    }
`;

const KeyImg = styled.img`
    width: 100%;
    position: absolute;
    z-index: 1;
    margin-left: -30px;
`;

const KeyFacts = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 15px;

    img {
        height: 75px;
        margin: 0 10px;
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

const Title = styled.h2`
    color: #fff;
    margin: 0px 0px 50px 0px;
`;

const Icons = styled.img`
    width: 80px;
`;

class ProductPreview extends Component {
    render() {
        return (
            <Section keyPage={true}>
                <Desktop>
                    <Header>
                        <h2>Aegis Custody Solution</h2>
                        <p>
                            Proprietary cold storage with integrated operational
                            workflows, security controls, and multi-signiture
                            accounts.
                        </p>
                    </Header>
                    <Container>
                        <Col width="55%" style={{minHeight: "400px"}}>
                            <KeyImg
                                src="./images/key-shadow.png"
                                alt="shadow"
                                data-uk-scrollspy="cls: uk-animation-slide-bottom-medium; repeat: true; offset-top: -300"
                            />
                            <KeyImg
                                src="./images/key.png"
                                alt="key"
                                data-uk-scrollspy="cls: uk-animation-slide-top-medium; repeat: true; offset-top: -300"
                            />
                        </Col>
                        <Col
                            width="45%"
                            data-uk-scrollspy="cls: uk-animation-slide-right; repeat: true; offset-top: -200" style={{ display: "flex", alignItems: "center", height: "100%", minHeight: "400px", marginLeft: "0px"}}
                        >
                            <KeyFacts>
                                <img src="./images/key-fact-2.png" alt="" />
                                <p>Multisig access and security</p>
                            </KeyFacts>
                            <KeyFacts>
                                <img src="./images/key-fact-3.png" alt="" />
                                <p style={{ textAlign: "left" }}>
                                    Distributed and tiered key
                                    <br />
                                    management system
                                </p>
                            </KeyFacts>
                        </Col>
                    </Container>
                    <div>
                        <KeyFacts support={true}>
                            <p>We Currently Support</p>
                        </KeyFacts>
                        <KeyFacts coin={true}>
                            <img src="./images/coin-1.png" alt="" />
                            <img src="./images/coin-2.png" alt="" />
                            <img src="./images/coin-3.png" alt="" />
                        </KeyFacts>
                    </div>
                </Desktop>

                <Mobile>
                    <Title>Aegis Custody Wallet</Title>
                    <img src="./images/key-horizontal.png" alt="" />
                    <br />
                    <Icons src="./images/key-fact-2.png" alt="" />
                    <p>Multisig access and security</p>
                    <br />
                    <Icons src="./images/key-fact-3.png" alt="" />
                    <p style={{ marginBottom: "30px" }}>
                        Distributed and tiered key
                        <br />
                        management system
                    </p>

                    <div>
                        <KeyFacts support={true}>
                            <p>We Currently Support</p>
                        </KeyFacts>
                        <KeyFacts coin={true}>
                            <img src="./images/coin-1.png" alt="" />
                            <img src="./images/coin-2.png" alt="" />
                            <img src="./images/coin-3.png" alt="" />
                        </KeyFacts>
                    </div>
                </Mobile>
            </Section>
        );
    }
}
export default ProductPreview;
