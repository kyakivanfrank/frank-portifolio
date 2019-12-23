import React from "react";


const ArtProjectTemplate = ({ projectTitle, projectDescr, projectcreationDate, projectContributor,
    projectLink, projecttechUsed, projectImage }) => <div className="templato">

<div className="templatedescr">
<h1>{projectTitle}</h1>
<p>{projectDescr}</p>
<h3>contributors: {projectContributor}</h3>

<a href="###"><h3>{projectLink}</h3></a>

<div id="skillsUsed">{projecttechUsed.map( skill => <img id="skillImg" src={skill} alt="this is a skill"/>) }</div>

<h4 id="date">{projectcreationDate}</h4>
</div>

<div className="imgHold"><img src={projectImage} alt='this is the '/></div>

</div>

export default ArtProjectTemplate;