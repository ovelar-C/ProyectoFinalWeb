import { useState } from "react";
import FormBook from "../componentes/FormBook";

export default function EditarBooks() {
    const [formDatos, setFormDatos] = useState(
        {
            title: "f",
            author: "f",
            description: "f",
            editorial: "f",
            type: "f",
            genre: "f",
            language: "f",
            publishedYear: 2,
            price: 2,
            stock: 2
        });
    function editarBook() {
        console.log("en editar libro");
    }

    return (
        <>
            <FormBook
                datoInicial={formDatos}
                funcion={editarBook}
                modo = "editar"
            />
        </>
    )
}