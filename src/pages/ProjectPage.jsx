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
      <div className="projectPage">
        <h3>{project.title}</h3>
        <div className="projectPanel">
          <img src={project.image} alt={project.title} />
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
          </div>
        </div>
        <div className="projectStats">
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
      <div className="projectPledgeList">
        <h3>Supporters</h3>
        <div className="pledgeListing">
          <ul>
            {project.pledges.map((pledgeData, key) => {
              return (
                <li key={key}>
                  <Link to={`/pledges/${pledgeData.id}`}>
                    <SupporterName userId={pledgeData.supporter} />
                    <p>{formatCurrency(pledgeData.amount)}</p>
                    <p className="pledgedAgo">
                      Pledged: {formatTimeAgo(pledgeData.pledge_date)}
                    </p>
                    <p>Comment: {pledgeData.comment}</p>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <PledgeCreationForm project={id} />
    </div>
  );
}

export default ProjectPage;
