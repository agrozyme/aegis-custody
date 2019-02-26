import React, { Component } from "react";
import styled from "styled-components";

const Container = styled.div`
    height: 70vh;
    padding: 60px;
    position: relative;

    @media (max-width: 1000px) {
        height: 50vh;
    }

    background: url(/images/mountain-shadow.png);
    background-repeat: no-repeat;
    background-position: center bottom;
    background-size: cover;

    #shadow {
        position: absolute;
        left: 0px;
        bottom: 0px;
    }

    h1 {
        margin-bottom: 0px;
        z-index: 2;
        text-align: center;
    }
`;

const InnerCont = styled.div`
    position: absolute;
    top: 0px;
    left: 0px;
    height: 100%;
    width: 100%;
    display: flex;
    align-items: flex-end;
    justify-content: center;

    background: url(/images/bg-line-yellow.png);
    background-repeat: no-repeat;
    background-position: 85% 0px;
    background-size: 2px 100%;

    @media (max-width: 800px) {
        background: none;
    }
`;

class MountainShadow extends Component {
    render() {
        return (
            <Container>
                <InnerCont>
                    <h1>User Stories/Use Case</h1>
                </InnerCont>
            </Container>
        );
    }
}
export default MountainShadow;
