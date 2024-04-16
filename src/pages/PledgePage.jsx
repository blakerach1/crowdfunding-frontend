import EditPledgeForm from "../components/Pledges/PledgeEditForm";
import usePledge from "../hooks/use-pledge";
import { useParams } from "react-router-dom";
import { useState } from "react";
import SupporterName from "../components/Pledges/Supporter";
import { formatCurrency } from "../utils/FormatFunctions";
import "./PledgePage.css";

function PledgePage() {
  const { id } = useParams();
  const { pledge, setPledge, isLoading, error } = usePledge(id);
  const [isEditing, setIsEditing] = useState(false);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error.message}</p>;
  }

  const handlePledgeUpdate = (updatedPledgeData) => {
    setPledge(updatedPledgeData);
    setIsEditing(false); // hide edit form after updating pledge
  };

  return (
    <div className="pledge-container">
      <p>Amount Pledged: {formatCurrency(pledge.amount)}</p>
      <p>Comment: {pledge.comment}</p>
      {/* if not anonymous, show supporter name */}
      {pledge.anonymous ? (
        <p>Supporter: Anonymous</p>
      ) : (
        <SupporterName userId={pledge.supporter} />
      )}
      <button onClick={() => setIsEditing(!isEditing)}>
        {isEditing ? "Cancel" : "Edit Pledge"}
      </button>
      {isEditing && (
      <EditPledgeForm pledge={pledge} onUpdate={handlePledgeUpdate} />
      )}
    </div>
  );
}

export default PledgePage;
