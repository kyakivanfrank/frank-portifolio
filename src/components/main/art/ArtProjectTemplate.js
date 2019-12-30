import React from "react";


const ArtProjectTemplate = ({ projectTitle, projectDescr, projectcreationDate, projectContributor,
    projectLink, projecttechUsed, projectImage }) => <div className="templato">

<div className="templatedescr">
<h1>{projectTitle}</h1>
<p>{projectDescr}</p>
<h3>contributors: <em>{projectContributor}</em></h3>

<a href="###"><h3>{projectLink}</h3></a>

<h4 id="toolsHeading">Tools engaged</h4>

<div id="skillsUsed">{projecttechUsed.map( skill => <h3 id="toolsUsed">{skill}</h3>) }</div>

<h4 id="date">{projectcreationDate}</h4>
</div>

<div className="imgHold"><img src={projectImage} alt='this is the '/></div>

</div>

export default ArtProjectTemplate;