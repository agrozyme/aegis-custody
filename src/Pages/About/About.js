import React, { Component } from "react";

import Landing from "./Components/Landing";
import MissionVision from "./Components/MissionVision";
import OurTeam from "./Components/OurTeam";
import LearnMore from "../../Components/LearnMore";
import Footer from "../../Components/Footer";

class About extends Component {
    render() {
        return (
            <div>
                <Landing />
                <MissionVision />
                <OurTeam />
                <LearnMore />
                <Footer />
            </div>
        );
    }
}
export default About;
