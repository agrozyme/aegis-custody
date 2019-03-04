import React, { Component } from "react";
import styled from "styled-components";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;

    padding: 70px 20px;

    @media (max-width: 1000px) {
    }
`;

const Content = {
    p1: "Aegis Custody is a FinTech digital assets custodian and management company built for institutional customers including for exchanges, funds, STOs and financial services institutions. Founded in 2018, we are an investor backed company based in San Francisco, CA with offices in South Dakota and in Taiwan. Aegis Custody is in the process of becoming a licensed qualified custodian and launched its self custody solution in Asia and the US ",
    p2: "We exercise ‘security first’ philosophy in everything we do - from product, technology, operations and customer integration to provide the most secure and simple digital asset custodian services for institutions and help unlock institutional capital into the digital assets space",

}

class MissionVision extends Component {
    render() {
        return (
            <div>
                <Container>
                    <p style={{ maxWidth: "650px", margin: "0 auto" }}>
                        {Content.p1}
                    </p>
                </Container>
                <Container style={{ backgroundColor: "#f9f9f9", width: "100%" }}>
                    <p style={{ marginTop: "0", maxWidth: "650px", margin: "0 auto" }}>
                        {Content.p2}
                    </p>
                </Container>
            </div>
        );
    }
}
export default MissionVision;
