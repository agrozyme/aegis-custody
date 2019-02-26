import React, { Component } from "react";
import styled from "styled-components";
import Menu from "../../../Components/Menu";

const Container = styled.div`
    width: 100vw;
    box-sizing: border-box;
    display: box;
    background: linear-gradient(
        165deg,
        rgba(239, 250, 255, 0) 40%,
        rgba(223, 241, 252, 0.7) 100%
    );
`;

const ContentContainer = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: calc(100vh - 50px);
`;

const Copy = styled.div`
    max-width: 30%;
    padding-bottom: 100px;
    margin: 0px auto;
    text-align: center;

    @media (max-width: 800px) {
        max-width: 90%;
    }
`;

const ContentItems = styled.div`
    max-width: 1000px;
    margin: 0 auto;
    padding: 40px;
`;

const ContentRow = {
    display: "flex"
};

const ContentBox = {
    width: "100%",
    minHeight: "170px",
    margin: "20px"
};

class Landing extends Component {
    render() {
        return (
            <Container>
                <Menu dark={true} />
                <ContentContainer>
                    <Copy>
                        <h1>Custody Solution</h1>
                        <p>
                            Multi-layer security designed with proprietary cold
                            storage, multi-signature accounts, and security and
                            operational controls
                        </p>
                    </Copy>
                </ContentContainer>
                <ContentItems>
                    <div style={ContentRow}>
                        <div style={ContentBox}>
                            <h3>Enhanced Security </h3>
                            <p>
                                Keep your digital assets safe with our
                                proprietary hardware cold storage for improved
                                security and redundancy
                            </p>
                        </div>
                        <div style={ContentBox}>
                            <h3>Simple </h3>
                            <p>
                                Manage and control access to account and
                                transaction activity with our custody management
                                software (web, desktop and mobile responsive
                                applications)
                            </p>
                        </div>
                    </div>
                    <div style={ContentRow}>
                        <div style={ContentBox}>
                            <h3>Account Management </h3>
                            <p>
                                Dedicated account management with a key focus on
                                customer and support, available to assist our
                                clients
                            </p>
                        </div>
                        <div style={ContentBox}>
                            <h3>Policy Controls </h3>
                            <p>
                                Business rules and operational workflows for a
                                secure end-end custody management including
                                access, approval, withdrawal, transaction
                                management and more
                            </p>
                        </div>
                    </div>
                </ContentItems>
            </Container>
        );
    }
}
export default Landing;
