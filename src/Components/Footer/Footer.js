import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
    width: 100vw;
    height: auto;
    padding: 40px 0px;
    background: #f7f7f7;
`;

const Row = styled.div`
    max-width: 900px;
    margin: 0px auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: flex-start;
`;

const Col = styled.div`
    box-sizing: border-box;
    padding: 0px 20px;

    h5 {
        margin-bottom: 5px;
    }

    p {
        margin: 0px;
    }

    width: auto;
    max-width: 50%;

    @media (max-width: 800px) {
        width: 100%;
        min-width: 100%;
        max-width: 100%;
        margin-bottom: 40px;
        text-align: center;
    }
    h5 {
        font-size: 13px;
    }
    p {
        font-size: 13px;
    }
`;

const LinkStyle = {
    textDecoration: "none",
    color: "#666666",
    fontSize: "13px",
    margin: "0"
};

{
    /* <p>
AegisCo is a Fintech digital assets management company
based in San Francisco, CA. Founded in 2018, Aegis
Custody is investor backed and provides Custody solution
to institutions, exchanges, funds and STOs.
</p> */
}

// F7F7F7

class Footer extends Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col>
                        <h5>Navigation</h5>
                        <Link to="/" style={LinkStyle}>
                            Home
                        </Link>
                        <br />
                        <Link to="/product" style={LinkStyle}>
                            Custody Solution
                        </Link>
                        <br />
                        <Link to="/about" style={LinkStyle}>
                            About
                        </Link>
                        <br />
                        <Link to="/careers" style={LinkStyle}>
                            Careers
                        </Link>
                    </Col>
                    <Col>
                        <h5>About</h5>
                        <p>
                        Founded in 2018, Aegis Custody is headquartered in San Francisco and is backed by a global asset management company. Aegis Custody offers products and services that allow financial institutions, exchanges, funds, and token issuers to transfer and store their digital assets. 
                        </p>
                    </Col>
                    <Col>
                        <h5>Aegis Custody</h5>
                        <p>Safe. Secure. Simple.</p>
                        <p>San Francisco, CA USA</p>
                        <p>Copyright &copy; 2019. </p>
                        <p>All Rights Reserved. 2.5</p>
                    </Col>
                </Row>
            </Container>
        );
    }
}
export default Footer;
