import React, { Component } from "react";
import styled from "styled-components";

import Landing from "./Components/Landing";
import DesignPhilosophy from "./Components/DesignPhilosophy";
import ProductPreview from "./Components/ProductPreview";
import Sponsors from "./Components/Sponsors";
import LearnMore from "../../Components/LearnMore";
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

                <LearnMore />

                <Footer />
            </div>
        );
    }
}
export default Home;
