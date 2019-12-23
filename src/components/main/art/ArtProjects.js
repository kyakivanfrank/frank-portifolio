import React from 'react';

import ArtProjectTemplate from  './ArtProjectTemplate';
import gitLo from "../../../img/githubLogo.png";
import projectImage from '../../../img/galleryImages/MediFrank.jpg';

import {Link} from 'react-router-dom';

const Projectsdone =[ 'gladstepApp', 'KukyotoWebApp', 'myportifolio' ];
export default  ArtProjects => <div className="container">

<h1>As an Artist,</h1>
<div className="dev-descr-box">

<h3>Being born to a Father who was a <em>FineArtist</em>. I quickly grasped the ease on how to create artistic "somethings" at a tender Age.
<br/> Starting with drawing very simple sketches to coming up with Large Complex Artistic projects ranging from paintings, Digitally designed Art( Graphics Design ) to many other arts <br/> 
Unexpectedly, This even gave me an artistic perception of Music and Dance(Hobbies)
<br/>
<Link id="optLink" to="/Webdevt"> Feel free to check out my Coding skills too!</Link>

</h3>
<div className="skillBox">{
    //  Artskills.map(eachskill => <div><h4>{eachskill}</h4></div>)
    }</div>
</div>

<div className="proWorks">

<h1>My Art works</h1>


<div >
{ Projectsdone.map( project => 
    <div id="tempHold">
    <ArtProjectTemplate
    projectTitle="Kyakusse frank at Amritsar" projectDescr="
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

</div>

