import axios from "axios";
import { useEffect, useState } from "react"

export default function useGetAll(){
    const[datos,setDatos] = useState([]);
    const api = "http://localhost:3000/api/bookstore/books";

    useEffect(()=>{
        axios.get(api)
        .then((respuesta)=>{
            console.log(respuesta.data);
            setDatos(respuesta.data);

        })
        .catch((error)=>{
            console.log(error);
        })
    },[]);
    return datos;
}