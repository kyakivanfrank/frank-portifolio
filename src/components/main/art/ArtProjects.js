import React from 'react';

import ArtProjectTemplate from  './ArtProjectTemplate';
import FirebaseLogo from "../../../img/projectFiles/toolsIcons/firebase.png";

import {Link} from 'react-router-dom';

import Dataset from "../../Dataset";

const ArtSkills =["one", "two", 'threee', "one", "two", 'threee',"one", "two", 'threee', "one", "two", 'threee' ];



export default  ArtProjects => <div className="container">

<h1>As an Artist,</h1>
<div className="dev-descr-box">

<h3>Being born to a Father who was a <em>fine artist</em>. I quickly grasped the ease of how to come up with artistic "somethings" at a tender age.
<br/> Started with drawing very simple sketches to coming up with Large Complex Artistic projects ranging from paintings, Digitally designed Art( Graphics Design ) to many other arts <br/> 
Unexpectedly, This even gave me an artistic perception of Music and Dance (Hobbies)
<br/>
<Link id="optLink" to="/Webdevt"> Feel free to check out my Coding skills too!</Link>

</h3>


<div className="skillBox">
<div className="SkillContainer">
{ArtSkills.map(eachskill =>  <div className="circleDiv"> <img id="skillLogo" src={FirebaseLogo} alt="skillLogo"/> </div>)}</div>
</div>
</div>

<div className="proWorks">

<h1>My Art works</h1>


<div >
{ Dataset.ArtDevelopementDataset.map( eachProject => 
    <div id="tempHold">
    <ArtProjectTemplate
    projectTitle={eachProject.projectTitle} 
    projectDescr={eachProject.projectDescription}
    projectcreationDate={eachProject.projectDate}
     projectContributor={eachProject.projectcontributors}
      projectLink={eachProject.link2project}
       projecttechUsed={eachProject.projectSkillsUsed}
        projectImage={eachProject.projectImage}/>
 </div> )}

</div>

</div>

<h3>Thanks for looking through my works! More will be posted ... </h3>

</div>

