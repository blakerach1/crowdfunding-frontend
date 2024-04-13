import { useParams } from "react-router-dom";
import useProject from "../hooks/use-project";
import { Link } from "react-router-dom";
import {
  formatCurrency,
  formatTimeAgo,
  formatDate,
} from "../utils/FormatFunctions";
import SupporterName from "../components/Pledges/Supporter";
import PledgeCreationForm from "../components/Pledges/PledgeCreationForm";
import "../components/Projects/ProjectPage.css";
import PledgeCard from "../components/Pledges/PledgeCard";

function ProjectPage() {
  // Here we use a hook that comes for free in react router called 'useParams' to get the id from the URL so that we can pass it to our useProject hook.
  const { id } = useParams();
  //useProject returns three pieces of info, so we need to grab them all here
  const { project, sumOfPledges, isLoading, error } = useProject(id);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error.message}</p>;
  }

  return (
    <div>
      <section className="projectPage">
        <div className="project-img-container">
          <img src={project.image} alt={project.title} />
        </div>
        <div className="project-info">
          <h3>{project.title}</h3>
          <div className="project-summary">
            <p>{project.description}</p>
            <div className="fundingProgress">
              <p>
                <span className="boldText">Goal:</span>{" "}
                {formatCurrency(project.goal)}
              </p>
              <p>
                <span className="boldText">Pledged to Date:</span>{" "}
                {formatCurrency(sumOfPledges)}
              </p>
              <p>
              <span className="boldText">Launched:</span>{" "}
              {formatDate(project.date_created)}
              </p>
              <p>
                <span className="boldText">Status:</span>{" "}
                {`${project.is_open ? "Active" : "Inactive"}`}
              </p>
            </div>
          </div>
        </div>

        <div className="supporting-text-section">
            <div>
              <p>
                In this moment, your contribution matters more than ever. 
                We invite you to join us in making a tangible difference. 
                Every pledge, no matter its size, carries immense potential.
              </p>
              <p>
                By pooling our resources together, we can breathe life into 
                this project, turning aspirations into accomplishments. 
                Your support isn't just a financial investment; it's a commitment 
                to positive change and innovation. 
              </p>
              <p>
              Join us on this journey, and let's make a meaningful impact, 
              one pledge at a time.
              </p>
            </div>
            <Link to="">Make a Pledge</Link>
        </div>

        <section className="projectPledgeList">
          <h3>Supporters</h3>
          <div className="pledge-card-container">
            {project.pledges.map((pledge, index) => (
              <PledgeCard key={index} pledge={pledge}/>
            ))}
          </div>
        </section>
        <PledgeCreationForm project={id} />
      </section>
    </div>

  );
}

export default ProjectPage;
