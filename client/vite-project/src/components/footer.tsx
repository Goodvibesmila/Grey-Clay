import "../styling/style.css";
import { Link } from "react-router-dom";

function Footer() {
    return (
        <div className="footercontainer">

            <div className="footer-socialmedia">
                <p>Sociala medier</p>
                <a href="https://www.instagram.com/">Instagram</a>
                <a href="https://www.facebook.com/">Facebook</a>
                <a href="https://www.tiktok.com/">Tiktok</a>
            </div>
            <div className="footer-info">
                <p>Info</p>
                <Link to="/careadvice">Care Advice</Link>
                <Link to="/terms">Terms</Link>
            </div>


        </div>
    )
}

export default Footer