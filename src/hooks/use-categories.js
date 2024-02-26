import { useState, useEffect } from "react";
import getCategories from "../api/get-categories";

export default function useCategories() {
  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState();

  useEffect(() => {
    getCategories()
      .then((categories) => {
        setCategories(categories);
        setIsLoading(false);
      })
      .catch((error) => {
        setError(error);
        setIsLoading(false);
      });
  }, []);

  return { categories, isLoading, error };
}
