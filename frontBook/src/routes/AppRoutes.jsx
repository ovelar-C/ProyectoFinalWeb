import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Layout from "../componentes/Layout";
import Profile from "../pages/Profile";
import Register from "../pages/Register";
import Books from "../pages/Books";
import PrivateRoute from "./PrivateRoute";
import ListUser from "../pagesAdmin/ListUser";
import AdminRoutes from "./AdminRoutes";

export default function AppRoutes() {
    //envolver las rutas privadas
    return (
        <Routes>
            <Route element={<Layout />}>
                <Route element={<PrivateRoute />}>
                    <Route path="/profile" element={<Profile />} />
                </Route>
                <Route element={<AdminRoutes />}>
                    <Route path="/listUser" element={<ListUser />} />
                </Route>

                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/books" element={<Books />} />
            </Route>
        </Routes>
    )
}