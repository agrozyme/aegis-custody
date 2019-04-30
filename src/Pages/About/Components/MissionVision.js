import React, { Component } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  align-items: center;
  padding: 70px 20px;
  max-width: calc(100%-40px) @media (max-width: 1000px) {

  }
`;

const Content = {
  p1:
    'Founded in 2018, Aegis Custody is a San Francisco fintech company that provides financial institutions with a secure and easy-to-use solution for custody of digital assets. We are backed by Fosun, a global asset management company.',
  p2:
    'Digital assets need to be effectively secured and easy-to-use. Our mantra is ‘security first’ because we take security very seriously. This ideology carries through everything we do from hardware design, to software deployment, and internal operations.'
};

class MissionVision extends Component {
  render() {
    return (
      <div>
        <Container>
          <img
            src="./images/stamp-01.png"
            style={{ height: '70px', width: '70px', marginBottom: '20px' }}
            alt=""
          />
          <p style={{ maxWidth: '700px', margin: '0 auto' }}>{Content.p1}</p>
        </Container>
        <Container style={{ backgroundColor: '#f9f9f9' }}>
          <img
            src="./images/icons-31.png"
            style={{ height: '70px', width: '70px', marginBottom: '20px' }}
            alt=""
          />
          <p style={{ maxWidth: '700px', margin: '0 auto' }}>{Content.p2}</p>
        </Container>
      </div>
    );
  }
}
export default MissionVision;
