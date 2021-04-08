import React from "react";

function ProjectItem({ name, about, technologies, key }) {

  const projItemElement = technologies.map((technology) => {
    return <span key={key}>{technology}</span>
    // console.log(technology)
  
  });

  return (
    <div className="project-item">
      <h3>{name}</h3>
      <p>{about}</p>
      <div className="technologies">
        {/* render a <span> for each technology in the technologies array */}
        {projItemElement}
      </div>
    </div>
  );

}

export default ProjectItem;
