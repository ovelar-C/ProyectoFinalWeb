import { Link } from "react-router-dom";
import '../stylepages/navBarra.css'
import { useContext } from "react";
import { DatosUserContext } from "../context/UserContext";

//nav para : admin, usuario, lector
export default function NavBarra() {
    const { datosUser, signOut } = useContext(DatosUserContext);
    return (
        <>
            <nav className="navBarra">
                <Link className="botones" to={'/'}>home</Link>
                <Link className="botones" to={'/books'}>libros</Link>
                <Link className="botones" to={'/profile'}>perfil</Link>
                 {datosUser ?
                    (<button className="botones" onClick={signOut}>Cerrar sesion</button>)
                    :
                    (<Link className="botones" to={'/login'}>Iniciar Sesion</Link>
                    )
                }
            </nav>
        </>
    )
}