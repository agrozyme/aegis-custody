import React, { Component } from "react";
import styled from "styled-components";

const Container = styled.div`
    width: 100%;
    height: 5px;
    background: rgba(255, 255, 255, 0.4);
    position: fixed;
    top: 0px;
    left: 0px;
    z-index: 100;
    display: none;
`;

const ProgressBar = styled.div`
    height: 5px;
    background: #ff6a5f;
    width: 0%;
`;

class ScrollProgress extends Component {
    componentDidMount() {
        window.onscroll = function() {
            let winScroll =
                document.body.scrollTop || document.documentElement.scrollTop;
            let height =
                document.documentElement.scrollHeight -
                document.documentElement.clientHeight;
            let scrolled = (winScroll / height) * 100;

            const barCont = document.getElementById("progressBarCont");
            const bar = document.getElementById("progressBar");

            if (scrolled === 0) {
                barCont.style.display = "none";
            } else {
                barCont.style.display = "block";
                bar.style.width = scrolled + "%";
            }
        };
    }

    render() {
        return (
            <Container id="progressBarCont">
                <ProgressBar id="progressBar" />
            </Container>
        );
    }
}
export default ScrollProgress;
