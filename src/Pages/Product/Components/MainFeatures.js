import React, { Component } from "react";
import styled from "styled-components";

const Container = styled.div`
    background: #336985;
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
        font-size: 20px;
    }

    h2 {
        font-size: 42px;
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
    
        h2 {
            font-size: 36px;
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
    height: "75px",
    width: "75px",
    margin: "0 auto",

}


class MainFeatures extends Component {
    render() {
        return (
            <Container>

                <ContentBox style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                    <Body style={{minWidth: "100%"}}>
                        <h2 style={{color: "white", textAlign:"center"}}>Protection Against</h2>

                        <img className="image1" style={{maxHeight: "200px"}} src="./images/diagram3.png"></img>

                       <img className="image2" src="./images/icons-49.png" style={ContentImages}></img>
                        <div style={{display: "flex", flexDirection:"column", justifyContent:"center", marginTop: "15px"}}>
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
