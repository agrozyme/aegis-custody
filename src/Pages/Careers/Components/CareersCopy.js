import React, { Component } from "react";
import styled from "styled-components";

const Section = {
    padding: "25px 20px",
}

const Row = {
    display: "flex",
    justifyContent: "center"
}

const Image = {
    height: "350px",
    width: "500px",
    backgroundColor: "lightgray",
    margin: "20px"
}

const Copy = {
    maxWidth: "500px",
    margin: "20px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    padding: "20px"
}

const RowSection = styled.div`


    @media (max-width: 1000px) {
        flex-direction: column;
        
        div {
            margin: 0 !important;
            max-width: 100% !important;
        }

    .careerImage {
        display: none;
    }
    }

`

class CareersCopy extends Component {
    render() {
        return (
            <div style={{paddingTop: "35px"}}>
                <div style={Section}>
                    <RowSection style={Row}>
                        <div className="careerImage" style={Image}></div>
                        <div style={Copy}>
                            <h3 style={{ margin: "0 0 15px 0" }}>Working at Aegis</h3>
                            <p style={{ margin: "0" }}>We are a team of highly committed and passionate individuals bringing tremendous depth of experience, skills, and talents to develop the best infrastructure for the rapidly growing global digital assets market. We have taken up an important challenge and motivated to play a vital role in shaping the ecosystem. </p>
                        </div>
                    </RowSection>
                </div>
                <div style={Section}>
                    <RowSection style={Row}>
                        <div style={Copy}>
                            <h3 style={{ margin: "0 0 15px 0" }}>Our Culture</h3>
                            <p style={{ margin: "0" }}>We are building our culture carefully and deliberately. Our values are constantly in development to reflect our Aegis family’s values. However, the fundamentals don’t change - we aim to uphold to higher standards of excellence in every dimension - global mindset, respect for all, curious, fast-moving, learning, fun, committed. </p>
                        </div>
                        <div className="careerImage" style={Image}></div>
                    </RowSection>
                </div>
            </div>
        );
    }
}
export default CareersCopy;
