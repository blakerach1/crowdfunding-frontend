function PledgeCreationForm() {
  return (
    <form>
      <div>
        <label htmlFor="amount">Pledge Amount ($):</label>
        <input type="text" id="amount" placeholder="Enter Pledge Amount" />
      </div>
      <div>
        <label htmlFor="comment">Comment:</label>
        <input type="text" id="comment" placeholder="Enter Comment" />
      </div>
      <div>
        <label htmlFor="anonymous">Pledge Anonymously:</label>
        <input type="checkbox" id="anonymous" />
      </div>
    </form>
  );
}

export default PledgeCreationForm;
