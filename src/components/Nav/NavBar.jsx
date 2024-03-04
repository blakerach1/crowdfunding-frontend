import { Link } from "react-router-dom";
import useAuth from "../../hooks/use-auth";
import "./NavBar.css";

function NavBar() {
  const { auth, setAuth } = useAuth();

  const handleLogout = () => {
    window.localStorage.removeItem("token");
    setAuth({ token: null });
  };

  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            {auth.token ? (
              <Link to="/" onClick={handleLogout}>
                Log Out
              </Link>
            ) : (
              <Link to="/login">Log In</Link>
            )}
          </li>
          <li>{!auth.token && <Link to="/signup">Sign Up</Link>}</li>
          <li>{auth.token && <Link to="/create">Create</Link>}</li>
        </ul>
      </nav>
    </div>
  );
}

export default NavBar;
