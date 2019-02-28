import React, { Component } from "react";
import styled from "styled-components";

const Sponsors = styled.div`

`

class OurSponsors extends Component {

    render() {
        return (
            <Sponsors>
                <div style={{ padding: "70px 0", backgroundColor: "#1E5160" }}>
                    <h2 style={{ textAlign: "center", marginBottom: "0", color:"white" }}>Investors</h2>
                    <div style={{ display: "flex", justifyContent: "center" }} data-uk-scrollspy="target: > img; cls:uk-animation-fade; delay: 200">
                        <img style={{ margin: "30px", maxHeight: "90px" }} src="./images/logos1w.png" alt="" />
                        <img style={{ margin: "30px", maxHeight: "90px" }} src="./images/logos2w.png" alt="" />
                    </div>
                </div>
                <div style={{ padding: "70px 0"}}>
                    <h2 style={{ textAlign: "center" }}>Partners</h2>
                    <div style={{ display: "flex", justifyContent: "center", maxWidth: "650px", margin: "0 auto", textAlign: "center" }}>
                        <p>We believe in collaboration as that’s the only way to build a new ecosystem. Let’s explore synergies. Reach out to us to learn more about partnerships <a style={{color: "#FF6A5F", textDecoration: "none"}} href="mailto:partnerships@aegisco.io ">partnerships@aegisco.io </a></p>
                    </div>
                </div>
            </Sponsors>

        );
    }
}
export default OurSponsors;
