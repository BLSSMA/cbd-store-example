import React from "react";
import plate from "../images/plate.png";
import "./ShopPage.css"


const ShopPage = () => {
    return(
        <div className="ShopPage">
        <div className="shopPic">
            <div className="ediblesButton"><a href="/">SHOP EDIBLES</a></div>
                        <img src={plate} alt="cookies" className="plateImg"/>
            <div className="smokeButton"><a href="/">SHOP SMOKEABLES</a></div>
                    </div>
                </div>
    )
}
export default ShopPage;