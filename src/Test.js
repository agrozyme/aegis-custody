import React, { Component } from "react";

class Test extends Component { 
    render() {
        return(
<div className="uk-position-relative uk-visible-toggle uk-light" tabindex="-1" uk-slider>
    <ul className="uk-slider-items uk-child-width-1-2 uk-child-width-1-3@s uk-child-width-1-4@m">
        <li>
            <img src="images/slider1.jpg" alt="" />
            <div className="uk-position-center uk-panel"><h1>1</h1></div>
        </li>
        <li>
            <img src="images/slider2.jpg" alt="" />
            <div className="uk-position-center uk-panel"><h1>2</h1></div>
        </li>
        <li>
            <img src="images/slider3.jpg" alt="" />
            <div className="uk-position-center uk-panel"><h1>3</h1></div>
        </li>
        <li>
            <img src="images/slider4.jpg" alt="" />
            <div className="uk-position-center uk-panel"><h1>4</h1></div>
        </li>
        <li>
            <img src="images/slider5.jpg" alt="" />
            <div className="uk-position-center uk-panel"><h1>5</h1></div>
        </li>
        <li>
            <img src="images/slider1.jpg" alt="" />
            <div className="uk-position-center uk-panel"><h1>6</h1></div>
        </li>
        <li>
            <img src="images/slider2.jpg" alt="" />
            <div className="uk-position-center uk-panel"><h1>7</h1></div>
        </li>
        <li>
            <img src="images/slider3.jpg" alt="" />
            <div className="uk-position-center uk-panel"><h1>8</h1></div>
        </li>
        <li>
            <img src="images/slider4.jpg" alt="" />
            <div className="uk-position-center uk-panel"><h1>9</h1></div>
        </li>
        <li>
            <img src="images/slider5.jpg" alt="" />
            <div className="uk-position-center uk-panel"><h1>10</h1></div>
        </li>
    </ul>

<a className="uk-position-center-left uk-position-small uk-hidden-hover" href="#" uk-slidenav-previous uk-slider-item="previous"></a>
<a className="uk-position-center-right uk-position-small uk-hidden-hover" href="#" uk-slidenav-next uk-slider-item="next"></a>

</div>
        )
    }
}

export default Test