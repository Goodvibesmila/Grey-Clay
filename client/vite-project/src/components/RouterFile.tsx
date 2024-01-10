import { Routes, Route } from 'react-router-dom'
import HomePage from '../pages/homePage';
import Confirmation from '../pages/confirmationPage';
import Mypage from '../pages/myPage';


function RouterFile() {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/confirmation" element={<Confirmation />} />
            <Route path="/mypage" element={<Mypage />} />
        </Routes>
    )
}

export default RouterFile