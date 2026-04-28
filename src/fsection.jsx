import React from "react";
import './fsection.css';
const Fsection = () => {
    return(
    <div id="bfcontainer">
     <div className="fcontainer row9">
        <div className="fcontainer1">
            <div className="lefthero">
        <h1 className="h1name" >Hi, I'm </h1>
        <h1 className="h2name" >Keat Sopheavathanak </h1>

        <p className="pb">A full stack developer <i class="fa-solid fa-code"></i></p>
        <p>For me, software development isn't just about writing syntax; it's about translating complex human problems into elegant, logical solutions.</p>

        <h1><i class="fa-brands fa-html5"></i><i class="fa-brands fa-css3"></i><i class="fa-brands fa-js"></i>
         <i class="fa-brands fa-react"></i><i class="fa-brands fa-github"></i> </h1>
            </div>
        <div className="righthero">
            <img src="photo_2025-11-04_21-32-52.jpg" width="300px" alt="Profile Pic"></img>
        </div>
    </div>
    <br></br>
            <div className="fcontainer2">
                <a href="https://github.com/Vathanakks" class="fcbutton" target="_blank" rel="noopener noreferrer"  ><i class="fa-brands fa-github"></i> Github Profile</a>
                <a href="#cv-wrapper" class="fcbutton"><i class="fa-solid fa-file" style={{color: "#fff"}}></i>   View CV</a>
            {/*
                <a href="https://t.me/Vathanakks" class="fcbutton bottom" target="_blank" rel="noopener noreferrer"  ><i class="fa-brands fa-telegram" style={{color: "rgb(116, 192, 252)",}}></i>   Quick Contact</a>
            */}
            </div>

     </div>
     </div>
    );
};

export default Fsection;