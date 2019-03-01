import React, { Component } from "react";
import Menu from "../../Components/Menu";
import styled from "styled-components";

import WorkingAtAegis from "./Components/WorkingAtAegis";
import OpenPositions from "./Components/OpenPositions";
import CareersCopy from "./Components/CareersCopy"
import Footer from "../../Components/Footer";

const Container = styled.div`
    min-height: 60vh;

    h1 {
        font-family: gotham_book;
    }

    @media (max-width: 1000px) {
    }
`;

class Careers extends Component {
    render() {
        return (
            <Container>
                <Menu dark={true} />
                <WorkingAtAegis />
                <CareersCopy />
                <OpenPositions />
                <Footer />
            </Container>
        );
    }
}
export default Careers;
