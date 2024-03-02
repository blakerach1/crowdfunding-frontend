import EditPledgeForm from "../components/PledgeEditForm";
import usePledge from "../hooks/use-pledge";
import { useParams } from "react-router-dom";
import SupporterName from "../components/Supporter";
import { formatCurrency } from "../utils/FormatFunctions";

function PledgePage() {
  const { id } = useParams();
  const { pledge, isLoading, error } = usePledge(id);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error.message}</p>;
  }

  console.log("pledge object", pledge);

  return (
    <div>
      <p>{formatCurrency(pledge.amount)}</p>
      <p>{pledge.comment}</p>
      {/* if not anonymous, show supporter name */}
      {pledge.anonymous ? (
        <p>Anonymous</p>
      ) : (
        <SupporterName userId={pledge.supporter} />
      )}
      {/* on click of edit button, show edit form */}
      <EditPledgeForm pledge={pledge} />
    </div>
  );
}

export default PledgePage;
