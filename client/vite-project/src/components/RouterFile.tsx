import { Routes, Route } from 'react-router-dom'
import HomePage from '../pages/homePage';
import ConfirmationPage from '../pages/confirmationPage';
import Mypage from '../pages/myPage';
import ShopPage from '../pages/shopPage';
import ContactPage from '../pages/contactPage';
import AboutUsPage from '../pages/aboutUsPage';
import Careadvice from '../pages/careadvice';
import Terms from '../pages/terms';
import RegisterCustomer from '../pages/registerCostumer';
import Orders from "./orders"
import Checkout from "../pages/checkoutPage"



function RouterFile() {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/shop/confirmation" element={<ConfirmationPage />} />
            <Route path="/mypage" element={<Mypage />} />
            <Route path="/shop" element={<ShopPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/aboutus" element={<AboutUsPage />} />
            <Route path="/careadvice" element={<Careadvice />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/register" element={<RegisterCustomer />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/checkout" element={<Checkout />} />


        </Routes>
    )
}

export default RouterFile