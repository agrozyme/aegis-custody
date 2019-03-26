import React, { Component } from "react";
import styled from "styled-components";

import Landing from "./Components/Landing";
import DesignPhilosophy from "./Components/DesignPhilosophy";
import ProductPreview from "./Components/ProductPreview";
import Sponsors from "./Components/Sponsors";
import Footer from "../../Components/Footer";
import News from "./Components/News"

const GetStarted = styled.button`
    background: #ff6a5f;
    border-radius: 20px;
    border: 0px solid #ff6a5f;
    padding: 10px 20px;
    color: #fff;
    text-transform: uppercase;
    font-size: 1em;
    cursor: pointer;

    z-index: 2;

    ${props =>
        props.keyPage
            ? `
        align-self: flex-end;
        margin-right: 10%;
        margin-top: 70%;
        box-shadow: 0px 6px 6px rgba(0, 0, 0, 0.5);
    `
            : `
        padding: 10px 100px;
    `}
`;


const LearnMore2 = styled.div`
    width: 100vw;
    text-align: center;
`;

const Container = styled.div`
    width: 100%;
    height: 100%;
    padding: 140px 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    // background: linear-gradient(
    //     165deg,
    //     rgba(239, 250, 255, 0) 40%,
    //     rgba(223, 241, 252, 0.7) 100%
    // );

    h2 {
        margin: 0px;
    }
`;

const GetStarted2 = styled.button`
    background: #ff6a5f;
    border-radius: 20px;
    border: 0px solid #ff6a5f;
    padding: 10px 30px;
    color: #fff;
    text-transform: uppercase;
    font-size: 1em;
    cursor: pointer;
    z-index: 2;
    text-align: center;

    a {
        color: #fff;
        text-decoration: none;
    }

    a:hover {
        color: #fff
    }

    ${props =>
        props.keyPage
            ? `
        align-self: flex-end;
        margin-right: 10%;
        margin-top: 70%;
        box-shadow: 0px 6px 6px rgba(0, 0, 0, 0.5);
    `
            : `
        padding: 10px 20px;
    `}
`;

class Home extends Component {
    state = {
        name: "",
        email: "",
        subject: "",
        message: ""
    };

    handleChange = event => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({ [name]: value });
    };

    render() {
        return (
            <div>
                <div id="contact-form" data-uk-modal="true">
                    <div className="uk-modal-dialog uk-margin-auto-vertical uk-modal-body">
                        <h2 className="uk-modal-title">Contact Us</h2>
                        <form action="/success" name="contact" method="post">
                            <input
                                type="hidden"
                                name="form-name"
                                value="contact"
                            />
                            <input
                                className="uk-input uk-margin-bottom"
                                type="text"
                                name="name"
                                placeholder="Name"
                                value={this.state.name}
                                onChange={this.handleChange}
                            />
                            <input
                                className="uk-input uk-margin-bottom"
                                type="email"
                                name="email"
                                placeholder="Email"
                                value={this.state.email}
                                onChange={this.handleChange}
                            />
                            <input
                                className="uk-input uk-margin-bottom"
                                type="text"
                                name="subject"
                                placeholder="Subject"
                                value={this.state.subject}
                                onChange={this.handleChange}
                            />
                            <textarea
                                className="uk-textarea uk-margin-bottom"
                                type="text"
                                name="message"
                                placeholder="Message"
                                rows="7"
                                value={this.state.message}
                                onChange={this.handleChange}
                            />

                            <GetStarted type="submit">Submit</GetStarted>
                        </form>
                    </div>
                </div>

                <Landing />

                <DesignPhilosophy />

                <ProductPreview />

                <News />

                <Sponsors />

                <LearnMore2>
                <Container className="hideGetStarted">
                    <h2 style={{ marginBottom: "25px", padding: "10px"}}>See Our Institutional Self-Custody Solution</h2>
                    <GetStarted2
                    >
                        <a href="/product" className="hideGetStarted" style={{padding: "0px 20px"}}>Learn More</a>
                    </GetStarted2>
                </Container>
            </LearnMore2>

            <Footer />
            </div>
        );
    }
}
export default Home;
