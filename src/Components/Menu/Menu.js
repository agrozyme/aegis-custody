import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
    width: 100%;
    display: flex;
    height: 35px;
    position: absolute;
    top: 0px;
    left: 0px;
    justify-content: space-between;
    align-items: center;
    padding: 60px 60px 0px 60px;
    box-sizing: border-box;
    color: #353535;
    z-index: 100;

    @media (max-width: 600px) {
        padding: 50px 30px 0px 30px;
    }
`;

const Logo = styled.img`
    height: 30px;
`;

const ItemContainer = styled.div`
    max-width: 50%;
    display: flex;

    @media (max-width: 1024px) {
        display: none;
    }
`;

const NavItem = styled.div`
    margin-left: 10px;
    padding: 8px 20px 6px 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: .5s ease;

    @media (max-width: 1200px) {
        padding: 8px 10px 6px 10px;
    }

    a {
        font-family: "franklin_bold";
        font-weight: bold;
        text-decoration: none;
        color: #fff;
        ${props => props.dark && "color: #353535;"}
    }

    .navItem {
        transition: .2s ease;
        padding: 8px 10px 6px 5px !important;
    }

    .navItem:hover {
        color: #ff6a5f
    }

    .hideGetStarted {
        transition: .2s ease;
        font-family: system-ui;
        font-weight: normal;
        font-size: 16px;
        border-radius: 50px;
        padding-bottom: 2px;
    }

    .hideGetStarted:hover {
        color: #fff;
    }

    ${props =>
        props.primary &&
        `
        background: #FF6A5F;
        border-radius: 20px;
        `}
`;

const GetStarted = {
    padding: "8px 15px 6px 15px"
};

const Close = styled.button`
    svg {
        color: #333;
    }
`;

const mobileNavItem = {
    color: "#333",
    fontSize: "1.3em",
    fontWeight: "bold"
};

const MobileMenuBtn = styled.div`
    display: none;
    margin-left: 20px;
    // background: url(./images/menu.png);
    border: 0px solid #000;

    // span svg {
    //     color: #353535
    // }

    @media (max-width: 1024px) {
        display: block;
    }
`;



class Menu extends Component {
    state = {
        dark: false
    };

    componentWillMount() {
        if (this.props.dark === true) {
            this.setState({
                dark: true
            });
        }
    }

    render() {
        return (
            <Container>
                <div
                    id="slideNav"
                    className="uk-light"
                    data-uk-offcanvas="overlay: true"
                >
                    <div className="uk-offcanvas-bar">
                        <Close
                            className="uk-offcanvas-close"
                            type="button"
                            data-uk-close="true"
                        />

                        <ul className="uk-nav uk-nav-default uk-text-center uk-margin-large-top">
                            <li className="mobileNavItem">
                                <Link
                                    style={mobileNavItem}
                                    to="/product"
                                    data-uk-toggle="target: #slideNav"
                                >
                                    Custody Solution
                                </Link>
                            </li>
                            {/* <li className="mobileNavItem">
                                <Link
                                    style={mobileNavItem}
                                    to="/about"
                                    data-uk-toggle="target: #slideNav"
                                >
                                    About
                                </Link>
                            </li>
                            <li className="mobileNavItem">
                                <Link
                                    style={mobileNavItem}
                                    to="/careers"
                                    data-uk-toggle="target: #slideNav"
                                >
                                    Careers
                                </Link>
                            </li> */}
                        </ul>
                    </div>
                </div>

                <Link to="/">
                        <Logo src="./images/logo-dark.svg" alt="logo" />
                </Link>

                <MobileMenuBtn
                    data-uk-toggle="target: #slideNav"
                    type="button"
                    dark={this.state.dark}
                >
                    <span uk-icon="icon: menu; ratio: 2.5" />
                </MobileMenuBtn>

                <ItemContainer>
                    <NavItem dark={this.state.dark} style={{padding: "0"}}>
                        <Link className="navItem" to="/product">Custody Solution</Link>
                    </NavItem>
                    {/* <NavItem dark={this.state.dark} style={{padding: "0"}}>
                        <Link className="navItem" to="/about">About</Link>
                    </NavItem> */}
                    {/* <NavItem dark={this.state.dark} style={{padding: "0"}}>
                        <Link className="navItem" to="/about">News</Link>
                    </NavItem> */}
                    {/* <NavItem dark={this.state.dark} style={{padding: "0"}}>
                        <Link className="navItem" to="/careers">Careers</Link>
                    </NavItem> */}
                    <NavItem primary={true} style={GetStarted}>
                        <a
                            href="#contact-form"
                            data-uk-toggle="target: #contact-form"
                            className="hideGetStarted"
                        >
                            GET STARTED
                        </a>
                    </NavItem>
                </ItemContainer>
            </Container>
        );
    }
}
export default Menu;
