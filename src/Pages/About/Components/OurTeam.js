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
    min-width: 250px;   
    margin: 20px 20px 40px 20px;
    max-width: 200px;
`;

const LinkedIn = styled.div`

    h3 {
        transition: .2s ease;
    }

    a:hover {
        color: #FF6A5F
    }
    h3:hover {
        color: #FF6A5F
    }
`

const Employees = [
    {
        name: "Serra Wei",
        picture: "",
        title: "Founder & CEO",
        linkedIn: "linkedin.com"
    },
    {
        name: "Serra Wei",
        picture: "",
        title: "Founder & CEO",
        linkedIn: "linkedin.com"
    },
        {
        name: "Serra Wei",
        picture: "",
        title: "Founder & CEO",
        linkedIn: "linkedin.com"
    },
    {
        name: "Serra Wei",
        picture: "",
        title: "Founder & CEO",
        linkedIn: "linkedin.com"
    },
        {
        name: "Serra Wei",
        picture: "",
        title: "Founder & CEO",
        linkedIn: "linkedin.com"
    },
    {
        name: "Serra Wei",
        picture: "",
        title: "Founder & CEO",
        linkedIn: "linkedin.com"
    },
]

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



    // {this.state.doc &&
    //     this.state.doc.map((employee, i) => (
    //         <Card key={i}>
    //             {console.log(employee)}
    //             {/* <Profile url={employee.data.profile.url} /> */}
    //             <h3 style={{ marginBottom: "10px", textAlign: "center" }}>{employee.data.name[0].text}</h3>
    //             <p style={{ margin: "0", textAlign: "center" }}>{employee.data.title[0].text}</p>
    //         </Card>
    //     ))}

    render() {
        return (
            <div id="ourTeam" style={{ maxWidth: "1000px", padding: "70px 0", margin: "0 auto" }}>
                <h2 style={{ textAlign: "center" }}>Our Team</h2>
                <p style={{ maxWidth: "560px", margin: "0 auto 60px", textAlign: "center" }}>Our team is made up of global leaders, financial executives, leading technologists and advisors
                </p>
                <Container>
                    {Employees.map((employee, i) => (
                        <Card key={i}>
                            <LinkedIn><a href={employee.linkedIn} style={{textDecoration: "none"}}><h3 style={{ marginTop: "20px", marginBottom: "10px", textAlign: "center" }}>{employee.name}</h3></a></LinkedIn>
                            <p style={{ margin: "0", textAlign: "center" }}>{employee.title}</p>
                        </Card>
                    ))} 
                </Container>
            </div>
        );
    }
}
export default OurTeam;
