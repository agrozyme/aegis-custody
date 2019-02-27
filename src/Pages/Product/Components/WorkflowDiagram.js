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

    @media (max-width: 1000px) {
        padding: 50px 25px;
        background: #fff;
    }

    h1 {
        background: #fff;
        margin: 0px;
        padding-bottom: 20px;
        @media (max-width: 600px) {
            font-size: 1.7em;
        }
    }
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
    maxWidth: "350px",
    margin: "20px"
}

class WorkflowDiagram extends Component {
    render() {
        return (
            <Container>
                <h1>Workflow</h1>
                <img src="./images/user-flow.png" alt="" />
                <div style={ContentRow}  data-uk-scrollspy="target: > .workflowBox; cls:uk-animation-fade; delay: 200">
                    <div className="workflowBox" style={ContentBox}>
                        <div style={ContentImageWrap}><img src="./images/icons-19.png" style={ContentImages}></img></div>
                        <p>Operational work flows are designed to include controls and policies with multiple approvals and any fund transfers require approval from pre-approved designated roles</p>
                    </div>
                    <div className="workflowBox" style={ContentBox}>
                        <div style={ContentImageWrap}><img src="./images/icons-17.png" style={ContentImages}></img></div>
                        <p>All private keys are generated and stored in our proprietary hardware device and the business rules are burnt into the chip </p>
                    </div>
                </div>
            </Container>
        );
    }
}
export default WorkflowDiagram;
