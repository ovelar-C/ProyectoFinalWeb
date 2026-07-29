import { useContext, useState } from "react";
import LayoutLogin from "../componentes/LayoutLogin";
import { DatosUserContext } from "../context/UserContext";
import styles from "../stylepages/formUser.module.css"
export default function FormUser() {
    const { signUp } = useContext(DatosUserContext);
    const [error, setError] = useState("");
    const [dataUser, setDataUser] = useState({
        "username": "",
        "email": "",
        "password": "",
        "rol": ""
    });
    //capturar errores
    async function manejarSubmit(e) {
        e.preventDefault();
        try {
            await signUp(dataUser);
        } catch (error) {
            setError(error);
        }
    }

    function manejarChange(e) {
        const { name, value } = e.target;
        setDataUser((prev) => ({
            ...prev,
            [name]: value,
        }))
    }
    return (
        <>
            <div className={styles.contenedor}>
                <form onSubmit={manejarSubmit} className={`${styles.form} form`}>
                    <input
                        className='inputs'
                        name='username'
                        placeholder='username'
                        value={dataUser.username}
                        onChange={manejarChange} required />
                    <input
                        className='inputs'
                        name='email'
                        placeholder='email'
                        value={dataUser.email}
                        onChange={manejarChange} required />
                    <input
                        className='inputs'
                        name='password'
                        placeholder='password'
                        type='password'
                        value={dataUser.password}
                        onChange={manejarChange} required />
                    <input
                        className='inputs'
                        name='rol'
                        placeholder='rol'
                        type='text'
                        value={dataUser.rol}
                        onChange={manejarChange} required />
                    {error && <h3>correo ya registrado</h3>}
                    <button type='submit' className='botones'>Registrar Usuario</button>
                </form>
            </div>

        </>
    )
}