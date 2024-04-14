import { Link } from "react-router-dom";
import useAuth from "../../hooks/use-auth";
import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { CgClose } from "react-icons/cg";
import "./NavBar.css";
import WaveIcon from "../Icons/Wave";

function NavBar() {
  const { auth, setAuth } = useAuth();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLogout = () => {
    window.localStorage.removeItem("token");
    window.localStorage.removeItem("user_id");
    window.localStorage.removeItem("is_staff");
    setAuth({ token: null, user_id: null, is_staff: null });
  };

  return (
    <div className="mobile-container">
      <div className="topNav">
        <div className="wave-icon"><WaveIcon />
        <Link className="active" onClick={() => setMenuOpen(!menuOpen)} to="/">
        Crowd<span>Harbour</span>
        </Link>
        </div>
        <div
          className={`${"nav-Links"} ${
            menuOpen ? "nav-showItem" : "nav-hideItem"
          }`}
        >
         <Link onClick={() => setMenuOpen(!menuOpen)} to="/">
          Home
         </Link>
         <Link onClick={() => setMenuOpen(!menuOpen)} to="/">
          About Us
         </Link>
         <Link onClick={() => setMenuOpen(!menuOpen)} to="/">
          Terms & Conditions
         </Link>
          {!auth.token ? (
            <Link
              to="/signup"
              onClick={() => 
                setMenuOpen(!menuOpen)}>
              Sign Up
              </Link>
          ): (
            <Link
              to="/create"
              onClick={() => setMenuOpen(!menuOpen)}>
              Create</Link>
          )}
          {auth.token ? (
          <Link 
            to="/" 
            onClick={() => {
              handleLogout();
              setMenuOpen(!menuOpen);
            }}
          >
            Log Out
          </Link>
          ) : (
            <Link onClick={() => setMenuOpen(!menuOpen)} to="/login">
              Login
            </Link>
          )}
        </div>
        <a className="icon hamburgerIcon">
          {menuOpen ? (
            <CgClose size={18} onClick={() => setMenuOpen(!menuOpen)} />
          ) : (
            <RxHamburgerMenu onClick={() => setMenuOpen(!menuOpen)} size={24} />
          )}
        </a>
      </div>
    </div>
  );
}

export default NavBar;
