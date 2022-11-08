import "../style/Photo.css";
import imgPost from "../img/img.jpg"
import React from "react";

export const Photo =() => {
    return(
        <div className="main">
            <section className="headerSection">
                <h1>PHOTO</h1>
            </section>

            <section className="postSection">
                <div className="Photo">
                    <img src={imgPost} alt="img Posts" />
                </div>

                <div className="Photo">
                    <img src={imgPost} alt="img Posts" />
                </div>

                <div className="Photo">
                    <img src={imgPost} alt="img Posts" />
                </div>

                <div className="Photo">
                    <img src={imgPost} alt="img Posts" />
                </div>

                <div className="Photo">
                    <img src={imgPost} alt="img Posts" />
                </div>

                <div className="Photo">
                    <img src={imgPost} alt="img Posts" />
                </div>
            </section>
        </div>
    )
}