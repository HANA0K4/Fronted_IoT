import { Routes, Route } from "react-router-dom";
import NavBar from "../main/NavBar";
import Dashboard from "../Apps/Dashboard/Dashboard";
import Viewall from "../Apps/Dashboard/ViewAll";

const AppsRoutes = () => {
    return (
        <NavBar>
            <Routes>
                <Route path="/dashboard/:idnodo" element={<Dashboard />} />
                <Route path="/dashboard/:idnodo/:idnodo" element={<Viewall />} />
            </Routes>
        </NavBar>
    )
}
export default AppsRoutes