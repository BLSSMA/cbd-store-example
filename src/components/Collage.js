import React from "react";
import cloth from "../images/cloth.jpg";
import table from "../images/table.jpg";
import tincture from "../images/tincture.png";
import "./Collage.css";


const Collage = () => {

    return(
        <div className="Collage">
            <div className="container">
            <div className="grid">
                <div className="row">
                    <div className="col-12 clothImg">
                        <img src={cloth} alt="cloth" className="cloth"/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-6">
                        <img src={table} alt="table" className="table"/>
                    </div>
                    <div className="col-6">
                    <div className="row productButton">                        
                             <a href="/" alt="home">MEET OUR PRODUCTS</a>
                        </div>
                        <div className="row tincture">
                        <img src={tincture} alt="tincture" className="tinctureImg" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}

export default Collage;