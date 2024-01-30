import "../styling/mypage.css"
import { Link } from "react-router-dom"
import Header from "../components/header"
import { useUsersContext } from "../context/context";
import Footer from "../components/footer";



// Mypage content
function MyPage() {
    const {
        isLoggedin,
        username,
    } = useUsersContext()

    const validateIfLoggedin = isLoggedin;
    const user = username;

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
                    {validateIfLoggedin ? <p>Welcome {user}</p> : ""}
                    <div className="header-login"></div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default MyPage