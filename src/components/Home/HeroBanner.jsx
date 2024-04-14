import { Link } from "react-router-dom";
import "./HeroBanner.css";
import heroBannerImage from "/water-drop.jpg";
import useAuth from "../../hooks/use-auth";

function HeroBanner() {
    const { auth, setAuth } = useAuth();


    return (
        <div className="hero-banner-container">
                <img className="hero-banner-image"
                src={heroBannerImage}
                alt="water droplet causing a ripple"
                />
            <div className="hero-banner-text">
                <h4><strong>Community-driven investment is at the heart of CrowdHarbour.</strong></h4>
                <p>Our platform is dedicated to hosting projects that champion<span>positive social impact.</span></p>
                <p>Unlike traditional investing, where shareholders may feel disconnected, CrowdHarbour investors are deeply engaged with the causes they support.</p>
                <p>Whether you're a passionate advocate, a loyal supporter, or simply someone who believes in making a difference, CrowdHarbour connects you with projects that align with your values. Together, we can empower businesses to thrive and make meaningful contributions to society.</p>
            </div>
            {auth.token && ( 
            <Link to="/create">Create a Project</Link>
            )}
        </div>
    )
}

export default HeroBanner;