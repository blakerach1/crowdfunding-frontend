import ProjectCard from "../components/ProjectCard"; // import the ProjectCard component
import useProjects from "../hooks/use-projects";
import "./HomePage.css"; // import the HomePage.css file

function HomePage() {
  const { projects, isLoading, error } = useProjects(); // use the useProjects hook to get the projects

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error.message}</p>;
  }

  return (
    <div id="project-list">
      {projects.map((projectData, key) => {
        return <ProjectCard key={key} projectData={projectData} />;
      })}
    </div>
  );
}

export default HomePage;

// the projectData is an object that contains the project's data and key is the index of the project in the allProjects array.
