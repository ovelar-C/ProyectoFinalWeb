import { useContext } from "react"
import { DatosUserContext } from "../context/UserContext";
import { Link } from "react-router-dom";

export default function Profile() {
    const { datosUser } = useContext(DatosUserContext);
    return (
        <>
            <div>
                <span> usuario : {datosUser?.username}</span><br />
                <span>email :{datosUser?.email}</span><br />
                <span>rol: {datosUser?.rol}</span><br />
                <span>password : {datosUser?.password}</span><br />
            </div>

        </>
    )
}