import React from 'react';

import CodingProjectTemplate from  './CodingProjectTemplate';
import {Link} from 'react-router-dom';


const Stackskills=['React', 'HTML & CSS', 'Version control', 'Deployment', 'Node'];
const Projectsdone =[ 'gladstepApp', 'gladstep Website', 'livewireWebsite', 'KukyotoWebApp', 'myportifolio' ];
export default  Webdevt => <div className="container">

<h1>As a Web Developer,</h1>
<div className="dev-descr-box">

<h3>I was Fascinated by the working of software and Web in after enrolling to study a bachelor degree in that shit.
after My Degree i decided to pursue <em>web and Mobile applications development</em> professionally and below are some of the projects that i've gotten my hands on

<br/>
<Link id="optLink" to="/ArtProjects">Check out my artistic skills too!</Link>

</h3>


<div className="skillBox">
{Stackskills.map(eachskill => <span>  <div className="circleDiv"><img alt="skillLogo"/></div>  <h4>{eachskill}</h4> </span>)}
</div>


</div>

<div className="proWorks">

<h1>My Software Development works</h1>
<div>
{Projectsdone.map( project => <div id="tempHold" > <CodingProjectTemplate /></div> )}

</div></div>
</div>