import React from "react";
import jointImg from "../images/jointImg.jpg";
import "./Socials.css";


const Socials = () => {
    return(
    <div className="Socials">
                <div className="jointColumn">
           <img src={jointImg} alt="joint" className="jointImg"/>
                <a href="/" className="familyButton">JOIN(T) OUR FAMILY</a>
</div>
</div>
  )  
}
export default Socials;