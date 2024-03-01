import { useState } from "react";
import putPledge from "../api/put-pledge";
// import useAuth from "../hooks/use-auth";

function EditPledgeForm({ pledge }) {
  const [updatedPledge, updatePledge] = useState({
    amount: pledge.amount,
    comment: pledge.comment,
    anonymous: pledge.anonymous,
    project: pledge.project,
    supporter: pledge.user_id,
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
    if (
      updatedPledge.anonymous === undefined
        ? pledge.anonymous
        : updatedPledge.anonymous && updatedPledge.comment
    );
    {
      putPledge(
        pledge.id,
        updatedPledge.amount,
        updatedPledge.comment,
        updatedPledge.anonymous,
        updatedPledge.project,
        updatedPledge.supporter
      ).then((Response) => {
        console.log(Response);
      });
    }
  };

  return (
    <form>
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
