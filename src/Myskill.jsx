import React from "react";
import './myskill.css'

const Myskill = () => {
    return (
    <div id="skill-container">
<h1 className="h1-myskill" >My Skill</h1>
<div class="container">
  <div class="skill-box">
    <span class="title">HTML</span>

    <div class="skill-bar">
      <span class="skill-per html">
        <span class="tooltip">70%</span>
      </span>
    </div>
  </div>

  <div class="skill-box">
    <span class="title">CSS</span>

    <div class="skill-bar">
      <span class="skill-per scss">
        <span class="tooltip">80%</span>
      </span>
    </div>
  </div>
  <div class="skill-box">
    <span class="title">Javascript</span>

    <div class="skill-bar">
      <span class="skill-per Boostrap">
        <span class="tooltip">10%</span>
      </span>
    </div>
  </div>
</div>

    <div className="skill-box-container">
        <div className="skill-box1">
         <h1 className="h1-skill" ><i class="fa-brands fa-html5"></i> HTML</h1>
        </div>
        <div className="skill-box1">
         <h1 className="h1-skill" ><i class="fa-brands fa-css3"></i> CSS</h1>
        </div>
         <div className="skill-box1">
         <h1 className="h1-skill" ><i class="fa-brands fa-js"></i> Javascript</h1>
        </div>
        <div className="skill-box1">
         <h1 className="h1-skill" ><i class="fa-brands fa-react"></i> React.JS</h1>
        </div>



    </div>
    </div>
    );
};

export default Myskill;