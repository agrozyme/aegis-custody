import React, { Component } from "react";
import styled from "styled-components";

// const Section = styled.div`
//     width: 100vw;
//     height: auto;
//     min-height: 100vh;

//     background-image: url(./images/bg-line.png);
//     background-repeat: no-repeat;
//     background-position: 130px 0px;
//     background-size: 2px 50%;
// `;

// const InnerSection = styled.div`
//     width: 90%;
//     min-height: 100vh;
//     margin: 0px auto;
//     // background: linear-gradient(
//     //     135deg,
//     //     rgba(204, 234, 249, 0.1) 0%,
//     //     rgba(157, 209, 241, 1) 100%
//     // );
//     background-size: 65% 100%;
//     background-repeat: no-repeat;
//     background-position: 100% 100%;
//     display: flex;
//     align-items: center;

//     @media (max-width: 600px) {
//         background: #fff;
//     }
// `;

// const Row = styled.div`
//     width: 100%;
//     height: auto;
//     display: flex;
//     justify-content: center;
//     flex-wrap: wrap-reverse;

//     @media (max-width: 600px) {
//         padding: 0px 0px 70px 0px;
//     }
// `;

// const Col = styled.div`
//     ${props =>
//         props.left
//             ? `
//         width: 40%;
//         min-width: 300px;
//         z-index: 2;
//         `
//             : `
//         width: 60%;
//         min-width: 300px;
//         margin-top: 50px;
//         margin-bottom: 50px;
//         padding: 0px 10%;
//         box-sizing: border-box;
//         background: #fff;
//         display: flex;
//         flex-direction: column;
//         `}

//     h2 {
//         margin-top: auto;
//         font-size: 2.25em;
//     }
//     p {
//         margin-bottom: auto;
//         margin-top: 0px;
//     }
// `;

// const FlowCharImg = styled.img`
//     box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.3);
//     z-index: 2;
// `;

// const FlowChartContainer = styled.div`
//     width: 90%;
//     max-width: 1200px;
//     height: calc(100% + 100px);
//     margin: 0px auto;
//     margin-top: -100px;
//     position: relative;
//     display: flex;
//     justify-content: space-around;
//     align-items: center;
//     background: linear-gradient(
//         135deg,
//         rgba(204, 234, 249, 0.1) 0%,
//         rgba(157, 209, 241, 1) 100%
//     );
//     background-size: 65% 100%;
//     background-repeat: no-repeat;
//     background-position: 100% 100%;
//     flex-wrap: wrap-reverse;

//     // @media (max-width: 1000px) {
//     //     height: auto;
//     //     // min-height: 100vh;
//     //     margin-top: 0px;
//     //     background: none;
//     // }
// `;

// const FlowChart = styled.img`
//     box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.3);
//     height: 550px;
//     z-index: 2;
// `;

// const FlowChartContent = styled.div`
//     width: 100%;
//     height: 450px;
//     // padding: 0px 12%;
//     font-family: ingra, sans-serif;
//     display: flex;
//     align-items: flex-start;
//     justify-content: center;
//     flex-direction: column;
//     background: #fff;
//     z-index: 1;

//     h2 {
//         font-size: 2.25em;
//         // margin: 0.3em 0px;
//     }
// `;

class DesignPhilosophy extends Component {
    render() {
        return (
            <div id="section2" style={{minHeight: "500px", minWidth: "100vw", padding: "90px 0 20px", boxShadow: "0px 5px 10px rgba(0,0,0,.2"}}>
                <div style={{margin: "0 15px"}}>
                    <div style={{width: "100%", display: "flex", justifyContent: "center"}}><img style={{maxHeight: "100px"}} src="./images/icons-20.png"></img></div>
                    <div style={{width: "100%", display: "flex", justifyContent: "center"}}>
                        <div style={{margin: "45px 15px 15px 15px", maxWidth: "600px", fontSize: "20px", textAlign: "center"}}>
                            <p>Safeguarding digital assets is risky because of the complexity of cryptographic systems. Custody solutions enabled hackers to steal an average of $2.7m worth of cryptocurrency every day of 2018</p>
                        </div>
                    </div>
                    <div style={{border: "2px solid #FF6A5F", maxWidth: "550px", margin: "30px auto 0", padding: "30px", fontSize: "25px", textAlign: "center"}}><p style={{margin: "0px"}}> Aegis Custody secures digital assets with an intuitive combination of cold storage hardware, multisig wallets, and quorum based approvals</p></div>
                    <div style={{display: "flex", flexDirection: "column"}}>
                    <img style={{margin: "40px auto 80px", maxWidth: "45px"}} src="./images/down-arrow2.svg" alt="" />
                    </div>

                </div>
            </div>
        );
    }
}
export default DesignPhilosophy;
