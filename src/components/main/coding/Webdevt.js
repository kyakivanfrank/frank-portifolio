import React from 'react';

import CodingProjectTemplate from  './CodingProjectTemplate';
import {Link} from 'react-router-dom';
import projectImage from  "../../../img/galleryImages/classFrank.jpg";
import gitLo from '../../../img/githubLogo.png';


// const Stackskills=['React', 'HTML & CSS', 'Version control', 'Deployment', 'Node'];
const Projectsdone =[ 'gladstepApp', 'gladstep Website', 'livewireWebsite', 'KukyotoWebApp', 'myportifolio' ];
export default  Webdevt => <div className="container">

<h1>As a Web Developer,</h1>
<div className="dev-descr-box">

<h3>I was Fascinated by the working of software and Web in after enrolling to study a bachelor degree in that shit.
after My Degree i decided to pursue <em>web and Mobile applications development</em> professionally and below are some of the projects that i've gotten my hands on
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
{ Projectsdone.map( project => 
    <div id="tempHold">
    <CodingProjectTemplate
    projectTitle="Mujaguze" projectDescr="
	Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
	tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
	quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
	consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
	cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
	proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    projectcreationDate="23/1/1885" projectContributor="mzee, kjhbkfd, ddd" projectLink="https://kyuka" projecttechUsed={[ gitLo,gitLo,gitLo,gitLo]} projectImage={projectImage}/>
 </div> )}

</div>


</div>
<h3>Thanks for looking through my works! Aiming to advance more ... </h3>

</div>