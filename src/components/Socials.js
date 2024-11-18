import React from "react";
import jointImg from "../images/jointImg.jpg";
import "./Socials.css";


const Socials = () => {
    return(
    <div className="Socials">

                <div className="jointColumn">
                <a href="/" className="familyButton">JOIN(T) OUR FAMILY</a>
           <img src={jointImg} alt="joint" className="jointImg"/>
</div>
</div>

  )  
}
export default Socials;