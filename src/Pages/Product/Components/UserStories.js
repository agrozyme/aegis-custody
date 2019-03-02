import React, { Component } from "react";
import styled from "styled-components";

const Container = styled.div`

`;

const LineLayer = styled.div`

`;

const MountainLayer = styled.div`
   
`;

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
                <h1 style={{ textAlign: "center", color: "white" }}>User Stories</h1>
                <ContentLayer  data-uk-scrollspy="target: > .userStoryBox; cls:uk-animation-fade; delay: 200">
                    <div className="userStoryBox">
                        <img className="userImage"
                            src="https://via.placeholder.com/50"
                            alt="" style={{ minHeight: "100px", height: "100px", minWidth: "100px", margin: "10px" }}
                        />
                        <p style={{ margin: "0px 10px" }}>
                            Lorem ipsum dolor sit amet, consectetur
                            adipiscing elit. Etiam porta sem malesuada
                            magna mollis euismod. Praesent commodo
                            cursus magna, vel scelerisque nisl
                            consectetur et. Fusce dapibus, tellus ac
                            cursus commodo, tortor mauris condimentum
                            nibh, ut fermentum massa justo sit amet
                            risus.
                        </p>
                    </div>
                    <div className="userStoryBox">
                        <img className="userImage"
                            src="https://via.placeholder.com/50"
                            alt="" style={{ minHeight: "100px", height: "100px", minWidth: "100px", margin: "5px 10px" }}
                        />
                        <p style={{ margin: "0px 10px" }}>
                            Lorem ipsum dolor sit amet, consectetur
                            adipiscing elit. Etiam porta sem malesuada
                            magna mollis euismod. Praesent commodo
                            cursus magna, vel scelerisque nisl
                            consectetur et. Fusce dapibus, tellus ac
                            cursus commodo, tortor mauris condimentum
                            nibh, ut fermentum massa justo sit amet
                            risus.
                        </p>
                    </div>
                </ContentLayer>
            </div>

        );
    }
}
export default UserStories;
