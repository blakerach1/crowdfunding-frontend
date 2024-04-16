import { useState } from "react";
import { useNavigate } from "react-router-dom";
import postSignUp from "../../api/post-signup";
import postLogin from "../../api/post-login";
import useAuth from "../../hooks/use-auth";
import { Link } from "react-router-dom";
import "./SignUpForm.css";

function SignUpForm() {
  const navigate = useNavigate();
  const { auth, setAuth } = useAuth();

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
      ).then(() => {
        postLogin(credentials.username, credentials.password).then((response) => {
          window.localStorage.setItem("token", response.token);
          window.localStorage.setItem("user_id", response.user_id);
          window.localStorage.setItem("is_staff", response.is_staff);
          setAuth({ token: response.token, user_id: response.user_id, is_staff: response.is_staff });
          navigate("/");
        });        
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
      <p>By joining, you agree to the <Link to="/">Terms</Link> and <Link to="/">Privacy Policy</Link></p>
    </form>
  );
}

export default SignUpForm;
