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
      <div>
        <h2>{project.title}</h2>
        <img src={project.image} alt={project.title} />
        <h3>{project.description}</h3>
        <p>Created at: {formatDate(project.date_created)}</p>
        <p>{`Status: ${project.is_open ? "Active" : "Inactive"}`}</p>
        <h3>Goal: {formatCurrency(project.goal)}</h3>
        <h3>Pledged to Date: {formatCurrency(sumOfPledges)}</h3>
      </div>
      <div>
        <h3>Supporters</h3>
        <ul id="pledge-list">
          {project.pledges.map((pledgeData, key) => {
            return (
              <li key={key}>
                <SupporterName userId={pledgeData.supporter} />
                <p>{formatCurrency(pledgeData.amount)}</p>
                <p>{formatTimeAgo(pledgeData.pledge_date)}</p>
                <p>Comment: {pledgeData.comment}</p>
                <Link to={`/pledges/${pledgeData.id}`}>Edit</Link>
              </li>
            );
          })}
        </ul>
      </div>
      <PledgeCreationForm project={id} />
    </div>
  );
}

export default ProjectPage;
