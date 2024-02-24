import { Link } from "react-router-dom";
import "./ProjectCard.css";

function ProjectCard(props) {
  const { projectData } = props;
  const projectLink = `project/${projectData.id}`;

  return (
    <div className="project-card">
      <Link to={projectLink}>
        <img src={projectData.image} alt="Project Title Image" />
        <h3>{projectData.title}</h3>
      </Link>
    </div>
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
