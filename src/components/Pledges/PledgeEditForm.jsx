import { useState } from "react";
import putPledge from "../../api/put-pledge";
// import useAuth from "../hooks/use-auth";

function EditPledgeForm({ pledge, onUpdate }) {
  const [updatedPledge, updatePledge] = useState({
    id: pledge.id,
    amount: pledge.amount,
    comment: pledge.comment,
    anonymous: pledge.anonymous,
    project: pledge.project,
    supporter: pledge.supporter,
  });


  const handleChange = (event) => {
    const { id, type } = event.target;
    const value =
      type === "checkbox" ? event.target.checked : event.target.value;
    updatePledge((prevPledge) => ({
      ...prevPledge,
      [id]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const isValid =
      !!updatedPledge.amount &&
      !!updatedPledge.comment &&
      !!updatedPledge.project &&
      !!updatedPledge.supporter;

    console.log("is valid payload", isValid);

    if (isValid) {
      putPledge(
        pledge.id,
        updatedPledge.amount,
        updatedPledge.comment,
        updatedPledge.anonymous,
        updatedPledge.project,
        updatedPledge.supporter
      ).then((response) => {
        onUpdate(response);
      });
    }
  };

  return (
    <form className="pledge-edit-form">
      <div>
        <p>Pledge Amount ($): {pledge.amount}</p>
      </div>
      <div>
        <label htmlFor="comment">Comment:</label>
        <textarea
          id="comment"
          value={updatedPledge.comment}
          placeholder={pledge.comment}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="anonymous">Anonymous:</label>
        <input
          type="checkbox"
          id="anonymous"
          value={updatedPledge.anonymous}
          onChange={handleChange}
        />
      </div>
      <button onClick={handleSubmit}>Update Pledge</button>
    </form>
  );
}

export default EditPledgeForm;
