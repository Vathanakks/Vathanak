import React from "react";
import './Header.css';
const Header = () => {
    return (
<header className="header" >
    <nav>
        <ul className="nav-list">
            <li><i class="fa fa-home" aria-hidden="true"></i><a href="/">Home</a></li>
            <li><a href="#showcase-page">My SKill</a></li>
            <li><a href="/skill-container">About</a></li>
        </ul>
    </nav>

</header>


    );
};

export default Header;