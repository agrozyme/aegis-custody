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

    .image2 {
        display: none;
    }
     style-={{textAlign: "center"}}
    h3 {
        display: none;
        color: white;
        text-align: center;
        margin: 10px auto;
    }

    @media (max-width: 1000px) {
        margin-left: 0;

        .image1 {
            display:none;
        }

        .image2 {
            display: flex;
        }

        h3 {
            display: flex;

        }
    

    }
`

const ProtectionImage = styled.div`
    background-image: url(./images/diagram3.png);
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
    min-height: 350px;
    z-index: 200;
    width: auto;
    margin: 20px;

    @media (max-width: 1000px) {
        min-height: 300px;
    }

`

const ContentImages = {
    height: "130px",
    width: "130px",
    margin: "0 auto",

}


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
                    <Body style={{minWidth: "100%"}}>
                        <h2 style={{color: "white", textAlign:"center", fontSize: "42px"}}>Protection Against</h2>

                        <img className="image1" style={{maxHeight: "200px"}} src="./images/diagram3.png"></img>

                       <img className="image2" src="./images/icons-49.png" style={ContentImages}></img>
                        <div style={{display: "flex", flexDirection:"column", justifyContent:"center"}}>
                        <h3 style-={{textAlign: "center"}}>INTERNAL THREATS</h3>
                       <h3 style-={{textAlign: "center"}}>EXTERNAL ADVERSARIES</h3>
                       <h3 style-={{textAlign: "center"}}>HUMAN ERROR</h3>
                        </div>


                    </Body>
                </ContentBox>


            </Container>
        );
    }
}
export default MainFeatures;
