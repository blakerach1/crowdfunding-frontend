import { useState, useEffect } from "react";
import getProject from "../api/get-project";

export default function useProject(projectId) {
  const [project, setProject] = useState();
  const [sumOfPledges, setSumOfPledges] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState();

  useEffect(() => {
    // Here we pass the projectID to the getProject function.
    getProject(projectId)
      .then((project) => {
        setProject(project);
        setIsLoading(false);
        if (project.pledges) {
          const sum = project.pledges.reduce(
            (total, pledge) => total + pledge.amount,
            0
          );
          setSumOfPledges(sum);
        }
      })
      .catch((error) => {
        setError(error);
        setIsLoading(false);
      });

    // This time we pass the projectId to the dependency array so that the hook will re-run if the projectId changes.
  }, [projectId]);

  return { project, sumOfPledges, isLoading, error };
}
