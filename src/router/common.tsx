import SignIn from "../auth/SignIn";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import AppsRoutes from './AppsRoutes';

const MainRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<SignIn />} />
                <Route path="/*" element={<AppsRoutes />} />
            </Routes>
        </BrowserRouter>
    )
}

export default MainRouter