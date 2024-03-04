import useUser from "../../hooks/use-user";

function SupporterName({ userId }) {
  const { user, isLoading, error } = useUser(userId);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error.message}</p>;
  }

  return (
    <div className="supporter-info">
      <p>
        {user.first_name} {user.last_name}
      </p>
    </div>
  );
}

export default SupporterName;
