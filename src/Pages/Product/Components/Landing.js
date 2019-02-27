import React, { Component } from "react";
import styled from "styled-components";
import Menu from "../../../Components/Menu";

const Container = styled.div`
    width: 100vw;
    box-sizing: border-box;
    display: box;
    // background: linear-gradient(
    //     165deg,
    //     rgba(239, 250, 255, 0) 40%,
    //     rgba(223, 241, 252, 0.7) 100%
    // );
`;

const ContentContainer = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: calc(100vh - 50px);
`;

const Copy = styled.div`
    max-width: 30%;
    padding-bottom: 100px;
    margin: 0px auto;
    text-align: center;

    @media (max-width: 800px) {
        max-width: 90%;
    }
`;

const ContentItems = styled.div`
    max-width: 1000px;
    margin: 0 auto;
    padding: 40px;
`;

const ContentRow = {
    display: "flex"
};

const ContentBox = {
    width: "100%",
    minHeight: "170px",
    margin: "20px",
    textAlign: "center"
};

const LandingImages = {
    maxHeight: "130px"
}

const LandingImageWrap = {
    minWidth: "100%",
    display: "flex",
    justifyContent: "center"
}

class Landing extends Component {
    render() {
        return (
            <Container>
                <Menu dark={true} />
                <ContentContainer>
                    <Copy>
                        <h1>Custody Solution</h1>
                        <p>
                            Multi-layer security designed with proprietary cold
                            storage, multi-signature accounts, and security and
                            operational controls
                        </p>
                    </Copy>
                </ContentContainer>
                <ContentItems>
                    <div style={ContentRow} data-uk-scrollspy="target: > .contentBox; cls:uk-animation-fade; delay: 200">
                        <div className="contentBox" style={ContentBox}>
                            <div style={LandingImageWrap}>                        
                                <img src="./images/icons-13.png" alt="" style={LandingImages}/>
                            </div>
                            <h3 style={{margin: "20px 10px 10px 10px"}}>Enhanced Security </h3>
                            <p>
                                Keep your digital assets safe with our
                                proprietary hardware cold storage for improved
                                security and redundancy
                            </p>
                        </div>
                        <div className="contentBox" style={ContentBox}>
                        <div style={LandingImageWrap}>                        
                                <img src="./images/icons-14.png" alt="" style={LandingImages}/>
                            </div>
                            <h3 style={{margin: "20px 10px 10px 10px"}}>Simple </h3>
                            <p>
                                Manage and control access to account and
                                transaction activity with our custody management
                                software (web, desktop and mobile responsive
                                applications)
                            </p>
                        </div>
                        <div className="contentBox" style={ContentBox}>
                        <div style={LandingImageWrap}>                        
                                <img src="./images/icons-15.png" alt="" style={LandingImages}/>
                            </div>
                            <h3 style={{margin: "20px 10px 10px 10px"}}>Policy Controls </h3>
                            <p>
                                Business rules and operational workflows for a
                                secure end-end custody management including
                                access, approval, withdrawal, transaction
                                management and more
                            </p>
                        </div>
                    </div>
                </ContentItems>
            </Container>
        );
    }
} 
export default Landing;
