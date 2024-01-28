import { Link } from "react-router-dom"
import "../styling/header.css"
import Cart from "../components/cart";
import Checkout from "../pages/checkoutPage"
import LoginUser from "../components/loginUser"
import { useUsersContext } from "../context/context";


function Header() {

    const {
        isLoggedin,
    } = useUsersContext()

    const validateMypages = isLoggedin;

    return (
        <div className="headercontainer">
            <div className="headerbanner">
                <p>Easy refound</p>
                <p>Secure payments</p>
                <p>Free delivery in Sweden</p>
            </div>
            <div className="headermenu">
                <Link to="/"> <p className="shopTitle">GREY CLAY</p></Link>
                <Link to="/shop"><p className="headerlink">Shop</p></Link>
                <Link to="/contact"><p className="headerlink">Contact</p></Link>
                <Link to="/careadvice"><p className="headerlink">Care Advice</p></Link>
                <Link to="/aboutus"><p className="headerlink">About us</p></Link>

                {validateMypages ? <Link to="/mypage"><p className="headerlink">My pages</p></Link> : ""}
                <div className="header-login">
                    <LoginUser />
                </div>
                <div className="CartIconNumber">

                    <div className="cartOverflow">
                        <Cart />
                    </div>
                    <Checkout />
                </div>

            </div>
        </div>
    )
}

export default Header