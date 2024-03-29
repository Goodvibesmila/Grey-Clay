import "../styling/mypage.css"
import { Link } from "react-router-dom"
import Header from "../components/header"
import CustomerOrders from "./order"

// Mypage - orders.
function Orders() {
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
                    <p className="mypagetitle">My orders</p>
                    <CustomerOrders />
                </div>
            </div>
        </div>
    )
}

export default Orders