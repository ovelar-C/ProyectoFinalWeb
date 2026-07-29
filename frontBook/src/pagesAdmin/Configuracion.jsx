import { Link } from "react-router-dom";
import ListBook from "../componentes/ListBooks";
import { useState } from "react";
import ListUser from "../componentes/ListUser";
import styles from "../stylepages/configuracion.module.css"

export default function Configuracion() {
    const [showBooks, setShowBooks] = useState(false);
    const [showUsers, setShowUsers] = useState(false);
    return (
        <>
            <div className={styles.contenedor}>
                <div className={styles.list}>
                    <button
                        className="botones"
                        onClick={() => setShowBooks(!showBooks)}>
                        {showBooks ? "ocultar libros" : "mostrar libros"}
                    </button>
                    <button
                        className="botones"
                        onClick={() => setShowUsers(!showUsers)}>
                        {showUsers ? "ocultar usurios" : "mostrar usuarios"}
                    </button>
                </div>
                <div className={styles.links}>
                    <Link className="botones" to={'/createbooks'}>Registrar Libros</Link>
                    <Link className="botones" to={'/createusers'}>Registrar Usuarios</Link>
                </div>
            </div>
            {showBooks && <ListBook />}
            {showUsers && <ListUser />}
        </>
    )
}