import { useState } from "react";
import postPledge from "../api/post-pledge";

function PledgeCreationForm(props) {
  const [pledge, setPledges] = useState({
    amount: "",
    comment: "",
    anonymous: false,
    project: props.project, // need to figure our how to get the project id from url
    supporter: "", // need to figure out how to get the user id from the token
  });

  const handleChange = (event) => {
    const { id, type } = event.target;
    const value =
      type === "checkbox" ? event.target.checked : event.target.value;
    setPledges((prevPledge) => ({
      ...prevPledge,
      [id]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (pledge.amount && pledge.comment) {
      postPledge(
        pledge.amount,
        pledge.comment,
        pledge.anonymous,
        pledge.project,
        pledge.supporter
      ).then((response) => {
        console.log(response);
        // clear form fields
        setPledges({
          amount: "",
          comment: "",
          anonymous: false,
        });
      });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="amount">Pledge Amount ($):</label>
        <input
          type="text"
          id="amount"
          placeholder="Enter Pledge Amount"
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="comment">Comment:</label>
        <input
          type="text"
          id="comment"
          placeholder="Enter Comment"
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="anonymous">Pledge Anonymously:</label>
        <input type="checkbox" id="anonymous" onChange={handleChange} />
      </div>
      <button type="submit">Create Pledge</button>
    </form>
  );
}

export default PledgeCreationForm;
