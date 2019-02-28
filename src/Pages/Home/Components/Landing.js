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
    //display background line
    ${props =>
        props.bgLine &&
        `
        background-image: url(./images/bg-line.png);
        background-repeat: no-repeat;
        background-position: 130px 0px;
        background-size: 2px 100%;
    `}
`;

const LeaderInner = styled.div`
    width: 100%;
    height: 100%;
    position: relative;
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
    margin-left: 60px;

    /* @media (max-width: 1000px) {
         justify-content: flex-start;
         padding-top: 20%;
     } */
`;

const TextCont = styled.div`
     margin-top: 35vh;
`;

const LeaderTitle = styled.h1`
    font-size: 4em;
    color: #fff;
    z-index: 3;
    margin: 0px;
    
    @media (max-width: 1255px) {
        font-size: 3em;
    }
    @media (max-width: 600px) {
        font-size: 1.8em;
    }
`;

const LeaderSubtitle = styled.h3`
    font-size: 1.5em;
    color: #fff;
    z-index: 2;
    margin: 0px;
    margin-bottom: 15px;
    font-family: ingra, sans-serif;
    font-weight: 400;

    @media (max-width: 1000px) {
        font-size: 1em;
    }
`;

const LeaderLine = styled.div`
    height: 3px;
    background: #ff6a5f;
    width: 100%;
    z-index: 0;
    margin: 15px 0px;
`;

const CallToAction = styled.div`
    text-align: center;
    z-index: 2;
    margin-top: auto;
    margin-bottom: 25px;

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
`;

const MountainBG = styled.div`
    min-width: 100%;
    height: 115%;
    position: absolute;
    left: 0px;
    bottom: 0px;
    background-image: url("./images/mountain-bg.png");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center bottom;
    z-index: 1;

    @media (max-width: 1000px) {
        height: 45%;
        background-position: 70% top;
    }
`;

class Landing extends Component {
    render() {
        return (
            <Container>
                <LeaderInner>
                    <Menu dark={true}/>
                    <LeaderContent>
                        <TextCont>
                            <LeaderTitle style={{color: "#353535"}}>
                                Institutional
                                <br />
                                Digital Asset Custody
                            </LeaderTitle>
                            {/* <LeaderLine /> */}
                            <LeaderSubtitle style={{color: "#353535"}}>
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
                                <img src="./images/down-arrow.svg" alt="" />
                            </a>
                        </CallToAction>
                    </LeaderContent>
                    <MountainBG className="animated fadeInUp fast" />
                </LeaderInner>
            </Container>
        );
    }
}
export default Landing;
