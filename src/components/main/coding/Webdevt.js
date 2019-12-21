import React from 'react';

import CodingProjectTemplate from  './CodingProjectTemplate'


const Stackskills=['React', 'HTML & CSS', 'Version control', 'Deployment', 'Node'];
const Projectsdone =[ 'gladstepApp', 'gladstep Website', 'livewireWebsite', 'KukyotoWebApp', 'myportifolio' ];
export default  Webdevt => <div className="container">

<h1>As a Web Developer,</h1>
<div className="dev-descr-box">

<h3>I was Fascinated by the working of software and Web in after enrolling to study a bachelor degree in that shit.
after My Degree i decided to pursue and do web and applicatins development professionally and below are some of the projects that i've gotten my hands on</h3>
<div>
{Stackskills.map(eachskill => <div><h4>{eachskill}</h4></div>)}
</div>
</div>

<div className="proWorks">

<h1>My Web & App works</h1>
<div>
{
    Projectsdone.map( project => <div id="tempHold" > <CodingProjectTemplate />  </div>     )

}

</div>

</div>


</div>