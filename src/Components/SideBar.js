import React from "react"
import avatar from "../img/avatar.jpg"
import "../style/SideBar.css"
import {Link} from 'react-router-dom';

export const SideBar =() => {
    return(
        <aside className="aside">
            <section className="sidebar">
                <div className="user">
                    <img src={avatar}  className="avatar" alt="avatar" />
                    <p>Nadiia</p>
                </div>
                    
                <nav>
                   
                    <Link to ="/">Main</Link>
                    <hr />

                    <Link to ="/post">Posts</Link>
                    <hr />

                    <Link to ="/photo">Photo</Link>
                    <hr />

                    <Link to ="/contacts">Contacts</Link>
                    <hr />

                </nav>
             </section>
        </aside>    
    )
}