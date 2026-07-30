import { useState } from "react";
import FormBook from "../componentes/FormBook";
import ListBook from "../componentes/ListBooks";
import registerBook from "../services/registerBook";
import Alert from "../componentes/Alert";


export default function CreateBooks() {
    const [mensaje, setMensaje] = useState("");
    const [respuesta, setRespuesta] = useState(null);
    async function crearBook(formDatos) {
        try {
            const response = await registerBook(formDatos);
            setRespuesta(response);

            if (response.ok) {
                setMensaje("Libro guardado con exito");
            } else {
                setMensaje("Error al guradar el libro")
            }
        } catch (error) {
            console.log(error);
            setRespuesta({ok : false});
            setMensaje(
                error.response?.data?.message ||
                "No se pudo guardar el libro"
            );
        }
        //aca simplemente retornamos un boton
    }
    return (
        <>
            <Alert mensaje={mensaje} respuesta = {respuesta} limpiar = {()=>{
                setMensaje(""); setRespuesta(null);
            }}/>
            <h1 className="titulo">Registrando Libros</h1>
            <FormBook
                datoInicial={null}
                funcion={crearBook}
                modo="crear"
            />
        </>
    )
}