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
    background-position: 0px 310px;
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

const MultilayerImages = {
    height: "75px"
}

const Content = {
    p1: "Set transfer policies and distributed key structure",
    p2: "Create approval layers and identify key holders",
    p3: "Transfer digital assets to whitelisted addresses"
}

const Diagram = styled.div`
    background-image: url(./images/diagram1.png);
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
    min-height: 350px;
    z-index: 1;
    width: auto;
    margin: 20px;

    @media (max-width: 1000px) {
        min-height: 500px;
        background-image: url(./images/diagramvertical.png);
    }

`

class MultilayerInfo extends Component {
    render() {
        return (
            <Container>
                <h1>Multilayer Security</h1>
                <Diagram>
                </Diagram>
                <KeyItems>
                    <Row data-uk-scrollspy="target: > .multilayerInfoBox; cls:uk-animation-fade; delay: 200">
                        <div className="multilayerInfoBox">
                        <img src="./images/icons-20.png" alt="" style={MultilayerImages}/>
                            <p>
                                {Content.p1}
                            </p>
                        </div>
                        <div className="multilayerInfoBox">
                        <img src="./images/icons-32.png" alt="" style={MultilayerImages}/>
                            <p>
                                {Content.p2}
                            </p>
                        </div>
                        <div className="multilayerInfoBox">
                        <img src="./images/icons-25.png" alt="" style={MultilayerImages}/>
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
