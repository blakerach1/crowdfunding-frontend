import { useState } from "react";

function PledgeCreationForm(props) {
  const [pledge, setPledges] = useState({
    amount: "",
    comment: "",
    anonymous: false,
    project: props.project, // need to figure our how to get the project id from url
    supporter: "", // need to figure out how to get the user id from the token
  });

  const handleChange = (event) => {
    const { id, value } = event.target;
    setPledges((prevPledge) => ({
      ...prevPledge,
      [id]: value,
    }));
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
    </form>
  );
}

export default PledgeCreationForm;
