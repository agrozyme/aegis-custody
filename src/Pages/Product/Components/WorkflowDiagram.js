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
        width: 100%;
        height: auto;
    }

    @media (max-width: 1000px) {
        padding: 50px 25px;
        background: #fff;
    }

    h1 {
        margin: 0px;
        padding-bottom: 20px;
        @media (max-width: 600px) {
            font-size: 1.7em;
        }
    }

    border-bottom: 2px solid #c4c4c4;
`;

const ContentRow = {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    marginTop: "40px"
}

const ContentImages = {
    maxHeight: "130px",
    maxWidth: "130px"
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
    }
`

class WorkflowDiagram extends Component {
    render() {
        return (
            <Container>
                <h1>How It Works</h1>
                <img src="./images/user-flow.png" alt="" />
                <WFBox style={ContentRow}  data-uk-scrollspy="target: > .workflowBox; cls:uk-animation-fade; delay: 200">
                    <div className="workflowBox" style={ContentBox}>
                        <div style={ContentImageWrap}><img src="./images/icons-21.png" style={ContentImages}></img></div>
                        <p>All private keys are stored on the chip set and our distributed key management system eliminates single points of failure</p>
                    </div>
                    <div className="workflowBox" style={ContentBox}>
                        <div style={ContentImageWrap}><img src="./images/icons-23.png" style={ContentImages}></img></div>
                        <p>Customizable singing policies are used to control asset transfers based on transaction size and frequency</p>
                    </div>
                </WFBox>
            </Container>
        );
    }
}

export default WorkflowDiagram;
