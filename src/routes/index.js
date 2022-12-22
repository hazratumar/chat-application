import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginLayout from '../layouts/LoginLayout';
import LogoutLayout from '../layouts/LogoutLayout';

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LoginLayout />} />
                <Route path="/logout" element={<LogoutLayout />} />
            </Routes>
        </BrowserRouter>
    )
}
export default Router