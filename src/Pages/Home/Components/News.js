import React, { Component } from "react";

const NewsBox = {
    // backgroundColor: "pink",
    margin: "15px",
    padding: "25px",
    backgroundColor: "white",
    minWidth: "25%",
    boxShadow: "0px 2px 5px rgba(0,0,0,.2)"
}

class News extends Component {
    render() {
        return (
            <div style={{ padding: "70px 40px", overflow: "hidden", maxWidth: "80%", margin: "0 auto"}}>
                <div style={{display:"flex", overflow:"scroll"}}>
                    <div style={NewsBox}><h3 style={{ margin: 0, fontSize: "25px" }}>Best Wallet Award</h3><p>Now equipped with seventh-generation Intel Core processors, MacBook is snappier than ever.</p><a style={{ color: "#ff6a5f" }} href="#">READ MORE</a></div>
                    <div style={NewsBox}><h3 style={{ margin: 0, fontSize: "25px" }}>Best Wallet Award</h3><p>Now equipped with seventh-generation Intel Core processors, MacBook is snappier than ever.</p><a style={{ color: "#ff6a5f" }} href="#">READ MORE</a></div>
                    <div style={NewsBox}><h3 style={{ margin: 0, fontSize: "25px" }}>Best Wallet Award</h3><p>Now equipped with seventh-generation Intel Core processors, MacBook is snappier than ever.</p><a style={{ color: "#ff6a5f" }} href="#">READ MORE</a></div>
                    <div style={NewsBox}><h3 style={{ margin: 0, fontSize: "25px" }}>Best Wallet Award</h3><p>Now equipped with seventh-generation Intel Core processors, MacBook is snappier than ever.</p><a style={{ color: "#ff6a5f" }} href="#">READ MORE</a></div>
                    <div style={NewsBox}><h3 style={{ margin: 0, fontSize: "25px" }}>Best Wallet Award</h3><p>Now equipped with seventh-generation Intel Core processors, MacBook is snappier than ever.</p><a style={{ color: "#ff6a5f" }} href="#">READ MORE</a></div>   
            
        </div>



{/* 
                <div className="uk-position-relative uk-visible-toggle" uk-slider style={{ overflow: "hidden", height: "100%", width: "100%"}}>
                    <ul className="uk-slider-items uk-child-width-1-2@s uk-child-width-1-3@m uk-grid" style={{overflowX: "scroll",paddingTop: ""}}>
                        <li>
                            <div style={NewsBox}><h3 style={{ margin: 0, fontSize: "25px" }}>Best Wallet Award</h3><p>Now equipped with seventh-generation Intel Core processors, MacBook is snappier than ever.</p><a style={{ color: "#ff6a5f" }} href="#">READ MORE</a></div>
                        </li>
                        <li>
                            <div style={NewsBox}><h3 style={{ margin: 0, fontSize: "25px" }}>Best Wallet Award</h3><p>Now equipped with seventh-generation Intel Core processors, MacBook is snappier than ever.</p><a style={{ color: "#ff6a5f" }} href="#">READ MORE</a></div>
                        </li>
                        <li>
                            <div style={NewsBox}><h3 style={{ margin: 0, fontSize: "25px" }}>Best Wallet Award</h3><p>Now equipped with seventh-generation Intel Core processors, MacBook is snappier than ever.</p><a style={{ color: "#ff6a5f" }} href="#">READ MORE</a></div>
                        </li>
                        <li>
                            <div style={NewsBox}><h3 style={{ margin: 0, fontSize: "25px" }}>Best Wallet Award</h3><p>Now equipped with seventh-generation Intel Core processors, MacBook is snappier than ever.</p><a style={{ color: "#ff6a5f" }} href="#">READ MORE</a></div>
                        </li>
                        <li>
                            <div style={NewsBox}><h3 style={{ margin: 0, fontSize: "25px" }}>Best Wallet Award</h3><p>Now equipped with seventh-generation Intel Core processors, MacBook is snappier than ever.</p><a style={{ color: "#ff6a5f" }} href="#">READ MORE</a></div>
                        </li>
                    </ul>
                </div> */}
            </div>
        );
    }
}
export default News;
