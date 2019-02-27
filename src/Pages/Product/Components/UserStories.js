import React, { Component } from "react";
import styled from "styled-components";

const Container = styled.div`
    height: auto;
    min-height: 80vh;
    background: linear-gradient(
        to bottom,
        rgba(248, 248, 248, 1) 0%,
        rgba(131, 195, 234, 1) 100%
    );
    position: relative;
`;

const LineLayer = styled.div`
    position: relative;
    top: 0px;
    left: 0px;
    min-height: 80vh;
    width: 100%;

    background: url("/images/bg-line-yellow.png");
    background-repeat: no-repeat;
    background-position: 85% 0px;
    background-size: 2px 100%;

    @media (max-width: 800px) {
        background: none;
    }
`;

const MountainLayer = styled.div`
    position: relative;
    top: 0px;
    left: 0px;
    min-height: 80vh;
    width: 100%;

    background: url("/images/mountain-bg-2.png");
    background-repeat: no-repeat;
    background-position: center -40%;
    background-size: cover;

    @media (max-width: 800px) {
        background-size: 120%;
        background-position: center bottom;
    }
`;

const ContentLayer = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    justify-content: center;

`;

const UserStoryBox = {
    display: "flex",
    maxWidth: "450px",
    color: "white",
    padding: "10px",
    margin: "10px"
}

class UserStories extends Component {
    render() {
        return (
            <div style={{ backgroundColor: "#4D6A7C", padding: "70px 10px" }}>
                <h1 style={{ textAlign: "center", color: "white" }}>User Stories</h1>
                <ContentLayer  data-uk-scrollspy="target: > .userStoryBox; cls:uk-animation-fade; delay: 200">
                    <div className="userStoryBox" style={UserStoryBox}>
                        <img
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
                    <div className="userStoryBox" style={UserStoryBox}>
                        <img
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
                    {/* <LineLayer>
                    <MountainLayer>
                        <ContentLayer>
                            <div className="content">
                                <img
                                    src="https://via.placeholder.com/50"
                                    alt=""
                                />
                                <p>
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
                            <div className="content">
                                <img
                                    src="https://via.placeholder.com/50"
                                    alt=""
                                />
                                <p>
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
                    </MountainLayer>
                </LineLayer> */}
                </ContentLayer>
            </div>

        );
    }
}
export default UserStories;
