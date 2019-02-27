import React, { Component } from "react";

import Landing from "./Components/Landing";
import MissionVision from "./Components/MissionVision";
import OurTeam from "./Components/OurTeam";
import LearnMore from "../../Components/LearnMore";
import Footer from "../../Components/Footer";
import OurSponsors from "./Components/OurSponsors"

class About extends Component {
    render() {
        return (
            <div>
                <Landing />
                <MissionVision />
                <OurTeam />
                <OurSponsors />
                <LearnMore />
                <Footer />
            </div>
        );
    }
}
export default About;
