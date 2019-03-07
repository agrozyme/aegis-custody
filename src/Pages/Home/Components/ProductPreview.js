import React, { Component } from "react";
import styled from "styled-components";

const Section = styled.div`
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

const ProductImage = styled.div`

    img { max-height: 300px; }

    .productImage:hover {
        .imagesrc {
            margin: 0 20px;
        }
    }
`

const Content = {
    paragraph1: "Aegis Custody provides institutional-grade security through an intuitive combination of cold storage hardware, multisig wallets, and policy-based approvals."

}

class ProductPreview extends Component {
    render() {
        return (

            <Section keyPage={true}>
                <Desktop>
                    <Header>
                        <h2 style={{ fontSize: "36px" }}>Aegis Custody Solution</h2>
                        <p>
                        {Content.paragraph1}
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
                                <img style={{ maxHeight: "65px", }} src="./images/icons-30.png"></img>
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
