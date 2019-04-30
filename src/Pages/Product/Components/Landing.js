import React, { Component } from 'react';
import styled from 'styled-components';
import Menu from '../../../Components/Menu';

const Container = styled.div`
  width: 100vw;
  box-sizing: border-box;
  display: box;
`;

const ContentContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  min-height: 650px;
  background-image: url(./images/mountainstock10.png);
  background-position: bottom;
  background-size: cover;
  background-repeat: no-repeat @media (max-width: 1000px) {
    min-height: 500px;
  }
`;

const Copy = styled.div`
  max-width: 700px;
  padding-bottom: 100px;
  margin: 0px auto;
  text-align: center;
  h2 {
    font-size: 55px;
  }

  .mobile {
    display: none;
  }

  h1 {
    font-size: 55px;

    @media (max-width: 1000px) {
      font-size: 36px;
    }
  }

  @media (max-width: 800px) {
    max-width: 90%;
    h1 {
    }

    .mobile {
      display: block;
    }

    .desktop {
      display: none;
    }

    h2 {
      font-size: 30px;
      line-height: 40px;
    }
  }
`;

const ContentItems = styled.div`
  margin: 0 auto;
  padding: 40px 0;
  background-color: #f2f2f2;
  width: 100%;
`;

const ContentRowStyle = {
  display: 'flex',
  marginTop: '30px'
};

const ContentBoxStyle = {
  width: '100%',
  minHeight: '170px',
  margin: '20px',
  textAlign: 'center'
};

const ContentBox = styled.div`
  img {
    max-height: 130px;
  }

  @media (max-width: 1000px) {
    margin: 20px 0 !important;
    padding: 0 calc(100vw-25px);

    img {
      max-height: 75px;
    }
  }
`;

const LandingImages = {};

const LandingImageWrap = {
  minWidth: '30%',
  display: 'flex',
  justifyContent: 'center'
};

const ContentRow = styled.div`
  @media (max-width: 1000px) {
    display: flex;
    flex-direction: column;
  }
`;

const Content = {
  p1:
    'Aegis Custody gives you control of your private keys and your digital assets.',
  enhancedSecurity:
    'Proprietary cold storage for improved security and redundancy',
  simple: 'Easy to use hardware devices and software solutions',
  policy: 'Customizable business logic for all types of institutions'
};

const MobileHeader = styled.div`
  display: none;

  @media (max-width: 1000px) {
    display: flex;

    h1 {
      text-align: center;
      font-size: 36px;
      width: 100%;
      margin: 60px auto 40px;
    }
  }
`;

class Landing extends Component {
  render() {
    return (
      <Container>
        <Menu dark={true} />
        <ContentContainer>
          <Copy>
            <div style={{ minHeight: '80px' }} />
            <h1
              className="desktop"
              style={{ width: '100%', marginBottom: '15px' }}
            >
              Institutional Self-Custody
            </h1>
            <h1
              className="mobile"
              style={{ width: '100%', marginBottom: '15px' }}
            >
              Institutional
              <br />
              Self-Custody
            </h1>
            <p style={{ margin: '0' }}>{Content.p1}</p>
          </Copy>
        </ContentContainer>
        <ContentItems>
          <MobileHeader>
            <h1>Features</h1>
          </MobileHeader>
          <ContentRow
            style={ContentRowStyle}
            style={{ maxWidth: '1300px', margin: '0 auto', display: 'flex' }}
          >
            <ContentBox className="contentBox" style={ContentBoxStyle}>
              <div style={LandingImageWrap}>
                <img src="./images/icons-17.png" alt="" style={LandingImages} />
              </div>
              <h3 style={{ margin: '20px 10px 10px 10px' }}>
                Enhanced Security{' '}
              </h3>
              <p style={{ padding: '0 25px' }}>{Content.enhancedSecurity}</p>
            </ContentBox>
            <ContentBox className="contentBox" style={ContentBoxStyle}>
              <div style={LandingImageWrap}>
                <img src="./images/icons-18.png" alt="" style={LandingImages} />
              </div>
              <h3 style={{ margin: '20px 10px 10px 10px' }}>Simple </h3>
              <p style={{ padding: '0 25px' }}>{Content.simple}</p>
            </ContentBox>
            <ContentBox className="contentBox" style={ContentBoxStyle}>
              <div style={LandingImageWrap}>
                <img src="./images/icons-19.png" alt="" style={LandingImages} />
              </div>
              <h3 style={{ margin: '20px 10px 10px 10px' }}>
                Policy Controls{' '}
              </h3>
              <p style={{ padding: '0 25px' }}>{Content.policy}</p>
            </ContentBox>
          </ContentRow>
        </ContentItems>
      </Container>
    );
  }
}
export default Landing;
