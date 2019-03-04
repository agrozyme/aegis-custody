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
    margin: 15px 15px 20px 15px;
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
        name: "Frank Fu",
        picture: "",
        title: "CTO",
        linkedIn: "https://www.linkedin.com/in/%E5%86%A0%E5%BD%B0-%E5%82%85-71673472"
    },
    {
        name: "Jason Doll",
        picture: "",
        title: "Head of Trading",
        linkedIn: "https://www.linkedin.com/mynetwork/invite-sent/jason-doll-b8aa742b/?isSendInvite=true"
    },
        {
        name: "Waterball Liu",
        picture: "",
        title: "Technical Marketing",
        linkedIn: "linkedin.com"
    },
    {
        name: "Sean Chuang",
        picture: "",
        title: "Engineer",
        linkedIn: "https://www.linkedin.com/in/sean-chuang-b0aa1a110/"
    },
        {
        name: "Patrick Baron",
        picture: "",
        title: "Advisor",
        linkedIn: "https://www.linkedin.com/in/patricknbaron"
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

    render() {
        return (
            <div id="ourTeam" style={{ maxWidth: "1000px", padding: "70px 0", margin: "0 auto" }}>
                <h2 style={{ textAlign: "center" }}>Our Team</h2>
                <p style={{ maxWidth: "560px", margin: "0 auto 60px", textAlign: "center" }}>Our team is made up of global leaders, financial executives, leading technologists and advisors
                </p>
                <Container>
                    {Employees.map((employee, i) => (
                        <Card key={i}><div data-uk-scrollspy="target: > .linkedIn; cls:uk-animation-fade; delay: 500">
                            <LinkedIn className="linedIn"><a href={employee.linkedIn} style={{textDecoration: "none"}}><h3 style={{ marginTop: "20px", marginBottom: "10px", textAlign: "center" }}>{employee.name}</h3></a></LinkedIn>
                            <p style={{ margin: "0", textAlign: "center" }}>{employee.title}</p>
                            </div>
                        </Card>
                    ))} 
                </Container>
            </div>
        );
    }
}
export default OurTeam;
