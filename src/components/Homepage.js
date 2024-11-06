import React from "react";
import bottlesandcaps from "../images/bottlesandcaps.png";
import bears from "../images/bears.png";
import Vector from "../images/Vector 1.png";
import tagline from "../images/tagline.png";
import shoptag from "../images/shoptag.png";

import "./Homepage.css";

const Homepage = () =>{

return(
    <div className="Homepage">
        <div className="container">
            <div className="grid">
                <div className="row">
                    <div className="strikethrough">____________________________</div>
                    <div className="col-12 title">LOCAL CBD COMPANY</div>
                </div>
                <div className="row">
                    <div className="col-6 bottlesandcaps">
                        <img src={bottlesandcaps} alt="bottles and caps"/>
                    </div>
                    <div className="col-6 tagline">
                        <img src={tagline} alt="tagline" />
                    </div>
                </div>
                <div className="row">
                    <div className="col-6 shoptag">
                        <img src={shoptag} alt="shoptag" />
                    </div>
                    <div className="col-6 bears">
                        <img src={bears} alt="gummy bears"/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-8 Vector">
                        <img src={Vector} alt="curly arrow"/>
                    </div>
                    <div className="col-4">
                        <a href="/">SHOP</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
)
}

export default Homepage;