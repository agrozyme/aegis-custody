import React, { Component } from "react";
import styled from "styled-components";

const Section = styled.div`
    text-align: center;
    padding: 140px 0;
    background-color: #eaeaea;

    a {
        text-decoration: none;
        color: white;
        background-color: #FF6A5F;
        padding: 10px 40px;
        border-radius: 100px;
    }
    

`

class Careers extends Component {
    render() {
        return (

            <Section>
                <h2>We Are Hiring</h2>
                <p>Check out our job opportunities</p>
                <a href="/careers">OPEN POSITIONS</a>
            </Section>

        )
    }
}

export default Careers