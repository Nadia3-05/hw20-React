import React from "react";
import "../style/Main.css"
import logo from "../img/log.png"

export const Main =() => {
    return(
        <div className="main">
            <div className="info">
                <p>Wellcome to my home work #20.</p>
                <h2>REACT JS. SPA. NAVIGATION </h2>
                <div className="photo">
                    <img src={logo}  alt="img Posts" className="logo" />
                </div>
            </div>
        </div>
    )
}