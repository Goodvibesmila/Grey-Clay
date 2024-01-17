import { Link } from "react-router-dom"
import "../styling/style.css"
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
// import { faShoppingBag } from "@fortawesome/free-solid-svg-icons";
// import { library } from "@fortawesome/fontawesome-svg-core";
import Cart from "../components/cart";
import Checkout from "../pages/checkoutPage"

// library.add(faShoppingBag);

function Header() {
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
                <div className="header-login">
                    <label htmlFor="">Namn</label>
                    <input type="text" />
                    <label htmlFor="">Lösen</label>
                    <input type="text" />
                    <Link to="./register">Registrera dig</Link>
                </div>
                <Cart />
                <Checkout />
                {/* <FontAwesomeIcon className="carticon" icon={faShoppingBag} /> */}
            </div>
        </div>
    )
}

export default Header