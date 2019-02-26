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
    position: relative;
    top: 0px;
    left: 0px;
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;

    .content {
        max-width: 310px;
        margin: 40px 40px 0px 40px;
    }
`;

class UserStories extends Component {
    render() {
        return (
            <Container>
                <LineLayer>
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
                </LineLayer>
            </Container>
        );
    }
}
export default UserStories;
