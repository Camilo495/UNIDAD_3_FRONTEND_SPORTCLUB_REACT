import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "../pages/Home"
import Login from "../pages/Login"
import Register from "../pages/Register"
import UserDashboard from "../pages/user/UserDashboard"
import CoachDashboard from "../pages/coach/CoachDashboard"
import AdminDashboard from "../pages/admin/AdminDashboard"

import UserLayout from "../layouts/UserLayouts"
import CoachLayout from "../layouts/CoachLayouts"
import AdminLayout from "../layouts/AdminLayouts"

function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                
                <Route path="/user" element={<UserLayout />}>
                    <Route path="dashboard" element={<UserDashboard />} />
                </Route>
                <Route path="/coach" element={<CoachLayout />}>
                    <Route path="dashboard" element={<CoachDashboard />} />
                </Route>
                <Route path="/admin" element={<AdminLayout />}>
                    <Route path="dashboard" element={<AdminDashboard />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}
export default AppRoutes