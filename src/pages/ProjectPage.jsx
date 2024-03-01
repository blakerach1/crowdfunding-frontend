import { useParams } from "react-router-dom";
import useProject from "../hooks/use-project";

import SupporterName from "../components/Supporter";
import PledgeCreationForm from "../components/PledgeCreationForm";

function ProjectPage() {
  // Here we use a hook that comes for free in react router called 'useParams' to get the id from the URL so that we can pass it to our useProject hook.
  const { id } = useParams();
  //useProject returns three pieces of info, so we need to grab them all here
  const { project, sumOfPledges, isLoading, error } = useProject(id);

  const dollars = Intl.NumberFormat("en-AU", {
    style: "currency",
    currency: "AUD",
    maximumSignificantDigits: 3,
  });

  function formatTimeAgo(dateString) {
    const date = new Date(dateString);
    const now = new Date();
    const secondsAgo = Math.floor((now - date) / 1000);
    const minutesAgo = Math.floor(secondsAgo / 60);
    const hoursAgo = Math.floor(minutesAgo / 60);
    const daysAgo = Math.floor(hoursAgo / 24);
    const weeksAgo = Math.floor(daysAgo / 7);

    if (weeksAgo > 0) {
      return `${weeksAgo} weeks ago`;
    } else if (daysAgo > 0) {
      return `${daysAgo} days ago`;
    } else if (hoursAgo > 0) {
      return `${hoursAgo} hours ago`;
    } else if (minutesAgo > 0) {
      return `${minutesAgo} minutes ago`;
    } else {
      return `${secondsAgo} seconds ago`;
    }
  }

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error.message}</p>;
  }

  return (
    <div>
      <h2>{project.title}</h2>
      <img src={project.image} alt={project.title} />
      <h3>{project.description}</h3>
      <p>
        Created at:{" "}
        {new Date(project.date_created).toLocaleDateString("en-AU", {
          month: "long",
          year: "numeric",
        })}
      </p>
      <p>{`Status: ${project.is_open ? "Active" : "Inactive"}`}</p>
      <h3>Words of support</h3>
      <ul id="pledge-list">
        {project.pledges.map((pledgeData, key) => {
          return (
            <li key={key}>
              <SupporterName userId={pledgeData.supporter} />
              <p>{dollars.format(pledgeData.amount)}</p>
              <p>{formatTimeAgo(pledgeData.pledge_date)}</p>
              <p>Comment: {pledgeData.comment}</p>
            </li>
          );
        })}
      </ul>
      <h3>Goal: {dollars.format(project.goal)}</h3>
      <h3>Pledged to Date: {dollars.format(sumOfPledges)}</h3>
      <PledgeCreationForm project={id} />
    </div>
  );
}

export default ProjectPage;
