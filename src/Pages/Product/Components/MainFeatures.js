import React, { Component } from "react";
import styled from "styled-components";

const Container = styled.div`
    background: linear-gradient(to top, #344854, #4C626B);
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
    p1: "from internal threats, external adversaries, and human error."
}

const Body = styled.div`
    @media (max-width: 1000px) {
        margin-left: 0;
    }
`

const ProtectionImage = styled.div`
    display: flex;
    justify-content: center;
    img {
        max-height: 250px;
    }
`

class MainFeatures extends Component {
    render() {
        return (
            <Container>

                <ContentBox style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                    {/* <Coins style={{minWidth: "260px", display: "flex", alignItems: "center", flexDirection: "column"}}>
                        <div style={{textAlign: "center"}}><p style={{fontSize: "25px", margin: "0"}}>We Currently Support</p></div>
                        <div style={{display: "flex", justifyContent: "space-between", margin: "25px 0"}}>
                            <img style={{maxHeight: "60px"}} src="./images/coin-1.png" alt="" />
                            <img style={{maxHeight: "60px"}} src="./images/coin-2.png" alt="" />
                            <img style={{maxHeight: "60px"}} src="./images/coin-3.png" alt="" />
                        </div>
                        <div style={{textAlign: "center"}}><p style={{fontSize: "25px", margin: "0"}}>and more coming soon</p></div>
                    </Coins> */}
                    <Body style={{minWidth: ""}}>
                        <h2 style={{color: "white", textAlign:"center", fontSize: "42px"}}>Protection Against</h2>
                        <ProtectionImage>
                            <img src="./images/diagram3.png"></img>
                        </ProtectionImage>
                    </Body>
                </ContentBox>


            </Container>
        );
    }
}
export default MainFeatures;
