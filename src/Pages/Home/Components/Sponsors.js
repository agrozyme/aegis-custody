import React, { Component } from "react";
import styled from "styled-components";

const Section = styled.div`
    width: 100vw;
    height: 60vh;
    padding: 60px 30px;
    box-sizing: border-box;
    min-height: 60vh;
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
        margin-bottom: 30px;
    }

    div {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
    }

    div img {
        width: auto;
        height: 40px;
        margin: 30px 10px;

        @media (max-width: 1000px) {
            height: 30px;
        }
    }
`;

class Sponsors extends Component {
    render() {
        return (
            <Section>
                <EndorsementsInner>
                    <h2>Trusted and backed by</h2>
                    <div data-uk-scrollspy="target: > img; cls:uk-animation-fade; delay: 200">
                        <img src="./images/endorsements/1.png" alt="" />
                        <img src="./images/endorsements/6.png" alt="" />
                    </div>
                </EndorsementsInner>
            </Section>
        );
    }
}
export default Sponsors;
