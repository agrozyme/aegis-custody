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
    position: relative;
    background: linear-gradient(
        135deg,
        #73A5BD,
        #6495B2
    );
    padding: 70px 20px 100px 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    box-sizing: border-box;
    text-align: center;

    @media (max-width: 1000px) {
        .renderBox {
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }
    }
`;

const Header = styled.div`
    max-width: 550px;
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

const ProductImage = styled.div`

    img { max-height: 300px; }

    .productImage:hover {
        .imagesrc {
            margin: 0 20px;
        }
    }
`

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
                        <h2 style={{ fontSize: "36px" }}>Aegis Custody Solution</h2>
                        <p>
                            Proprietary cold storage with integrated operational
                            workflows, security controls, and multi-signiture
                            accounts.
                        </p>
                    </Header>

                    <div className={"renderBox"} style={{ display: "flex", justifyContent: "center", color: "white" }} >
                        <div className="supportedCoins" style={{ margin: "15px", display: "flex", alignContent: "center", maxWidth: "250px", flexWrap: "wrap" }}>
                            <p style={{ minWidth: "100%", margin: "0 0 15px 0" }}>We Currently Support</p>
                            <div style={{ minWidth: "100%", display: "flex", justifyContent: "center" }}>
                                <img style={{ maxHeight: "50px", margin: "10px" }} src="./images/coin-1.png" alt="" />
                                <img style={{ maxHeight: "50px", margin: "10px" }} src="./images/coin-2.png" alt="" />
                                <img style={{ maxHeight: "50px", margin: "10px" }} src="./images/coin-3.png" alt="" />
                            </div>
                        </div>
                        <ProductImage className="productImage" style={{ margin: "15px", }}>
                            <a href="/product">
                                <img className="imagesrc" src="./images/mockuprenders-5.png"></img>
                            </a>
                        </ProductImage>
                        <div className="keyFeatures" style={{ margin: "15px", maxWidth: "250px", display: "flex", alignContent: "center", height: "300px", flexWrap: "wrap" }}>
                            <div style={{ minWidth: "100%", marginBottom: "15px" }}>
                                <img style={{ maxHeight: "65px", }} src="./images/icons-27.png"></img>
                                <p style={{ margin: "0" }}>Multisig access and security</p>
                            </div>
                            <div style={{ minWidth: "100%", }}>
                                <img style={{ maxHeight: "65px", }} src="./images/icons-22.png"></img>
                                <p style={{ margin: "0" }}>Distributed and tiered key management system</p>
                            </div>

                        </div>
                    </div>
                </Desktop>
            </Section>
        );
    }
}
export default ProductPreview;
