import React, { Component } from 'react';
import styled from 'styled-components';

// import Menu from "../../../Components/Menu";

const Container = styled.div`
  width: 100vw;
  overflow: auto;
  background: url(./images/skyline2.jpg);
  background-repeat: no-repeat;
  background-position: bottom;
  background-size: cover;

  @media (min-width: 1000px) {
    min-height: 650px;
  }
`;

//     background: url("/images/about-leader.png");

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #fff;
  height: 100%;
  min-height: 700px;

  @media (max-width: 600px) {
    height: 100%;
  }
  padding: 0px 20px;

  h2 {
    color: #fff;
  }

  @media (max-width: 1000px) {
    h2 {
      font-size: 36px !important;
      line-height: 40px !important;
    }
  }

  div {
    margin-top: -50px;
  }
`;

// const MobileHeader = styled.div`
//     display: none;

//     @media (max-width: 1000px) {
//         display: flex;
//         text-align: center;
//         font-sizeL 36px
//     }

// `;

class Landing extends Component {
  render() {
    return (
      <div>
        <Container>
          <ContentContainer>
            <div style={{ textAlign: 'center', maxWidth: '800px' }}>
              <h2
                style={{
                  lineHeight: '65px',
                  fontSize: '55px',
                  color: '#353535'
                }}
              >
                Our Mission
              </h2>
              <p style={{ color: '#353535' }}>
                Aegis Custody is building easy-to-use products and services that
                empower institutions to securely use blockchain technologies and
                digital assets.{' '}
              </p>
            </div>
          </ContentContainer>
        </Container>
      </div>
    );
  }
}
export default Landing;
