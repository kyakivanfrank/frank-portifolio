import React from 'react';

import CodingProjectTemplate from  './CodingProjectTemplate';
import { Link } from 'react-router-dom';
import Dataset from  "../../Dataset";
import reactLogo from "../../../img/projectFiles/toolsIcons/react.png"

const Stackskills =["one", "two", 'threee', "one", "two", 'threee' ];

export default  Webdevt => <div className="container">

<h1>As a Web Developer,</h1>
<div className="dev-descr-box">

<h3>

Right from my high school, I was fascinated by the use of computers, the working of software and the internet. Going to college I chose to enroll in a bachelor's degree in computer applications which gave me quite a broader view of what I aimed for.
 So I specialized in <em>Web Development and mobile applications.</em> through the process, I haven't hesitated to get my hands dirty.



<br/>
<Link id="optLink" to="/ArtProjects">Feel free to check out my artistic skills too!</Link>
</h3>

<div className="skillBox">
<div className="SkillContainer">
{Stackskills.map(eachskill =>  <div className="circleDiv"> <img id="skillLogo" src={reactLogo} alt="skillLogo"/> </div>)}</div>
</div>
</div>

<div className="proWorks">
<h1>My Software Development works</h1>
<div >
{ Dataset.SoftWareDevelopmentDataset.map( eachProject => 
    <div id="tempHold">
    <CodingProjectTemplate
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
<h3>Thanks for looking through my works! Aiming to advance more ... </h3>

</div>