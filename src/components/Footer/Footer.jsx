import { Link } from "react-router-dom";
import "./Footer.css";
import FacebookIcon from "../Icons/FacebookIcon";
import InstagramIcon from "../Icons/InstagramIcon";
import LinkedinIcon from "../Icons/LinkedinIcon";

function Footer() {
    return (
        <>
        <footer className="footer">
            <div className="footer-container">
                <h2>Crowd<span>Harbour</span></h2>
                <p className="crowdharbour-info">CrowdHarbour is a platform dedicated to supporting
                     social impact projects through crowdfunding pledges
                      from individuals who wish to contribute to 
                      meaningful causes. Our goal is to connect passionate
                       backers with impactful initiatives, fostering 
                       positive change within communities
                </p>
                <h4>Legals</h4>
                <ul className="legals-list">
                    <li><a href="/">Terms of Use</a></li>
                    <li><a href="/">Privacy Policy</a></li>
                    <li><a href="/">Legal Disclaimer</a></li>
                </ul>
                <h4>Contact</h4>
                <a href="/" className="contact-link">contact@crowdharbour.com.au</a>
                <div className="icons-container">
                    <div><FacebookIcon /></div>
                    <div><InstagramIcon /></div>
                    <div><LinkedinIcon /></div>
                </div>
                <p className="disclaimer"><strong>Disclaimer:</strong> CrowdHarbour is a crowdfunding platform that facilitates connections between project creators and potential backers. While we strive to ensure the accuracy and reliability of the information provided on our platform, we cannot guarantee the success or outcome of any project listed. Investing in projects on CrowdHarbour carries inherent risks, and backers should conduct their own research and exercise due diligence before making any financial commitments. CrowdHarbour does not provide financial, legal, or investment advice, and all decisions made by backers are their own responsibility. By using our platform, you acknowledge and accept these risks and agree to hold CrowdHarbour harmless from any losses or damages incurred as a result of your investment decisions.</p>

            </div>
        </footer>
        </>
    )
}

export default Footer;