import React, { Component } from "react";
import styled from "styled-components";
import Prismic from "prismic-javascript";
import { Link, RichText, Date } from "prismic-reactjs";

const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    h1 {
        font-family: gotham_book;
    }

    @media (max-width: 1000px) {
        padding: 20px 30px;
    }
`;

const Card = styled.div`
    max-width: 200px;
    margin: 20px;
    width: 100%;
`;

class OurTeam extends Component {
    state = {
        doc: null
    };

    componentDidMount() {
        this.loadJobs();
    }

    loadJobs = () => {
        const apiEndpoint = "https://aegis.cdn.prismic.io/api/v2";

        Prismic.api(apiEndpoint).then(api => {
            api.query(Prismic.Predicates.at("document.type", "employee")).then(
                response => {
                    if (response) {
                        this.setState({ doc: response.results });
                    }
                }
            );
        });
    };

    render() {
        return (
            <div style={{ padding: "70px 0" }}>
                <h2 style={{ textAlign: "center" }}>Our Team</h2>
                <p style={{maxWidth: "600px", margin: "0 auto 60px", textAlign: "center"}}>The mission of Coinbase is to create an open financial system for the world. There are a number of big challenges to get there. Two of them are trust and ease of use for this powerful new technology.</p>
                <Container>
                    {this.state.doc &&
                        this.state.doc.map((employee, i) => (
                            <Card key={i}>
                                {console.log(employee)}
                                {/* <Profile url={employee.data.profile.url} /> */}
                                <h3 style={{ marginBottom: "10px", textAlign: "center" }}>{employee.data.name[0].text}</h3>
                                <p style={{ margin: "0", textAlign: "center" }}>{employee.data.title[0].text}</p>
                            </Card>
                        ))}
                </Container>
            </div>
        );
    }
}
export default OurTeam;
