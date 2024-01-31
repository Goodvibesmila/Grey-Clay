import "../styling/footer.css";
import { Link } from "react-router-dom";


// Content in footer.
function Footer() {
    return (
        <div className="footercontainer">
            <div className="footer-socialmedia">
                <p>Social media</p>
                <a href="https://www.instagram.com/">Instagram</a>
                <a href="https://www.facebook.com/">Facebook</a>
                <a href="https://www.tiktok.com/">Tiktok</a>
            </div>
            <div className="footer-info">
                <p>Info</p>
                <Link to="/careadvice">Care Advice</Link>
                <Link to="/terms">Terms</Link>
                <Link to="/contact">Contact</Link>
                <Link to="/aboutus">About us</Link>

            </div>
        </div>
    )
}

export default Footer