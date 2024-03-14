import { useState } from "react";
import { useParams } from "react-router-dom";
import postPledge from "../../api/post-pledge";
import useAuth from "../../hooks/use-auth";
import "./PledgeCreationForm.css";

function PledgeCreationForm(props) {
  const { id: projectId } = useParams();

  const { auth } = useAuth();
  const [pledge, setPledges] = useState({
    amount: "",
    comment: "",
    anonymous: false,
    project: projectId,
    supporter: auth.user_id, // need to figure out how to get the user id from the token
  });

  console.log("initial pledge values", pledge);

  const handleChange = (event) => {
    const { id, type } = event.target;
    console.log(event.target);
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
          project: props.project,
          supporter: auth.user_id,
        });
        location.reload();
      });
    }
  };

  return (
    <section className="pledgeForm">
      <form>
        <div className="formDiv">
          <label htmlFor="amount">Pledge Amount ($):</label>
          <input
            type="text"
            id="amount"
            value={pledge.amount}
            placeholder="Enter Pledge Amount"
            onChange={handleChange}
          />
        </div>
        <div className="formDiv">
          <label htmlFor="comment">Comment:</label>
          <input
            type="text"
            id="comment"
            value={pledge.comment}
            placeholder="Enter Comment"
            onChange={handleChange}
          />
        </div>
        <div className="formDiv" id="pledgeAnonymously">
          <label htmlFor="anonymous">Pledge Anonymously:</label>
          <input
            type="checkbox"
            id="anonymous"
            value={pledge.anonymous}
            onChange={handleChange}
          />
        </div>
        <button className="pledgeButton" type="submit" onClick={handleSubmit}>
          Create Pledge
        </button>
      </form>
    </section>
  );
}

export default PledgeCreationForm;
