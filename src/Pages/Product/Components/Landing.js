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
    min-height: 650px;
    background-image: url(./images/mountainstock2.png);
    background-position: bottom;
    background-size: cover;
    background-repeat: no-repeat

    @media (max-width: 1000px) {
        background-size: contain;
        min-height: 600px
    }

`;

const Copy = styled.div`
    max-width: 600px;
    padding-bottom: 100px;
    margin: 0px auto;
    text-align: center;
    @media (max-width: 800px) {
        max-width: 90%;
    }
`;

const ContentItems = styled.div`
    margin: 0 auto;
    padding: 40px 0;
    background-color: #f2f2f2;
    width: 100%;
`;

const ContentRowStyle = {
    display: "flex",
    marginTop: "30px"
};

const ContentBoxStyle = {
    width: "100%",
    minHeight: "170px",
    margin: "20px",
    textAlign: "center"
};

const ContentBox = styled.div`

    @media(max-width: 1000px) {
        margin: 20px 0 !important;
        padding: 0 calc(100vw-25px);
    }

`

const LandingImages = {
    maxHeight: "130px"
}

const LandingImageWrap = {
    minWidth: "30%",
    display: "flex",
    justifyContent: "center"
}

const ContentRow = styled.div`

    @media (max-width: 1000px) {
        display: flex;
        flex-direction: column;
    }
`

class Landing extends Component {
    render() {
        return (
            <Container>
                <Menu dark={true} />
                <ContentContainer>
                    <Copy>
                        <div style={{minHeight: "80px"}}></div>
                        <h1 style={{width: "100%"}}>Custody Solution</h1>
                        <p>
                            Multi-layer security designed with proprietary cold
                            storage, multi-signature accounts, and security and
                            operational controls
                        </p>
                    </Copy>
                </ContentContainer>
                <ContentItems>
                    <ContentRow style={ContentRowStyle} data-uk-scrollspy="target: > .contentBox; cls:uk-animation-fade; delay: 200" style={{maxWidth: "1300px", margin: "0 auto", display: "flex"}}>
                        <ContentBox className="contentBox" style={ContentBoxStyle}>
                            <div style={LandingImageWrap}>                        
                                <img src="./images/icons-13.png" alt="" style={LandingImages}/>
                            </div>
                            <h3 style={{margin: "20px 10px 10px 10px"}}>Enhanced Security </h3>
                            <p style={{padding: "0 25px"}}>
                                Keep your digital assets safe with our
                                proprietary hardware cold storage for improved
                                security and redundancy
                            </p>
                        </ContentBox>
                        <ContentBox className="contentBox" style={ContentBoxStyle}>
                            <div style={LandingImageWrap}>                        
                                <img src="./images/icons-14.png" alt="" style={LandingImages}/>
                            </div>
                            <h3 style={{margin: "20px 10px 10px 10px"}}>Simple </h3>
                            <p style={{padding: "0 25px"}}>
                                Manage and control access to account and
                                transaction activity with our custody management
                                software (web, desktop and mobile responsive
                                applications)
                            </p>
                        </ContentBox>
                
                        <ContentBox className="contentBox" style={ContentBoxStyle}>
                            <div style={LandingImageWrap}>                        
                                <img src="./images/icons-15.png" alt="" style={LandingImages}/>
                            </div>
                            <h3 style={{margin: "20px 10px 10px 10px"}}>Policy Controls </h3>
                            <p style={{padding: "0 25px"}}>
                                Business rules and operational workflows for a
                                secure end-end custody management including
                                access, approval, withdrawal, transaction
                                management and more
                            </p>
                        </ContentBox>
                    </ContentRow>
                </ContentItems>
            </Container>
        );
    }
} 
export default Landing;
