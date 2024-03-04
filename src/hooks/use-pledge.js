import { useState, useEffect } from "react";
import getPledge from "../api/get-pledge";

export default function usePledge(pledgeId) {
  const [pledge, setPledge] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState();

  useEffect(() => {
    // Here we pass the pledgeID to the getPledge function.
    getPledge(pledgeId)
      .then((pledge) => {
        setPledge(pledge);
        setIsLoading(false);
      })
      .catch((error) => {
        setError(error);
        setIsLoading(false);
      });

    // This time we pass the pledgeId to the dependency array so that the hook will re-run if the pledgeId changes.
  }, [pledgeId]);

  return { pledge, setPledge, isLoading, error };
}
