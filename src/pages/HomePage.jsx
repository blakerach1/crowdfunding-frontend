import ProjectCard from "../components/ProjectCard"; // import the ProjectCard component
import { allProjects } from "../data"; // import the allProjects array
import "./HomePage.css"; // import the HomePage.css file

function HomePage() {
  return (
    <div id="project-list">
      {allProjects.map((projectData, key) => {
        return <ProjectCard key={key} projectData={projectData} />;
      })}
    </div>
  );
}

export default HomePage;

// the projectData is an object that contains the project's data and key is the index of the project in the allProjects array.
