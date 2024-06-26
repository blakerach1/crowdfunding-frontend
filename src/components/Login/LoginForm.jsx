import { useState } from "react";
import { useNavigate } from "react-router-dom";
import postLogin from "../../api/post-login";
import useAuth from "../../hooks/use-auth";
import "./LoginForm.css";

function LoginForm() {
  const navigate = useNavigate();
  const { auth, setAuth } = useAuth();

  const [credentials, setCredentials] = useState({
    username: "",
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
    if (credentials.username && credentials.password) {
      postLogin(credentials.username, credentials.password).then((response) => {
        window.localStorage.setItem("token", response.token);
        window.localStorage.setItem("user_id", response.user_id);
        window.localStorage.setItem("is_staff", response.is_staff);
        setAuth({ token: response.token, user_id: response.user_id, is_staff: response.is_staff });
        navigate("/");
      }).catch((error) => {
        alert(error.message);
      });
    }
  };

  return (
    <form className="login-form" onSubmit={handleSubmit}>
      <div className="formDiv">
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          placeholder="Enter username"
          onChange={handleChange}
        />
      </div>
      <div className="formDiv">
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          placeholder="Password"
          onChange={handleChange}
        />
      </div>
      <button type="submit">Login</button>
    </form>
  );
}

export default LoginForm;
