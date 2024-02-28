import { useParams } from "react-router-dom";
import useProject from "../hooks/use-project";
import PledgeCreationForm from "../components/PledgeCreationForm";

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
      <h2>{project.title}</h2>
      <h3>Created at: {project.date_created}</h3>
      <h3>{`Status: ${project.is_open}`}</h3>
      <h3>Pledges:</h3>
      <ul id="pledge-list">
        {project.pledges.map((pledgeData, key) => {
          return (
            <li key={key}>
              {pledgeData.amount} from {pledgeData.supporter}
            </li>
          );
        })}
      </ul>
      <h3>Pledged to Date: {sumOfPledges}</h3>
      <PledgeCreationForm project={id} />
    </div>
  );
}

export default ProjectPage;
