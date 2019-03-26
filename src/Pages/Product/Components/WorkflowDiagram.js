import React, { Component } from "react";
import styled from "styled-components";

const Container = styled.div`
    min-height: 50vh;
    padding: 70px 50px;
    text-align: center;
    background-image: url(./images/bg-line.png);
    background-repeat: no-repeat;
    background-position: 150px 0px;
    background-size: 2px 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    

    img {

    }

    @media (max-width: 1000px) {
        padding: 50px 25px;
        background: #fff;
    }

    h1 {
        margin: 0px;
        padding-bottom: 20px;
        @media (max-width: 600px) {
            font-size: 36px;
        }
    }

    border-bottom: 2px solid #CFCFCF;
`;

const Diagram = styled.div`

    width: 100%;
    height: auto;
    min-height: 500px;
    background-image: url(./images/user-flow3.png);
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;

    @media (max-width: 1000px) {
        background-image: url(./images/flowvertical2.png);
        min-height: 700px;
        margin: 0 auto;
    }
    

`

const ContentRow = {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    marginTop: "40px"
}

const ContentImageWrap = {
    minWidth: "100%",
    display: "flex",
    justifyContent: "center"
}

const ContentBox = {
    maxWidth: "370px",
    margin: "20px 30px"
}

const WFBox = styled.div`
    @media (max-width: 1000px) {
        flex-direction: column;
        justify-content: center;
        align-items: center;
        .workflowBox {
            width: 100% !important;

        }

        img {
            height: 75px;
            width: 75px;
        }
    }
`

const ContentImage = styled.div`
    
    img {
        max-height: 75px;
    max-width: 75px; 

    @media (max-width: 1000px) {
        max-height: 75px;
        max-width: 75px  
    }
    
}
`

class WorkflowDiagram extends Component {
    render() {
        return (
            <Container>
                <h1>How It Works</h1>
                <Diagram></Diagram>
                <WFBox style={ContentRow}  data-uk-scrollspy="target: > .workflowBox; cls:uk-animation-fade; delay: 200">
                    <div className="workflowBox" style={ContentBox}>
                        <ContentImage><img src="./images/icons-21.png"></img></ContentImage>
                        <p>All private keys are stored on security chips and our distributed key management system eliminates single points of failure</p>
                    </div>
                    <div className="workflowBox" style={ContentBox}>
                        <ContentImage><img src="./images/icons-23.png"></img></ContentImage>
                        <p>Customizable signing policies are used to control asset transfers based on transaction size and frequency</p>
                    </div>
                </WFBox>
            </Container>
        );
    }
}

export default WorkflowDiagram;
