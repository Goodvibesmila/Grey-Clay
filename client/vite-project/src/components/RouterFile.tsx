import { Routes, Route } from 'react-router-dom'
import HomePage from '../pages/homePage';
import Confirmation from '../pages/confirmationPage';
import Mypage from '../pages/myPage';
import ShopPage from '../pages/shopPage';
import ContactPage from '../pages/contactPage';
import AboutUsPage from '../pages/aboutUsPage';




function RouterFile() {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/confirmation" element={<Confirmation />} />
            <Route path="/mypage" element={<Mypage />} />
            <Route path="/shop" element={<ShopPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/aboutus" element={<AboutUsPage />} />

        </Routes>
    )
}

export default RouterFile