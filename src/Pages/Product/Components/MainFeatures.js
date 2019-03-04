import React, { Component } from "react";
import styled from "styled-components";

const Container = styled.div`
    background: #344854;
    color: #fff;
    padding: 60px 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
`;

const ContentBox = styled.div`
    max-width: 1000px;

    @media (max-width: 1000px) {
        flex-direction: column;
    }

`

const Coins = styled.div`
    @media (max-width: 1000px) {
        margin-bottom: 60px
    }
`

const Content = {
    p1: "Our inherent technology is designed with a core philosophy of ‘security first’ controls to prevent against external threats, distributed key management system to safeguard from concentrated access and attacks and institutional grade policies & procedures to protect against human error"
}

class MainFeatures extends Component {
    render() {
        return (
            <Container>

                <ContentBox style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                    <Coins style={{minWidth: "260px", display: "flex", alignItems: "center", flexDirection: "column"}}>
                        <div style={{textAlign: "center"}}><p style={{fontSize: "25px", margin: "0"}}>We Currently Support</p></div>
                        <div style={{display: "flex", justifyContent: "space-between", margin: "25px 0"}}>
                            <img style={{maxHeight: "60px"}} src="./images/coin-1.png" alt="" />
                            <img style={{maxHeight: "60px"}} src="./images/coin-2.png" alt="" />
                            <img style={{maxHeight: "60px"}} src="./images/coin-3.png" alt="" />
                        </div>
                        <div style={{textAlign: "center"}}><p style={{fontSize: "25px", margin: "0"}}>and more coming soon</p></div>
                    </Coins>
                    <div style={{minWidth: "", marginLeft: "50px"}}>
                        <p style={{fontSize: "25px", margin: "0"}}>{Content.p1}</p>
                    </div>
                </ContentBox>


            </Container>
        );
    }
}
export default MainFeatures;
