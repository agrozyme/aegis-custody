import React, { Component } from "react";
import styled from "styled-components";

import Menu from "../../../Components/Menu";

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 800px;

    ${props =>
        props.bgLine &&
        `
        background-image: url(./images/bg-line.png);
        background-repeat: no-repeat;
        background-position: 130px 0px;
        background-size: 2px 100%;
    `}

    @media (max-width: 1000px) {
        overflow: hidden;
        min-height: 400px;
        height: calc(100vh-40px);
    }
`;

const LeaderInner = styled.div`
    width: 100%;
    height: 100%;
    position: relative;
    display: flex;
    flex-direction: column;
    /* Permalink - use to edit and share this gradient: http://colorzilla.com/gradient-editor/#3082b3+0,9fdfff+100 */
    background: linear-gradient(
        to bottom,
        #F8FDFF,
        #AED3EA
    );
`;

const LeaderContent = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    z-index: 50 !important;
    @media (max-width: 1000px) {
        height: 500px;
        overflow: hidden;
    }

`;

const TextCont = styled.div`
     margin-top: 35vh;
        z-index: 3;
     @media (max-width: 1000px) {
         margin-top: 10px !important;
         margin-left: 0 !important;
     }

`;

const LeaderTitle = styled.h1`
    font-size: 4em;
    color: #fff;
    z-index: 1;
    margin: 0 0 0 60px;
    margin-left: 60px;

    @media (max-width: 1255px) {
        font-size: 36px;
    }

    @media (max-width: 1000px) {
        font-size: 36px;
        margin-bottom: 5px;
        margin-left: 40px;
        margin-right: 20px;
    }


    @media (min-width: 1400px){
        margin-left: 15vh;
        width: calc(100% - 15vh);
        overflow: hidden;
    }
`;

const LeaderSubtitle = styled.h3`
    font-size: 20px;
    color: #fff;
    z-index: 2;
    margin: 0px;
    margin-bottom: 15px;
    font-family: ingra, sans-serif;
    font-weight: 400;
    margin-left: 60px;

    @media (max-width: 1000px) {
        font-size: 17px;
        margin-left: 40px;
        margin-right: 20px;
    }


    @media (min-width: 1400px){
        margin-left: 15vh;
        width: calc(100% - 15vh);
        overflow: hidden;
    }
`;

const CallToAction = styled.div`
    text-align: center;
    z-index: 2;
    margin-top: auto;
    margin-bottom: 70px;

    #button {
        max-width: 280px;
        margin: 0px;
        margin-bottom: 18px;
        padding: 12px 18px;
        background: #fff;
        border: 0px solid #fff;
        font-size: 1.5em;
        font-family: franklin_bold;
        color: #626262;
        cursor: pointer;
        text-decoration: none;
    }

    @media (max-width: 1000px) {
        display: none;
    }
`;

const MountainBG = styled.div`
    min-width: 100%;
    height: 115%;
    position: absolute;
    left: 0px;
    bottom: 0px;
    background-image: url("./images/mountains11.png");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center bottom;
    z-index: 0;

    @media (max-width: 1000px) {
        background-image: url("./images/mountainmobile.png");
        z-index: 0 !important;

        h1{
            margin-left: 0 !important
        }
    }

`;

const LeaderLine = styled.div`
    height: 2.5px;
    width: 100vw;
    background-color: #FF6A5F;
    margin: 10px 0;

`

class Landing extends Component {
    render() {
        return (
            <Container>
                <LeaderInner>
                    <Menu dark={true}/>
                    <LeaderContent>
                    <MountainBG style={{zIndex: "10"}} />
                        <TextCont>
                            <LeaderTitle style={{color: "#353535", }}>
                                Institutional
                                <br />
                                Digital Asset Custody
                            </LeaderTitle>
                            <LeaderLine />
                            <LeaderSubtitle style={{color: "#353535",}}>
                                Bringing you secure and simple storage
                            </LeaderSubtitle>
                        </TextCont>
                        <CallToAction>
                            <a
                                id="button"
                                href="#section2"
                                data-uk-scroll="true"
                                style={{color: "white", backgroundColor: "#9DD1F1", boxShadow:"0 5px 5px rgba(0,0,0,.2)", borderRadius: "30px", fontSize: "18px"}}
                            >
                                Custody Solution
                            </a>
                            <br />
                            <br />
                            <a href="#section2" data-uk-scroll="true">
                                {/* <img style={{marginTop: "5px ", maxWidth: "45px", boxShadow: "0px 5px 5px rgba(0,0,0,.2)"}}src="./images/down-arrow2.svg" alt="" /> */}
                            </a>
                        </CallToAction>
                    </LeaderContent>

                </LeaderInner>
            </Container>
        );
    }
}
export default Landing;
