import { useState } from "react";
import { useNavigate } from "react-router-dom";
import postSignUp from "../api/post-signup";

function SignUpForm() {
  const navigate = useNavigate();

  const [credentials, setCredentials] = useState({
    username: "",
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    const { id, value } = event.target;
    setCredentials((prevCredentials) => ({
      ...prevCredentials,
      [id]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (
      credentials.username &&
      credentials.firstName &&
      credentials.lastName &&
      credentials.email &&
      credentials.password
    ) {
      postSignUp(
        credentials.username,
        credentials.firstName,
        credentials.lastName,
        credentials.email,
        credentials.password
      ).then((response) => {
        setCredentials(response);
        navigate("/");
      });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          placeholder="Enter Username"
          onChange={handleChange}
          autoComplete="on"
        />
      </div>
      <div>
        <label htmlFor="firstName">First Name:</label>
        <input
          type="text"
          id="firstName"
          placeholder="Enter First Name"
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="lastName">Last Name:</label>
        <input
          type="text"
          id="lastName"
          placeholder="Enter Last Name"
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          placeholder="Enter Email"
          onChange={handleChange}
          autoComplete="on"
        />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          placeholder="Enter password"
          onChange={handleChange}
        />
      </div>
      <button type="submit">Sign Up</button>
    </form>
  );
}

export default SignUpForm;
