import React from 'react';

import ArtProjectTemplate from  './ArtProjectTemplate'


const Artskills=['', 'Graphics Design', 'painting', 'Singing', 'Node'];
const Projectsdone =[ 'gladstepApp', 'gladstep Website', 'livewireWebsite', 'KukyotoWebApp', 'myportifolio' ];
export default  ArtProjects => <div className="container">

<h1>As an Artist,</h1>
<div className="dev-descr-box">

<h3>Being born to a Father who was a <em>FineArtist</em>. I quickly grasped the ease on how to create artistic "somethings" at a tender Age.
<br/> Starting with drawing very simple sketches to coming up with Large Complex Artistic projects ranging from paintings, Digitally designed Art( Graphics Design ) to many other arts <br/> 
Unexpectedly, This even gave me an artistic perception of Music and Dance(Hobbies)</h3>
<div>
{Artskills.map(eachskill => <div><h4>{eachskill}</h4></div>)}
</div>
</div>

<div className="proWorks">

<h1>My Art works</h1>
<div>
{
    Projectsdone.map( project => <div id="tempHold" > <ArtProjectTemplate />  </div>     )

}

</div>

</div>


</div>