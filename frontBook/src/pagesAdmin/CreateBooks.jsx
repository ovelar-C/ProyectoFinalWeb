import { useState } from "react";
import FormBook from "../componentes/FormBook";
import ListBook from "../componentes/ListBooks";
import registerBook from "../services/registerBook";
import { useNavigate } from "react-router-dom";
import Alert from "../componentes/Alert";


export default function CreateBooks() {
    const [mensaje, setMensaje] = useState("");
    const [tipo, setTipo] = useState(null);
    const navigate = useNavigate();
    //arreglar el componente de alerta
    async function crearBook(formDatos) {
        try {
            console.log("hola registrando libro");
            const respuesta = await registerBook(formDatos);

            if (respuesta.ok) {
                setTipo("correcto");
                setMensaje("Libro guardado con exito");
                setTimeout(() => {
                    setMensaje("");
                    setTipo(null);
                    navigate("/configuracion");
                }, 2000);
            } else {
                setMensaje("Error al guardar los datos");
                setTipo("error");
                setTimeout(() => {
                    setMensaje("");
                    setTipo(null);
                }, 3000);

            }
        } catch (error) {
            console.log(error);
            setTipo("error");
            setMensaje(
                error.response?.data?.message ||
                "No se pudo guardar el libro"
            );
            setTimeout(() => {
                setMensaje("");
                setTipo(null);
            }, 3000);
        }
        //aca simplemente retornamos un boton
    }
    return (
        <>
            <Alert mensaje={mensaje} tipo={tipo} />
            <h1 className="titulo">Registrando Libros</h1>
            <FormBook
                datoInicial={null}
                funcion={crearBook}
                modo="crear"
            />
        </>
    )
}