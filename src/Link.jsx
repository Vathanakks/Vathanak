import React from "react";
import './link.css';

const Link = () => {
    return (
        <div className="link-container">
            <h1 className="profile-text" >My Profile Link <i class="fa fa-link" aria-hidden="true"></i></h1>
            <a href="#" className="link-box" target="_blank" rel="noopener noreferrer">
                <div className="link-logo">
                <img src="facebook-logo.avif"></img>
                </div>
                <h1 className="link-box-text">Facebook</h1>
            </a>
            < div className="link-box">
                <div className="link-logo">
                <img src="unnamed.png"></img>
                </div>
                <h1 className="link-box-text">ABA</h1>
            </div>
            < div className="link-box">
                <div className="link-logo">
                <img src="logo.png"></img>
                </div>
                <h1 className="link-box-text">Acleda</h1>
            </div>
            <a href="https://t.me/vathanakks" className="link-box" target="_blank" rel="noopener noreferrer">
                <div className="link-logo">
                <img src="Telegram_logo.svg.png"></img>
                </div>
                <h1 className="link-box-text">Telegram</h1>
            </a>



        </div>

    );
};

export default Link;