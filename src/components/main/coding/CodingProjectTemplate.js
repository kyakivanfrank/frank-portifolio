import React from "react";


const CodingProjectTemplate = ({ projectTitle, projectDescr, projectcreationDate, projectContributor,
     projectLink, projecttechUsed, projectImage }) => <div className="templato">

<div className="templatedescr">
<h1>{projectTitle}</h1>
<p>{projectDescr}</p>
<h3>contributors: <em>{projectContributor}</em> </h3>


<h4 id="toolsHeading">Tools devised</h4>
<div id="skillsUsed">{projecttechUsed.map( skill => <img id="skillImg" src={skill} alt={skill}/>) }</div>

<a href={projectLink} target="_blank" rel="noopener noreferrer" ><h3>{projectLink}</h3></a>


<h4 id="date">{projectcreationDate}</h4>
</div>

<div className="imgHold"><img src={projectImage} alt='this is the '/></div>


</div>

export default CodingProjectTemplate;