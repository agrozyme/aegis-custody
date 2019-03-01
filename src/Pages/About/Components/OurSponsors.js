import React, { Component } from "react";
import styled from "styled-components";

const Sponsors = styled.div`

    .text {
        padding: 70px 20px !important;
    }

`

const Section = styled.div`
    width: 100vw;s
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

class OurSponsors extends Component {

    render() {
        return (
            <Sponsors>
                <Section style={{paddingTop: "70px", paddingBottom: "50px"}}>
                    <EndorsementsInner>
                        <h2>Trusted and backed by</h2>
                        <div data-uk-scrollspy="target: > img; cls:uk-animation-fade; delay: 200">
                            <img style={{margin: "30px"}} src="./images/logos1.png" alt="" />
                            <img style={{margin: "30px"}} src="./images/logos2.png" alt="" />
                        </div>
                    </EndorsementsInner>
                </Section>
                <div className="text" style={{ padding: "70px 0"}}>
                    <h2 style={{ textAlign: "center" }}>Partners</h2>
                    <div style={{ display: "flex", justifyContent: "center", maxWidth: "650px", margin: "0 auto", textAlign: "center" }}>
                        <p>We believe in collaboration as that’s the only way to build a new ecosystem. Let’s explore synergies. Reach out to us to learn more about partnerships <a style={{color: "#FF6A5F", textDecoration: "none"}} href="mailto:partnerships@aegisco.io ">partnerships@aegisco.io </a></p>
                    </div>
                </div>
            </Sponsors>

        );
    }
}
export default OurSponsors;
