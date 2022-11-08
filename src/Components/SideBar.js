import React from "react"
import avatar from "../img/avatar.jpg"
import "../style/SideBar.css"

export const SideBar =() => {
    return(
        <aside className="aside">
            <section className="sidebar">
                <div className="user">
                    <img src={avatar}  className="avatar" alt="avatar" />
                    <p>Nadiia</p>
                </div>
                    
                <nav>
                   
                    <a href="/">Main</a>
                    <hr />

                    <a href="/post">Posts</a>
                    <hr />

                    <a href="/photo">Photo</a>
                    <hr />

                    <a href="/contacts">Contacts</a>
                    <hr />

                </nav>
             </section>
        </aside>    
    )
}