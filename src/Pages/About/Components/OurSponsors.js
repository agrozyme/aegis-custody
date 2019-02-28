import React, { Component } from "react";

class OurSponsors extends Component {

    render() {
        return (
            <div>
                <div style={{ padding: "70px 0" }}>
                    <h2 style={{ textAlign: "center", marginBottom: "0" }}>Investors</h2>
                    <div style={{ display: "flex", justifyContent: "center" }} data-uk-scrollspy="target: > img; cls:uk-animation-fade; delay: 200">
                        <img style={{ margin: "30px", maxHeight: "90px" }} src="./images/logos1.png" alt="" />
                        <img style={{ margin: "30px", maxHeight: "90px" }} src="./images/logos2.png" alt="" />
                    </div>
                </div>
                <div style={{ padding: "70px 0"}}>
                    <h2 style={{ textAlign: "center" }}>Sponsors</h2>
                    <div style={{ display: "flex", justifyContent: "center"  }}>
                    <img style={{ margin: "30px", maxHeight: "90px" }} src="./images/logos1.png" alt="" />
                        <img style={{ margin: "30px", maxHeight: "90px" }} src="./images/logos2.png" alt="" />
                    </div>
                </div>
            </div>

        );
    }
}
export default OurSponsors;
