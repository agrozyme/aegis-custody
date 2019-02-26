import React, { Component } from "react";
import styled from "styled-components";

const Container = styled.div`
    /* min-height: 60vh; */
    padding: 100px 140px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    h1 {
        font-family: gotham_book;
    }

    @media (max-width: 1000px) {
        padding: 20px 30px;
    }
`;

class MissionVision extends Component {
    render() {
        return (
            <Container>
                <h1>Our Mission & Vision</h1>
                <p>
                    Duis mollis, est non commodo luctus, nisi erat porttitor
                    ligula, eget lacinia odio sem nec elit. Lorem ipsum dolor
                    sit amet, consectetur adipiscing elit. Aenean lacinia
                    bibendum nulla sed consectetur. Donec sed odio dui.
                </p>
            </Container>
        );
    }
}
export default MissionVision;
