async function postProject(formData) {
  const url = `${import.meta.env.VITE_API_URL}/projects/`;
  const token = window.localStorage.getItem("token");

  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Token ${token}`,
    },
    body: formData,
  });

  if (!response.ok) {
    const fallbackError = "Error trying to create project";

    const data = await response.json().catch(() => {
      throw new Error(fallbackError);
    });

    const errorMessage = data?.detail ?? fallbackError;
    throw new Error(errorMessage);
  }
  return await response.json();
}

export default postProject;
