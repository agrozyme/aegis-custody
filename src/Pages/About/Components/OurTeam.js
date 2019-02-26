import React, { Component } from "react";
import styled from "styled-components";
import Prismic from "prismic-javascript";
import { Link, RichText, Date } from "prismic-reactjs";

const Container = styled.div`
    min-height: 60vh;
    padding: 100px 140px;
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
    width: 250px;
    margin: 20px;
    flex-grow: 1;

    p {
        width: 250px;
        margin: 0px auto;
    }
`;

const Profile = styled.div`
    width: 250px;
    height: 250px;
    margin-bottom: 10px;
    margin-left: auto;
    margin-right: auto;
    background: url(${props => props.url && props.url});
    background-position: center;
    background-size: cover;
`;

const DummyCard = styled.div`
    height: 0px;
    width: 250px;
    margin: 20px;
`;

class OurTeam extends Component {
    state = {
        doc: null
    };

    componentDidMount() {
        this.loadJobs();
    }

    loadJobs = () => {
        const apiEndpoint = "https://aegis-test.cdn.prismic.io/api/v2";

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
            <Container>
                {this.state.doc &&
                    this.state.doc.map((employee, i) => (
                        <Card key={i}>
                            {console.log(employee)}
                            <Profile url={employee.data.profile.url} />
                            <p>{employee.data.name[0].text}</p>
                            <p>{employee.data.title[0].text}</p>
                        </Card>
                    ))}

                {this.state.doc % 2 === 0 ? null : <DummyCard />}
                {/* <Card>
                    <Profile url="http://via.placeholder.com/250" />
                    <p>John Smith</p>
                    <p>Senior Engineer</p>
                </Card>
                <Card>
                    <Profile url="http://via.placeholder.com/250" />
                    <p>John Smith</p>
                    <p>Senior Engineer</p>
                </Card>
                <Card>
                    <Profile url="http://via.placeholder.com/250" />
                    <p>John Smith</p>
                    <p>Senior Engineer</p>
                </Card>
                <Card>
                    <Profile url="http://via.placeholder.com/250" />
                    <p>John Smith</p>
                    <p>Senior Engineer</p>
                </Card>
                <Card>
                    <Profile url="http://via.placeholder.com/250" />
                    <p>John Smith</p>
                    <p>Senior Engineer</p>
                </Card>
                <Card>
                    <Profile url="http://via.placeholder.com/250" />
                    <p>John Smith</p>
                    <p>Senior Engineer</p>
                </Card>
                <Card>
                    <Profile url="http://via.placeholder.com/250" />
                    <p>John Smith</p>
                    <p>Senior Engineer</p>
                </Card>
                <Card>
                    <Profile url="http://via.placeholder.com/250" />
                    <p>John Smith</p>
                    <p>Senior Engineer</p>
                </Card>
                <Card>
                    <Profile url="http://via.placeholder.com/250" />
                    <p>John Smith</p>
                    <p>Senior Engineer</p>
                </Card> */}
            </Container>
        );
    }
}
export default OurTeam;
