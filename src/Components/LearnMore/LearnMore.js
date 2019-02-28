import React, { Component } from "react";
import styled from "styled-components";

const Section = styled.div`
    width: 100vw;
    text-align: center;
`;

const Container = styled.div`
    width: 100%;
    height: 100%;
    padding: 140px 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    // background: linear-gradient(
    //     165deg,
    //     rgba(239, 250, 255, 0) 40%,
    //     rgba(223, 241, 252, 0.7) 100%
    // );

    h2 {
        margin: 0px;
    }
`;

const GetStarted = styled.button`
    background: #ff6a5f;
    border-radius: 20px;
    border: 0px solid #ff6a5f;
    padding: 10px 30px;
    color: #fff;
    text-transform: uppercase;
    font-size: 1em;
    cursor: pointer;
    z-index: 2;
    text-align: center;

    ${props =>
        props.keyPage
            ? `
        align-self: flex-end;
        margin-right: 10%;
        margin-top: 70%;
        box-shadow: 0px 6px 6px rgba(0, 0, 0, 0.5);
    `
            : `
        padding: 10px 20px;
    `}
`;

class LearnMore extends Component {
    render() {
        return (
            <Section>
                <Container>
                    <h2>Learn More</h2>
                    <p style={{fontSize: "20px", marginTop: "5px"}}>We are onboarding exchanges, funds and institutions</p>
                    <GetStarted
                        className="hideGetStarted"
                        data-uk-toggle="target: #contact-form"
                    >
                        <div style={{padding: "0px 20px"}}>Get Started</div>
                    </GetStarted>
                </Container>
            </Section>
        );
    }
}
export default LearnMore;
