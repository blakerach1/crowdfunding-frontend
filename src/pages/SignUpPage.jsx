import SignUpForm from "../components/Login/SignUpForm";
import signupImage from "../../public/force-for-change.jpg";
import { Link } from "react-router-dom";
import "./SignUpPage.css";


function SignUpPage() {
  return (
    <>
      <section className="signupPage">
        <div className="signup-page-contents">
          <div className="image-container">
            <img className="signup-image"
            src={signupImage}
            alt="silhouette of person raising hand"/>
          </div>
          <div className="signup-form-section">
            <h2>Join Crowd<span>Harbour</span></h2>
            <div className="login-container">
              <p>Already have an account?</p>
              <Link to="/login">Login</Link>
            </div>
            <SignUpForm />
          </div>
        </div>
      </section>
    </>
  );
}

export default SignUpPage;
