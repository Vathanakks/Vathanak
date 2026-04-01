import React from "react";
import './fsection.css';
const Fsection = () => {
    return(
     <div className="fcontainer row9">
        <div className="lefthero">
        <h1 className="h1name" >Hi, I'm Keat Sopheavatahanak</h1>
        <p>A full stack developer <i class="fa-solid fa-code"></i></p>
        <p>For me, software development isn't just about writing syntax; it's about translating complex human problems into elegant, logical solutions. The code is simply the tool we use to get there. The real craft lies in deeply understanding the user's need, breaking it down, and building a system that makes their day-to-day life genuinely easier.</p>

        <h1><i class="fa-brands fa-html5"></i><i class="fa-brands fa-css3"></i><i class="fa-brands fa-js"></i>
         <i class="fa-brands fa-react"></i><i class="fa-brands fa-github"></i> </h1>


        <div className="linkbox">
        <div className="ghprofile">
            <a href="#skill-container" className="linktext">Github Profile</a>
        </div>
        <div className="ghprofile">
            <h1 className="linktext">My Skills</h1>
        </div>
        </div>
    </div>
    <div className="righthero">
        <img src="photo_2025-11-04_21-32-52.jpg" width="300px" alt="Profile Pic"></img>
    </div>

     </div>
    );
};

export default Fsection;