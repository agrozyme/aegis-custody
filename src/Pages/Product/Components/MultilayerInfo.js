import React, { Component } from "react";
import styled from "styled-components";

const Container = styled.div`
    padding: 100px 30px;
    text-align: center;

    background-image: url(./images/bg-line.png);
    background-repeat: no-repeat;
    background-position: 0px 250px;
    background-size: 100% 2px;

    @media (max-width: 800px) {
        background: #fff;
    }
`;

const Content = styled.div`
    background: #fff;
    width: 70%;
    margin: 0px auto;

    @media (max-width: 800px) {
        width: 100%;
    }
`;

const Row = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    div {
        width: 50%;
        box-sizing: border-box;
        padding: 40px;

        @media (max-width: 800px) {
            width: 100%;
            padding: 20px;
        }
    }
`;

class MultilayerInfo extends Component {
    render() {
        return (
            <Container>
                <h1>Multilayer Security</h1>
                <Content>
                    <Row>
                        <div>
                            <img src="https://via.placeholder.com/50" alt="" />
                            <p>
                                Our Multisignature technology (“Multisig”)
                                provides security against attacks and tolerance
                                for losing access to a key(s) and our
                                distributed key management system eliminating
                                single points of failure
                            </p>
                        </div>
                        <div>
                            <img src="https://via.placeholder.com/50" alt="" />
                            <p>
                                All private keys are generated and stored in our
                                proprietary hardware device and the business
                                rules are burnt into the chip
                            </p>
                        </div>
                    </Row>

                    <Row>
                        <div>
                            <img src="https://via.placeholder.com/50" alt="" />
                            <p>
                                Operational work flows are designed to include
                                controls and policies with multiple approvals
                                and any fund transfers require approval from
                                pre-approved designated roles
                            </p>
                        </div>
                        <div>
                            <img src="https://via.placeholder.com/50" alt="" />
                            <p>
                                Account level protections can be set up with
                                withdrawal thresholds, pre-approved whitelisting
                                of specific addresses adding additional layer of
                                protection; while allowing the customer to
                                configure customizable account roles and
                                controls to align with your organizational
                                structure
                            </p>
                        </div>
                    </Row>

                    <Row>
                        <div>
                            <img src="https://via.placeholder.com/50" alt="" />
                            <p>
                                Simple and streamlined customer onboarding
                                process from account setup to activation with
                                customer support; Set up to quick and easy
                                integration available via web and/or desktop
                                application
                            </p>
                        </div>
                    </Row>
                </Content>
            </Container>
        );
    }
}
export default MultilayerInfo;
