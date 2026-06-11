import { BrowserRouter, Routes, Route } from "react-router-dom"

import Home from "../pages/Home"
import Login from "../pages/Login"
import Register from "../pages/Register"
import Unauthorized from "../pages/Unauthorized"

import UserDashboard from "../pages/user/UserDashboard"
import CoachDashboard from "../pages/coach/CoachDashboard"
import AdminDashboard from "../pages/admin/AdminDashboard"

import UserLayout from "../layouts/UserLayouts"
import CoachLayout from "../layouts/CoachLayouts"
import AdminLayout from "../layouts/AdminLayouts"

import ProtectedRoute from "./ProtectedRoute"
import RoleRoute from "./RoleRoute"

function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Login" element={<Login />} />
                <Route path="/Register" element={<Register />} />
                <Route path="/unauthorized" element={<Unauthorized />} />

                <Route path="/user" element={<RoleRoute allowedRoles={["user"]}><UserLayout /></RoleRoute>}>
                    <Route path="dasboard" element={<UserDashboard />} />
                </Route>

                <Route path="coach" element={<RoleRoute allowedRoles={["coach"]}><CoachLayout /></RoleRoute>}>
                    <Route path="dasboard" element={<CoachDashboard />} />
                </Route>

                <Route path="/admin" element={<RoleRoute allowedRoles={["admin"]}><AdminLayout /></RoleRoute>}>
                    <Route path="dasboard" element={<AdminDashboard />} />
                </Route>

                <Route path="/perfil" element={<ProtectedRoute><h1>Perfil del usuario autenticado</h1></ProtectedRoute>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes