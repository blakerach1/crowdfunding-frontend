import { Link } from "react-router-dom";
import {
    formatCurrency,
    formatTimeAgo,
    formatDate,
  } from "../../utils/FormatFunctions";
import SupporterName from "./Supporter";
import "./PledgeCard.css";


function PledgeCard({ pledge, index }) {
    

    return (
       <div className="pledge-card">
        <ul>
            <li>
                <Link to={`/pledges/${pledge.id}`}>
                    <SupporterName userId={pledge.supporter} />
                    <p>{formatCurrency(pledge.amount)}</p>
                    <p className="pledgedAgo">
                    Pledged: {formatTimeAgo(pledge.pledge_date)}
                    </p>
                    <p>Comment: {pledge.comment}</p>
                </Link>
            </li>
        </ul>
       </div> 
    )

}

export default PledgeCard;