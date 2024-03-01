import { useState } from "react";
import putPledge from "../api/put-pledge";
import useAuth from "../hooks/use-auth";

function EditPledgeForm(props) {
  const { auth } = useAuth();

  const [pledge, setPledges] = useState({
    amount: props.amount,
    comment: props.comment,
    anonymous: props.anonymous,
    project: props.project,
    supporter: props.user_id,
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
      putPledge(
        pledge.amount,
        pledge.comment,
        pledge.anonymous,
        pledge.project,
        pledge.supporter
      ).then((Response) => {
        console.log(Response);
      });
    }
  };

  return (
    <form>
      <div>
        <label htmlFor="amount">Pledge Amount ($):</label>
        <input
          type="text"
          id="amount"
          value={pledge.amount}
          placeholder="Enter Pledge Amount"
          onChange={handleChange}
          readOnly
        />
      </div>
      <div>
        <label htmlFor="comment">Comment:</label>
        <textarea
          id="comment"
          value={pledge.comment}
          placeholder="Enter Comment"
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="anonymous">Anonymous:</label>
        <input
          type="checkbox"
          id="anonymous"
          checked={pledge.anonymous}
          onChange={handleChange}
        />
      </div>
      <button onClick={handleSubmit}>Update Pledge</button>
    </form>
  );
}

export default EditPledgeForm;
