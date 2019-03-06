import React, { Component } from "react";

import Landing from "./Components/Landing";
import MainFeatures from "./Components/MainFeatures";
import WorkflowDiagram from "./Components/WorkflowDiagram";
import UserStories from "./Components/UserStories";
import MultilayerInfo from "./Components/MultilayerInfo";
import LearnMore from "../../Components/LearnMore";
import Footer from "../../Components/Footer";

class Product extends Component {
    render() {
        return (
            <div>
                <Landing />
                <MainFeatures />
                <MultilayerInfo />

                {/* <Workflow /> */}
                {/* <MountainShadow /> */}
                <UserStories />
                <WorkflowDiagram />
                {/* <VisionStatement /> */}
                <LearnMore />
                <Footer />
            </div>
        );
    }
}
export default Product;
