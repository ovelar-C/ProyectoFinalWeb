import { Link } from "react-router-dom";

export default function Configuracion(){
    return(
        <>
        <h3>aca debe aparecer el panel de lata del admin</h3>
        <Link to={'/adminuser'}>Usuarios</Link>
        </>
    )
}