import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// import ScrollProgress from "./Components/ScrollProgress";
import GetStartedFixed from "./Components/GetStartedFixed";

//pages
import Home from "./Pages/Home";
import Product from "./Pages/Product";
import About from "./Pages/About";
import Careers from "./Pages/Careers";
import Test from "./Test"

const submitBtn = {
    background: "#ff6a5f",
    borderRadius: "20px",
    border: "0px solid #ff6a5f",
    padding: "10px 20px",
    color: "#fff",
    textTransform: "uppercase",
    fontSize: "1em",
    cursor: "pointer"
};

class App extends Component {
    render() {
        return (
            <div>
                {/* <ScrollProgress /> */}
                <GetStartedFixed />
                <div id="contact-form" data-uk-modal="true">
                    <div className="uk-modal-dialog uk-margin-auto-vertical uk-modal-body">
                    <button
                                        className="uk-modal-close-default"
                                        type="button"
                                        data-uk-close="true"
                                    />
                        <h2 className="uk-modal-title">Contact Us</h2>
                        <form
                            action="https://webto.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8"
                            method="POST"
                        >
                            <input
                                type="hidden"
                                name="oid"
                                value="00D1U000000zQrP"
                            />
                            <input
                                type="hidden"
                                name="retURL"
                                value="http://www.aegiscustody.com/"
                            />
                            <label htmlFor="first_name">First Name</label>
                            <input
                                className="uk-input uk-margin-bottom"
                                id="first_name"
                                maxLength="40"
                                name="first_name"
                                size="20"
                                type="text"
                            />
                            <br />
                            <label htmlFor="last_name">Last Name</label>
                            <input
                                className="uk-input uk-margin-bottom"
                                id="last_name"
                                maxLength="80"
                                name="last_name"
                                size="20"
                                type="text"
                            />
                            <br />
                            <label htmlFor="company">Company</label>
                            <input
                                className="uk-input uk-margin-bottom"
                                id="company"
                                maxLength="40"
                                name="company"
                                size="20"
                                type="text"
                            />
                            <br />
                            <label htmlFor="industry">Industry</label>
                            <select
                                className="uk-select uk-margin-bottom"
                                id="industry"
                                name="industry"
                            >
                                <option value="">--None--</option>
                                <option value="Bank">Bank</option>
                                <option value="Broker Dealer">
                                    Broker Dealer
                                </option>
                                <option value="Exchange">Exchange</option>
                                <option value="Family Office">
                                    Family Office
                                </option>
                                <option value="Financial Institution">
                                    Financial Institution
                                </option>
                                <option value="Fund (Hedge/VC/Private Equity)">
                                    Fund (Hedge/VC/Private Equity)
                                </option>
                                <option value="Government">Government</option>
                                <option value="Insurance">Insurance</option>
                                <option value="Investment Vehicle">
                                    Investment Vehicle
                                </option>
                                <option value="Other">Other</option>
                                <option value="STO Platform">
                                    STO Platform
                                </option>
                                <option value="Trust Company">
                                    Trust Company
                                </option>
                            </select>
                            <br />
                            <label htmlFor="email">Email</label>
                            <input
                                className="uk-input uk-margin-bottom"
                                id="email"
                                maxLength="80"
                                name="email"
                                size="20"
                                type="text"
                            />
                            <br />
                            <label htmlFor="phone">Phone</label>
                            <input
                                className="uk-input uk-margin-bottom"
                                id="phone"
                                maxLength="40"
                                name="phone"
                                size="20"
                                type="text"
                            />
                            <br />
                            <input
                                style={submitBtn}
                                type="submit"
                                name="submit"
                            />
                        </form>
                    </div>
                </div>

                <Router>
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/product" component={Product} />
                        <Route exact path="/about" component={About} />
                        <Route exact path="/careers" component={Careers} />
                        <Route exact path="/success" component={Home} />
                        <Route exact path="/test" component={Test} />
                    </Switch>
                </Router>
            </div>
        );
    }
}

export default App;
