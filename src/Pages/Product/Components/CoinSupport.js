import React, { Component } from "react";
import styled from "styled-components";

const Container = styled.div`
    min-height: 50vh;
    padding: 150px 50px;
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

    img {
        width: 100%;
        height: auto;
    }
`;

class CoinSupport extends Component {
    render() {
        return (
            <Container>
                <h1>Workflow</h1>
                <img src="./images/user-flow.png" alt="" />
            </Container>
        );
    }
}
export default CoinSupport;
