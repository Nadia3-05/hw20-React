import "../style/Post.css";
import imgPost from "../img/img.jpg"
import React from "react";

export const Post =() => {
    return(
        <div className="main">
            <section className="headerSection">
                <h1>POSTS</h1>
            </section>

            <section className="postSection">
                <div className="Post">
                    <h2>Title</h2>
                    <img src={imgPost} alt="img Posts" />
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.  </p>
                </div>

                <div className="Post">
                    <h2>Title</h2>
                    <img src={imgPost} alt="img Posts" />
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.  </p>
                </div>

                <div className="Post">
                    <h2>Title</h2>
                    <img src={imgPost} alt="img Posts" />
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.  </p>
                </div>

                <div className="Post">
                    <h2>Title</h2>
                    <img src={imgPost} alt="img Posts" />
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.  </p>
                </div>

                <div className="Post">
                    <h2>Title</h2>
                    <img src={imgPost} alt="img Posts" />
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.  </p>
                </div>

                <div className="Post">
                    <h2>Title</h2>
                    <img src={imgPost} alt="img Posts" />
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.  </p>
                </div>
            </section>
        </div>
    )
}