import React from "react";
import './link.css';

const Link = () => {
    return (
        <div className="link-container">
            <h1 className="profile-text" >My Profile Link <i class="fa fa-link" aria-hidden="true"></i></h1>
            <a href="https://www.facebook.com/vathanakks" className="link-box" target="_blank" rel="noopener noreferrer">
                <div className="link-logo">
                <img src="facebook-logo.avif" alt="FB"></img>
                </div>
                <h1 className="link-box-text">Facebook</h1>
            </a>

            <a href="https://pay.ababank.com/oRF8/9pai2k5y" className="link-box" target="_blank" rel="noopener noreferrer">
                <div className="link-logo">
                <img src="unnamed.png" alt="ABA"></img>
                </div>
                <h1 className="link-box-text">ABA</h1>
            </a>

            <a href="https://pay.ababank.com/oRF8/9pai2k5y" className="link-box" target="_blank" rel="noopener noreferrer">
                <div className="link-logo">
                <img src="logo.png" alt="AC"></img>
                </div>
                <h1 className="link-box-text">Acleda</h1>
            </a>

            <a href="https://t.me/vathanakks" className="link-box" target="_blank" rel="noopener noreferrer">
                <div className="link-logo">
                <img src="Telegram_logo.svg.png" alt="Telegram"></img>
                </div>
                <h1 className="link-box-text">Telegram</h1>
            </a>



        </div>

    );
};

export default Link;