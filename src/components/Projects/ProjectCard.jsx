import { Link } from "react-router-dom";
import "./ProjectCard.css";
import React, { useEffect, useState } from "react";
import projectPlaceHolder from "../../assets/Project/project-placeholder.png";

function ProjectCard({ project }) {
  console.log("project inside project card:", project);

  const projectLink = `project/${project.id}`;
  
  return (
    <section className="project-card-body-container">
      <div className="project-card-container">

          <div className="project-image">
            {project.image ? (
              <div>
              <img
              src={project.image}
              className="project-image"
              alt="image of project"
              />
            </div>
            ) : (
              <div>
                <img
                src={projectPlaceHolder}
                className="project-image-placeholder"
                />
              </div>
            )}
          </div>
          <div className="project-card-header">
            <Link to={projectLink}>
              <h5>{project.title}</h5>
            </Link>
          </div>

      </div>
    </section>
  );
}

export default ProjectCard;

// it makes sense to create an individual component for the above, which has the job of displaying information about a single project.
// components of React are to enhance reuseability, readability, and maintainability of the code.
// Increases maintainability as we reduce cuppling between unrelated items, and increase cohesion (all related contained in one location).

// props is an object, and this has keys of all the props that we pass into our component.
// This particular component has a single prop called projectData, which is an object that contains the data for a single project.
// as a shortcut, we can destructure the projectData prop from the props object, which is what we've done in the first line of the function body.
// We've created a new variable called projectData, which is equal to the projectData prop from the props object.
// Which is like saying give me the project key of the props object as a variable, so that I can just refer to it as projectDate.image and projectData.title.
