import React, { Component } from "react";
import styled from "styled-components";
import Prismic from "prismic-javascript";
import { Link, RichText, Date } from "prismic-reactjs";

const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    max-width: 1000px;
    margin: 0 auto;
    h1 {
        font-family: gotham_book;
    }

    @media (max-width: 1000px) {
        padding: 20px 30px;
    }
`;

const Card = styled.div`
    max-width: 200px;
    margin: 20px 20px 40px 20px;
    max-width: 400px;
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
                        console.log(response)
                    }
                }
            );
        });
    };

    render() {
        return (
            <div style={{ padding: "70px 0" }}>
                <h2 style={{ textAlign: "center" }}>Our Team</h2>
                <p style={{maxWidth: "560px", margin: "0 auto 60px", textAlign: "center"}}>We are growing and continue to add highly talented, innovative and experienced to Aegis family. </p>
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
