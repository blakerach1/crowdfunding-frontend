import ProjectCards from "../components/Projects/ProjectCards"; // import the ProjectCard component
import useProjects from "../hooks/use-projects";
import "../pages/HomePage.css"; // import the HomePage.css file

function HomePage() {
  const { projects, isLoading, error } = useProjects(); // use the useProjects hook to get the projects

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error.message}</p>;
  }

  return (
    <section className="featured-projects-section">
      <h2>Featured Projects</h2>
      <div className="project-cards-container">
        {isLoading ? (
          <p>Loading...</p>
        ) : error ? (
          <p>
            Sorry, there is an error in loading this information!
          </p>
        ): (
          <ProjectCards projects={projects}/>
        )}
      </div>
    </section>
  );
}

export default HomePage;

// the projectData is an object that contains the project's data and key is the index of the project in the allProjects array.
