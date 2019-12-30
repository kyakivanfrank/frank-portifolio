import React from 'react';

import CodingProjectTemplate from  './CodingProjectTemplate';
import { Link } from 'react-router-dom';
import Dataset from  "../../Dataset";

export default  Webdevt => <div className="container">

<h1>As a Web Developer,</h1>
<div className="dev-descr-box">

<h3>

Right from my high school, I was fascinated by the use of computers, the working of software and the internet. Going to college I chose to enroll in a bachelor's degree in computer applications which gave me quite a broader view of what I aimed for.
 So I specialized in <em>Web Development and mobile applications.</em> through the process, I haven't hesitate to get my hands dirty.



<br/>
<Link id="optLink" to="/ArtProjects">Feel free to check out my artistic skills too!</Link>
</h3>

<div className="skillBox">{
    // Stackskills.map(eachskill => <span>  <div className="circleDiv"><img alt="skillLogo"/></div>  <h4>{eachskill}</h4> </span>)
}</div>
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