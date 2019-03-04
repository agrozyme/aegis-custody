import React, { Component } from "react";
import styled from "styled-components";
// import { connect } from "http2";

const Container = styled.div`
    padding: 70px 30px;
    text-align: center;
    display: flex;
    flex-direction: column;
    background-image: url(./images/bg-line.png);
    background-repeat: no-repeat;
    background-position: 0px 250px;
    background-size: 100% 2px;

    @media (max-width: 800px) {
        background: #fff;
    }
`;

const KeyItems = styled.div`
    background: #fff;
    width: 70%;
    margin: 0px auto;

    @media (max-width: 800px) {
        width: 100%;
    }
`;

const Row = styled.div`
    display: flex;
    justify-content: center;
    @media (max-width: 800px) {
        flex-direction: column;
    }
    div {
        width: 350px;
        box-sizing: border-box;
        padding: 40px 40px 0 40px;

        @media (max-width: 800px) {
            width: 100%;
            padding: 20px;
        }
    }
`;

const Diagram = {
    width: "100%",
    maxWidth: "900px",
    backgroundColor: "lightgray",
    minHeight: "360px",
    margin: "40px auto"
}

const MultilayerImages = {
    height: "75px"
}

const Content = {
    p1: "Our Multisignature (“Multisig”) provides security against attacks and tolerance for losing access to a key(s)",
    p2: "Account level protections can be set up with pre-approved whitelisting, withdrawal thresholds adding an extra layer of protection",
    p3: "Simple and streamlined customer onboarding process from account setup to activation with designated account management"
}


class MultilayerInfo extends Component {
    render() {
        return (
            <Container>
                <h1>Multilayer Security</h1>
                <div style={Diagram}></div>
                <KeyItems>
                    <Row data-uk-scrollspy="target: > .multilayerInfoBox; cls:uk-animation-fade; delay: 200">
                        <div className="multilayerInfoBox">
                        <img src="./images/icons-21.png" alt="" style={MultilayerImages}/>
                            <p>
                            {Content.p1}
                            </p>
                        </div>
                        <div className="multilayerInfoBox">
                        <img src="./images/icons-20.png" alt="" style={MultilayerImages}/>
                            <p>
                                {Content.p2}
                            </p>
                        </div>
                        <div className="multilayerInfoBox">
                        <img src="./images/icons-16.png" alt="" style={MultilayerImages}/>
                            <p>
                            {Content.p3}
                            </p>
                        </div>
                    </Row>
                </KeyItems>
            </Container>
        );
    }
}
export default MultilayerInfo;
