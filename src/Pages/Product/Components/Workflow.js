import React, { Component } from "react";
import styled from "styled-components";

const Container = styled.div`
    padding: 50px 50px 0px 50px;
    display: flex;
    @media (max-width: 1000px) {
        flex-wrap: wrap;
    }

    background: url(/images/bg-line-blue.png);
    background-repeat: no-repeat;
    background-position: 0px 80px;
    background-size: 100% 2px;

    @media (max-width: 800px) {
        background: none;
    }

    #video,
    #text {
        background: #fff;
        width: 50%;
        padding: 0px 50px;

        @media (max-width: 1000px) {
            width: 100%;
            padding: 0px 10px;
        }
    }

    #video {
        margin-top: -50px;
        z-index: 2;
        @media (max-width: 1000px) {
            text-align: center;
            margin: 20px auto;
        }
    }
`;

class Workflow extends Component {
    render() {
        return (
            <Container>
                <div id="text">
                    <h2>Hardware</h2>
                    <p>
                        Aegis Custody Solution offers institutions self &amp;
                        custom custodian offerings to store and manage digital
                        assets in a secure, simple and compliant manner. Our
                        integrated solution is ideal for customers like
                        exchanges, hedge funds, and institutions to securely
                        store their crypto and digital assets.
                    </p>
                </div>

            </Container>
        );
    }
}
export default Workflow;
