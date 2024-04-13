import { useState } from "react";
import { useNavigate } from "react-router-dom";
import postSignUp from "../../api/post-signup";
import "./SignUpForm.css";

function SignUpForm() {
  const navigate = useNavigate();

  const [credentials, setCredentials] = useState({
    username: "",
    first_name: "",
    last_name: "",
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
      credentials.first_name &&
      credentials.last_name &&
      credentials.email &&
      credentials.password
    ) {
      postSignUp(
        credentials.username,
        credentials.first_name,
        credentials.last_name,
        credentials.email,
        credentials.password
      ).then((response) => {
        setCredentials(response);
        navigate("/");
      });
    }
  };

  return (
    <form className="signupForm" onSubmit={handleSubmit}>
      <div className="formDiv">
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          placeholder="Enter Username"
          onChange={handleChange}
          autoComplete="on"
        />
      </div>
      <div className="formDiv">
        <label htmlFor="first_name">First Name</label>
        <input
          type="text"
          id="first_name"
          placeholder="Enter First Name"
          onChange={handleChange}
        />
      </div>
      <div className="formDiv">
        <label htmlFor="last_name">Last Name</label>
        <input
          type="text"
          id="last_name"
          placeholder="Enter Last Name"
          onChange={handleChange}
        />
      </div>
      <div className="formDiv">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          placeholder="Enter Email"
          onChange={handleChange}
          autoComplete="on"
        />
      </div>
      <div className="formDiv">
        <label htmlFor="password">Password <span>(min. 8 characters)</span></label>
        <input
          type="password"
          id="password"
          placeholder="Enter password"
          onChange={handleChange}
        />
      </div>
      <button className="signup-button" type="submit">Join</button>
    </form>
  );
}

export default SignUpForm;
