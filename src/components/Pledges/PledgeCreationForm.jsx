import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import postPledge from "../../api/post-pledge";
import useAuth from "../../hooks/use-auth";
import "./PledgeCreationForm.css";


function PledgeCreationForm(props) {
  const { id: projectId } = useParams();
  const navigate = useNavigate();

  const { auth } = useAuth();
  const [pledge, setPledges] = useState({
    amount: "",
    comment: "",
    anonymous: false,
    project: projectId,
    supporter: auth.user_id, 
  });


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
    if (pledge.amount) {
      postPledge(
        pledge.amount,
        pledge.comment,
        pledge.anonymous,
        pledge.project,
        pledge.supporter
      ).then((response) => {
        // clear form fields
        setPledges({
          amount: "",
          comment: "",
          anonymous: false,
          project: props.project,
          supporter: auth.user_id,
        }); 
        location.reload();
      }).catch((error) => {
        window.alert(error.message);
        navigate("/login");
        });
    }
  };


  return (
    <section className="pledgeForm">
      <h3>Make your Pledge</h3>
      <p>Join many others to support a worthy cause</p>

      <form className="pledge-form">
        <div className="formDiv">
          <label htmlFor="amount">Amount ($):</label>
          <input
            type="text"
            id="amount"
            value={pledge.amount}
            placeholder="Enter Pledge Amount"
            onChange={handleChange}
          />
        </div>
        <div className="formDiv">
          <label htmlFor="comment">Words of Support <span>(optional)</span></label>
          <input
            type="textarea"
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
