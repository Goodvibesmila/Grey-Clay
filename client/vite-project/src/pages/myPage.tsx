import "../styling/mypage.css"
import { Link } from "react-router-dom"
import Header from "../components/header"

function MyPage() {
    return (
        <div>
            <Header />
            <div className="mypagecontainer">
                <div className="mypagemenu">
                    <p>Menu</p>
                    <Link to="/contact">Contact Us</Link>
                    <Link to="orders"> My orders</Link>

                </div>
                <div className="mypagecontent">
                    <p>Kontaktinformation om kunden</p>
                </div>
            </div>
        </div>
    )
}

export default MyPage