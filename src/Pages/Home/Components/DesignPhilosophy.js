import React, { Component } from "react";
import styled from "styled-components";

const Content = {
    paragraph1: "Safeguarding digital assets is risky because of the complexity of cryptographic systems. Custody solutions enabled hackers to steal an average of $2.7m worth of cryptocurrency every day of 2018",
    paragraph2: "Aegis Custody secures digital assets with an intuitive combination of cold storage hardware, multisig wallets, and quorum based approvals"
}

class DesignPhilosophy extends Component {
    render() {
        return (
            <div id="section2" style={{minHeight: "500px", minWidth: "100vw", padding: "90px 0 20px", boxShadow: "0px 5px 10px rgba(0,0,0,.2"}}>
                <div style={{margin: "0 15px"}}>
                    <div style={{width: "100%", display: "flex", justifyContent: "center"}}><img style={{maxHeight: "100px"}} src="./images/icons-24.png"></img></div>
                    <div style={{width: "100%", display: "flex", justifyContent: "center"}}>
                        <div style={{margin: "45px 15px 15px 15px", maxWidth: "600px", fontSize: "20px", textAlign: "center"}}>
                            <p>{Content.paragraph1}</p>
                        </div>
                    </div>
                    <div style={{border: "2px solid #FF6A5F", maxWidth: "550px", margin: "30px auto 0", padding: "30px", fontSize: "25px", textAlign: "center"}}><p style={{margin: "0px"}}>{Content.paragraph2}</p></div>
                    <div style={{display: "flex", flexDirection: "column"}}>
                    <img style={{margin: "40px auto 80px", maxWidth: "45px"}} src="./images/down-arrow2.svg" alt="" />
                    </div>

                </div>
            </div>
        );
    }
}
export default DesignPhilosophy;
