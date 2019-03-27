import React, { Component } from "react";
import Prismic from "prismic-javascript";
import styled from "styled-components";
import { Link, RichText, Date } from "prismic-reactjs";

class Test extends Component {

    state = {
        doc: null,
    };

    componentDidMount() {
        this.loadNews();
    }

    loadNews = () => {
        const apiEndpoint = "https://aegis.cdn.prismic.io/api/v2";

        Prismic.api(apiEndpoint).then(api => {
            api.query(
                Prismic.Predicates.at("document.type", "news")
            ).then(response => {
                if (response) {

                    this.setState({ doc: response.results });
                }
            });
        });
        
    };

    render() {
        return (
            <div className="hideGetStarted" style={{width: "100vw", height: "100vh", backgroundColor: "pink"}}>
                {this.state.doc && this.state.doc.map((news, i) => (
                    <div>
                        {news.data.headline[0].text}
                    </div>
                ) )
                }
            </div>
        )
    }

}
                
export default Test