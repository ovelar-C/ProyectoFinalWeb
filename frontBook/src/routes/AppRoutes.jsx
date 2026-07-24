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
import PageNoFound from "../componentes/PageNoFound";
import Configuracion from "../pagesAdmin/Configuracion";

export default function AppRoutes() {
    //envolver las rutas privadas
    return (
        <Routes>
            <Route element={<Layout />}>
                <Route element={<PrivateRoute />}>
                    <Route path="/profile" element={<Profile />} />
                </Route>
                <Route element={<AdminRoutes />}>
                    <Route path="/configuracion" element={<Configuracion/>}/>
                    <Route path="/adminuser" element={<ListUser />} />
                </Route>

                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/books" element={<Books />} />
                <Route path="*" element={<PageNoFound/>}/>
            </Route>
        </Routes>
    )
}