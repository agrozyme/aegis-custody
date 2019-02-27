import React, { Component } from "react";
import styled from "styled-components";

const Section = {
    // backgroundColor: 'pink',
    padding: "35px 20px",
}

const Row = {
    display: "flex",
    justifyContent: "center"
}

const Image = {
    height: "350px",
    width: "500px",
    backgroundColor: "lightgray",
    margin: "20px"
}

const Copy = {
    maxWidth: "500px",
    margin: "20px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    padding: "20px"
}

class CareersCopy extends Component {
    render() {
        return (
            <div style={{paddingTop: "35px"}}>
                <div style={Section}>
                    <div style={Row}>
                        <div style={Image}></div>
                        <div style={Copy}>
                            <h3 style={{ margin: "0 0 15px 0" }}>Working at Aegis</h3>
                            <p style={{ margin: "0" }}>We’ve taken a huge challenge and made it into our mission: To create an open financial system for the world. To achieve this, we are building a team of smart, creative, passionate optimists, the kind of people who see opportunity where others see roadblocks. If this sounds like you, check out our open roles.</p>
                        </div>
                    </div>
                </div>
                <div style={Section}>
                    <div style={Row}>
                        <div style={Copy}>
                            <h3 style={{ margin: "0 0 15px 0" }}>Our Culture</h3>
                            <p style={{ margin: "0" }}>We’ve taken a huge challenge and made it into our mission: To create an open financial system for the world. To achieve this, we are building a team of smart, creative, passionate optimists, the kind of people who see opportunity where others see roadblocks. If this sounds like you, check out our open roles.</p>
                        </div>
                        <div style={Image}></div>
                    </div>
                </div>
            </div>
        );
    }
}
export default CareersCopy;
