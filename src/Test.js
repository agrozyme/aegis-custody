import React, { Component } from "react";

class Test extends Component {
    render() {
        return (
            <div style={{width: "100vw", height: "100vh", backgroundColor: "pink"}}>
                <div className="uk-position-relative uk-visible-toggle uk-light" tabindex="-1" data-uk-slideshow>
                    <ul class="uk-slideshow-items">
                        <li>
                            <img src="images/diagram.png" alt="" uk-cover></img>
                        </li>
                        <li>
                        <img src="images/dark.jpg" alt="" uk-cover></img>
                        </li>
                        <li>
                        <img src="images/light.jpg" alt="" uk-cover></img>
                        </li>
                    </ul>

                    <a className="uk-slidenav-large uk-position-center-left uk-position-small uk-hidden-hover" href="#" data-uk-slidenav-previous data-uk-slideshow-item="previous"></a>
                    <a className="uk-slidenav-large uk-position-center-right uk-position-small uk-hidden-hover" href="#" data-uk-slidenav-next data-uk-slideshow-item="next"></a>
        
            </div>
        </div>
                        )
                    }
                }
                
export default Test