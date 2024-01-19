import { Link } from "react-router-dom"
import "../styling/style.css"
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
                <p>Enkla returer och byten</p>
                <p>Säkra betalningar</p>
                <p>Fri frakt inom Sverige</p>
            </div>
            <div className="headermenu">
                <Link to="/"> <p>GREY CLAY</p></Link>
                <Link to="/shop">Shop</Link>
                <Link to="/contact">Contact</Link>
                <Link to="/careadvice">Care Advice</Link>
                {validateMypages ? <Link to="/mypage">My pages</Link> : ""}
                <div className="header-login">
                    <LoginUser />
                    {/* <label htmlFor="">Namn</label>
                    <input type="text" />
                    <label htmlFor="">Lösen</label>
                    <input type="text" /> */}
                    <Link to="./register">Registrera dig</Link>
                </div>
                <Cart />
                <Checkout />

            </div>
        </div>
    )
}

export default Header