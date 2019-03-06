import React, { Component } from "react";
import styled from "styled-components";

const ContentLayer = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    justify-content: center;


    .userStoryBox {
        display: flex;
        color: white;
        padding: 10px;
        margin: 10px;
        max-width: 450px;
    }

    @media (max-width: 1000px){
        flex-direction: column;
        
        .userStoryBox {
            flex-direction: column;

        }

        .userImage {
            display: none
        }

        max-width: 100%;
        
    }
`;


class UserStories extends Component {
    render() {
        return (
            <div style={{ backgroundColor: "#4D6A7C", padding: "70px 10px" }}>
                {/* <h1 style={{ textAlign: "center", color: "white" }}>User Stories</h1> */}
                <ContentLayer  data-uk-scrollspy="target: > .userStoryBox; cls:uk-animation-fade; delay: 200">

                <div className="supportedCoins" style={{ margin: "15px", display: "flex", alignContent: "center", maxWidth: "400px", flexWrap: "wrap" }}>
                            <h2 style={{ minWidth: "100%", margin: "0 0 15px 0", color: "white", textAlign: "center" }}>We Currently Support</h2>
                            <div style={{ minWidth: "100%", display: "flex", justifyContent: "center" }}>
                                <div><img style={{ maxHeight: "70px", margin: "10px" }} src="./images/coin-1.png" alt="" />
                                <p style={{color: "white", texAlign: "center"}}>BTC</p></div>
                                <div><img style={{ maxHeight: "70px", margin: "10px" }} src="./images/coin-2.png" alt="" /><p style={{color: "white", texAlign: "center"}}>ETH</p></div>
                                <div><img style={{ maxHeight: "70px", margin: "10px" }} src="./images/coin-3.png" alt="" /><p style={{color: "white", texAlign: "center"}}>ERC20</p></div>
                            </div>
                        </div>

                </ContentLayer>
            </div>

        );
    }
}
export default UserStories;
