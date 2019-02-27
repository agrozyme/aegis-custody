import React, { Component } from "react";
import styled from "styled-components";

const Container = styled.div`
    /* min-height: 60vh; */
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    text-align: center;
    h1 {
        font-family: gotham_book;
    }

    max-width: 600px;
    margin: 70px auto 70px;

    @media (max-width: 1000px) {
        padding: 20px 30px;
    }
`;

class MissionVision extends Component {
    render() {
        return (
            <div>
                <Container>
                    <h2 >Our Mission &amp; Vision</h2>
                    <p style={{ marginTop: "0", maxWidth: "600px"}}>
                        Duis mollis, est non commodo luctus, nisi erat porttitor
                        ligula, eget lacinia odio sem nec elit. Lorem ipsum dolor
                        sit amet, consectetur adipiscing elit. Aenean lacinia
                        bibendum nulla sed consectetur. Donec sed odio dui.
                        </p>
                </Container>
            </div>
        );
    }
}
export default MissionVision;
