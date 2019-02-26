import React, { Component } from "react";
import styled from "styled-components";

const Section = styled.div`
    width: 100vw;
    height: auto;
    min-height: 100vh;

    background-image: url(./images/bg-line.png);
    background-repeat: no-repeat;
    background-position: 130px 0px;
    background-size: 2px 50%;
`;

const InnerSection = styled.div`
    width: 90%;
    min-height: 100vh;
    margin: 0px auto;
    background: linear-gradient(
        135deg,
        rgba(204, 234, 249, 0.1) 0%,
        rgba(157, 209, 241, 1) 100%
    );
    background-size: 65% 100%;
    background-repeat: no-repeat;
    background-position: 100% 100%;
    display: flex;
    align-items: center;

    @media (max-width: 600px) {
        background: #fff;
    }
`;

const Row = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    justify-content: center;
    flex-wrap: wrap-reverse;

    @media (max-width: 600px) {
        padding: 0px 0px 70px 0px;
    }
`;

const Col = styled.div`
    ${props =>
        props.left
            ? `
        width: 40%;
        min-width: 300px;
        z-index: 2;
        `
            : `
        width: 60%;
        min-width: 300px;
        margin-top: 50px;
        margin-bottom: 50px;
        padding: 0px 10%;
        box-sizing: border-box;
        background: #fff;
        display: flex;
        flex-direction: column;
        `}

    h2 {
        margin-top: auto;
        font-size: 2.25em;
    }
    p {
        margin-bottom: auto;
        margin-top: 0px;
    }
`;

const FlowCharImg = styled.img`
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.3);
    z-index: 2;
`;

// const FlowChartContainer = styled.div`
//     width: 90%;
//     max-width: 1200px;
//     height: calc(100% + 100px);
//     margin: 0px auto;
//     margin-top: -100px;
//     position: relative;
//     display: flex;
//     justify-content: space-around;
//     align-items: center;
//     background: linear-gradient(
//         135deg,
//         rgba(204, 234, 249, 0.1) 0%,
//         rgba(157, 209, 241, 1) 100%
//     );
//     background-size: 65% 100%;
//     background-repeat: no-repeat;
//     background-position: 100% 100%;
//     flex-wrap: wrap-reverse;

//     // @media (max-width: 1000px) {
//     //     height: auto;
//     //     // min-height: 100vh;
//     //     margin-top: 0px;
//     //     background: none;
//     // }
// `;

// const FlowChart = styled.img`
//     box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.3);
//     height: 550px;
//     z-index: 2;
// `;

// const FlowChartContent = styled.div`
//     width: 100%;
//     height: 450px;
//     // padding: 0px 12%;
//     font-family: ingra, sans-serif;
//     display: flex;
//     align-items: flex-start;
//     justify-content: center;
//     flex-direction: column;
//     background: #fff;
//     z-index: 1;

//     h2 {
//         font-size: 2.25em;
//         // margin: 0.3em 0px;
//     }
// `;

class DesignPhilosophy extends Component {
    render() {
        return (
            <Section id="section2">
                <InnerSection>
                    <Row>
                        <Col left={true}>
                            <FlowCharImg
                                src="./images/landing-flow-chart.png"
                                alt=""
                            />
                        </Col>

                        <Col right={true}>
                            <h2>Design Philosophy</h2>
                            <p>
                                Safeguarding digital assets is risky because of
                                the complexity of cryptographic systems.
                                Institutions do not yet have easy to use tools
                                for mitigating this risk.
                                <br />
                                <br />
                                Aegis Custody is a digital asset management
                                solution designed for institutions. It provides
                                security through an easy to use cold storage
                                experience, combining on chain multi signature
                                hardware wallets with flexible off chain
                                business logic.
                            </p>
                        </Col>
                    </Row>
                </InnerSection>
            </Section>
        );
    }
}
export default DesignPhilosophy;
