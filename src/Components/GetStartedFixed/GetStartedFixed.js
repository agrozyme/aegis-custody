import React, { Component } from "react";
import styled from "styled-components";

const Btn = styled.button`
    position: fixed;
    bottom: 50px;
    right: 50px;
    padding: 11px 37px 10px 37px;
    border: 0px solid #fff;
    font-size: 1em;
    text-decoration: none;
    text-transform: uppercase;
    color: #fff;
    background: #ff6a5f;
    border-radius: 20px;
    cursor: pointer;
    z-index: 100;
    display: none;
    box-shadow: 0 3px 5px rgba(0,0,0,.2);

    @media (max-width: 1000px) {
        bottom: 50px;
        text-align: center;
        right: 50%;
        transform: translate(50%);
        min-width: 190px;
    }
`;

class GetStartedFixed extends Component {
    state = {
        hidden: true
    };

    componentDidMount() {
        if (window.addEventListener) {
            window.addEventListener(
                "DOMContentLoaded",
                this.handleVisibilityChange,
                false
            );
            window.addEventListener("load", this.handleVisibilityChange, false);
            window.addEventListener(
                "scroll",
                this.handleVisibilityChange,
                false
            );
            window.addEventListener(
                "resize",
                this.handleVisibilityChange,
                false
            );
        }
    }

    //check if any conflicting elements are in the viewport (elements with .hideGetStarted)
    areElementsInView = (el, btn) => {
        let isInView = false;

        //loop to check all elements. return true if any element is in view
        for (let i = 0; i < el.length; i++) {
            const rect = el[i].getBoundingClientRect();

            if (
                rect.top <= window.innerHeight &&
                rect.bottom >= 0 &&
                rect.left > 0
            ) {
                isInView = true;
            }
        }

        //hide btn only if a conflicting element is in view and btn is not hidden in state. "!this.state.hidden" prevents calling unessesarily
        if (isInView && !this.state.hidden) {
            this.setState({
                hidden: true
            });

            btn.classList.remove("fadeIn");
            btn.classList.add("fadeOut");

            //timeout for length of fadeOut animation
            setTimeout(function() {
                btn.style.display = "none";
            }, 800);
            //call only if an element is for sure not in view
        } else if (!isInView) {
            this.setState({
                hidden: false
            });

            btn.classList.remove("fadeOut");
            btn.classList.add("fadeIn");
            btn.style.display = "block";
        }
    };

    handleVisibilityChange = () => {
        const elements = document.getElementsByClassName("hideGetStarted");
        const btn = document.getElementById("getStartedFixed");
        this.areElementsInView(elements, btn);
    };

    render() {
        return (
            <Btn
                id="getStartedFixed"
                className="animated fast"
                data-uk-toggle="target: #contact-form"
            >
                Get Started
            </Btn>
        );
    }
}
export default GetStartedFixed;
