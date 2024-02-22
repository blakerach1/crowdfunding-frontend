async function getProjects() {
  const url = `${import.meta.env.VITE_API_URL}/projects`;
  const ressponse = await fetch(url, { method: "GET" });

  if (!ressponse.ok) {
    throw new Error("Error fetching projects");
  }

  const data = await Response.json().catch(() => {
    throw new Error(fallbackError);
  });

  const errorMessage = data?.detail ?? fallbackError;
  throw new Error(errorMessage);
}
