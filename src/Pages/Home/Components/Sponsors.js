import React, { Component } from "react";
import styled from "styled-components";

const Section = styled.div`
    width: 100vw;
    padding: 135px 30px;
    box-sizing: border-box;
    background: #f4f4f4;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const EndorsementsInner = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    h2 {
        margin: 0px;
        margin-bottom: 20px;
        text-align: center;
    }

    div {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
    }

    div img {
        width: auto;
        height: 90px;
        margin: 30px 10px;

        @media (max-width: 1000px) {
            height: 80px;
            margin: 10px;
        }
    }
`;

class Sponsors extends Component {
    render() {
        return (
            <Section>
                <EndorsementsInner>
                    <h2>Trusted by Market Leaders</h2>
                    <div data-uk-scrollspy="target: > img; cls:uk-animation-fade; delay: 200">
                        <img style={{margin: "10px 30px 10px 30px"}} src="./images/logos1.png" alt="" />
                        <img style={{margin: "10px 30px 10px 30px"}} src="./images/logos2.png" alt="" />
                    </div>
                </EndorsementsInner>
            </Section>
        );
    }
}
export default Sponsors;
