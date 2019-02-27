import React, { Component } from "react";

import Landing from "./Components/Landing";
import MainFeatures from "./Components/MainFeatures";
import WorkflowDiagram from "./Components/WorkflowDiagram";
import Workflow from "./Components/Workflow";
import MountainShadow from "./Components/MountainShadow";
import UserStories from "./Components/UserStories";
import MultilayerInfo from "./Components/MultilayerInfo";
import VisionStatement from "./Components/VisionStatement";
import LearnMore from "../../Components/LearnMore";
import Footer from "../../Components/Footer";

class Product extends Component {
    render() {
        return (
            <div>
                <Landing />
                <MainFeatures />
                <WorkflowDiagram />
                {/* <Workflow /> */}
                {/* <MountainShadow /> */}
                <UserStories />
                <MultilayerInfo />
                <VisionStatement />
                <LearnMore />
                <Footer />
            </div>
        );
    }
}
export default Product;
