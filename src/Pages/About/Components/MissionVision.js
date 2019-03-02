import React, { Component } from "react";
import styled from "styled-components";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    h1 {
        font-family: gotham_book;
    }

    h2 {
        padding: 70px 30px 0 20px
    }
    
    p{
        padding: 0 30px 70px;
    }

    @media (max-width: 1000px) {
    }
`;

class MissionVision extends Component {
    render() {
        return (
            <div>
                <Container>
                    <p style={{ maxWidth: "650px", margin: "0 auto" }}>
                        Aegis Custody is a FinTech digital assets custodian and management company built for institutional customers including exchanges, funds, STOs and financial services institutions. Founded in 2018, we are an investor backed company based in San Francisco, CA with offices in South Dakota and in Taiwan. Aegis Custody is in the process of becoming a licensed qualified custodian and launched its self custody solution in Asia and the US.
                    </p>
                </Container>
                <Container style={{ backgroundColor: "#f9f9f9", width: "100%" }}>
                    <h2>Our Vision is to build the Future of Value</h2>
                    <p style={{ marginTop: "0", maxWidth: "650px", margin: "0 auto" }}>
                        We are on a mission to create the critical infrastructure for the rapidly growing digital assets markets by building custody technology, products and solutions that provides the most secure and simple digital asset custodian services for institutions and help unlock institutional capital into the digital assets space. We exercise ‘security first’ philosophy in everything we do - from product, technology, operations and customer integration.
                        </p>
                </Container>
            </div>
        );
    }
}
export default MissionVision;
