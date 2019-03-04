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

                    <p style={{color: "white", padding: "0 30px", maxWidth: "700px", margin: "0", fontSize: "25px", textAlign: "center"}}>Our self and custom custodian solutions are ideal for customers like exchanges, hedge funds, and institutions to securely store their crypto and digital assets</p>

                </ContentLayer>
            </div>

        );
    }
}
export default UserStories;
