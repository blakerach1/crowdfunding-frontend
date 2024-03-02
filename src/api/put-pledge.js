async function putPledge(
  pledgeId,
  amount,
  comment,
  anonymous,
  project,
  supporter
) {
  const url = `${import.meta.env.VITE_API_URL}/pledges/${pledgeId}`;
  const token = window.localStorage.getItem("token");

  // add try catch, wrap it over the entire response

  const response = await fetch(url, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Token ${token}`,
    },
    body: JSON.stringify({
      amount: amount,
      comment: comment,
      anonymous: anonymous,
      project: project,
      supporter: supporter,
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

// the throw new Error can't pass in an object, only a string
// packages, in typescript has inbuilt error
// google logging with vanilla JS
