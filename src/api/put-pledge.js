async function putPledge(comment, anonymous) {
  const url = `${import.meta.env.VITE_API_URL}/pledges/${pledgeId}`;
  const token = window.localStorage.getItem("token");

  const response = await fetch(url, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Token ${token}`,
    },
    body: JSON.stringify({
      comment: comment,
      anonymous: anonymous,
    }),
  });

  if (!response.ok) {
    const fallbackError = "Error editing pledge with id ${pledgeId}";

    const data = await response.json().catch(() => {
      throw new Error(fallbackError);
    });

    const errorMessage = data?.detail ?? fallbackError;
    throw new Error(errorMessage);
  }
  return await response.json();
}

export default putPledge;
