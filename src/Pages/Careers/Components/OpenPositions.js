import React, { Component } from 'react';
import styled from 'styled-components';
import Prismic from 'prismic-javascript';
// import { Link, RichText, Date } from 'prismic-reactjs';

const Container = styled.div`
  max-width: 800px;
  margin: 100px auto;
  padding: 0px 40px 25px;

  h3,
  h4 {
    font-size: 25px;
  }

  h1,
  h2 {
    font-size: 36px;
    font-family: franklin-bold;
  }
`;

const JobCont = styled.div`
  margin-bottom: 30px;
  margin-left: 60px;

  @media (max-width: 1000px) {
    margin-left: 0;
  }
`;

const ApplyLink = styled.a`
  background: none;
  border: 0px solid #fff;
  color: #ff6a5f;
  text-transform: uppercase;
  font-size: 1em;
  display: flex;
  align-items: center;
  text-decoration: none;
  cursor: pointer;

  &:hover {
    text-decoration: none;
    color: #ff6a5f;
  }

  img {
    height: 12px;
    margin-left: 6px;
  }
`;

const Apply = styled.p`
  background: none;
  border: 0px solid #fff;
  color: #ff6a5f;
  text-transform: uppercase;
  font-size: 1em;
  display: flex;
  align-items: center;
  text-decoration: none;
  cursor: pointer;

  &:hover {
    text-decoration: none;
    color: #ff6a5f;
  }

  img {
    height: 12px;
    margin-left: 6px;
  }
`;

const ModalBody = styled.div`
  padding: 60px;
  width: 100% !important;
  max-width: 800px !important;

  @media (max-width: 600px) {
    padding: 30px;
  }
`;

class OpenPositions extends Component {
  state = {
    doc: null
  };

  componentDidMount() {
    this.loadJobs();
  }

  loadJobs = () => {
    const apiEndpoint = 'https://aegiscustodywebsite.cdn.prismic.io/api/v2';

    Prismic.api(apiEndpoint).then(api => {
      api
        .query(Prismic.Predicates.at('document.type', 'job_posting'))
        .then(response => {
          if (response) {
            this.setState({ doc: response.results });
          }
        });
    });
  };

  render() {
    return (
      <Container id="openPositions">
        <h1 style={{ marginBottom: '10px', fontFamily: 'franklin_bold' }}>
          Open Positions
        </h1>
        <p style={{ marginBottom: '50px' }}>
          We are growing quickly and looking for smart people who show up on a
          daily basis with a positive mental attitude. If you believe in our
          mission and are driven, creative, and ethical, then please reach out
          to us.{' '}
        </p>

        {this.state.doc &&
          this.state.doc.map((job, i) => (
            <JobCont key={i}>
              <div id={'job-listing-' + i} data-uk-modal="true">
                <ModalBody className="uk-modal-dialog uk-margin-auto-vertical uk-modal-body">
                  <button
                    className="uk-modal-close-default"
                    type="button"
                    data-uk-close="true"
                  />
                  <h3 className="uk-modal-title">
                    {job.data.job_title[0].text}
                  </h3>
                  <p>{job.data.location[0].text}</p>
                  <p>{job.data.job_brief[0].text}</p>
                  <hr />
                  {job.data.job_description.map((paragraph, i) => (
                    <p key={i}>{paragraph.text}</p>
                  ))}
                  <p />
                  <ApplyLink href={job.data.google_form_link.url}>
                    Apply <img src="./images/right-arrow-red.svg" alt="" />
                  </ApplyLink>
                </ModalBody>
              </div>

              <h4 style={{ marginTop: '10px', marginBottom: '10px' }}>
                {job.data.job_title[0].text}
              </h4>
              <p style={{ marginTop: '10px', marginBottom: '0px' }}>
                {job.data.location[0].text}
              </p>
              <p style={{ marginTop: '0px', marginBottom: '10px' }}>
                {job.data.job_brief[0].text}
              </p>

              <Apply
                data-uk-toggle={'target: #job-listing-' + i}
                style={{ marginTop: '0px', marginBottom: '10px' }}
              >
                See More <img src="./images/right-arrow-red.svg" alt="" />
              </Apply>
            </JobCont>
          ))}
      </Container>
    );
  }
}
export default OpenPositions;
