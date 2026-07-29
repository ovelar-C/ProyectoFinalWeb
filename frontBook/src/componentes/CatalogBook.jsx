import { useContext } from "react"
import { DatosBookContext } from "../context/BookContext"
import imagen from "../assets/place.jpg"
import styles from  "../stylepages/catalog.module.css"

export default function CatalogBook() {
    const { dataBook } = useContext(DatosBookContext);
    //tengo los datos de los libros, pero sin imagen
    //quiero hacer un gatalogo de libros minimalista

    return (
        <>
        <main>
            <div className={styles.contenedorCatalogo}>
                <ul className={styles.catalogo}>
                    {dataBook?.map((book) => (
                        <li key={book._id} className={styles.card}>
                            <div className={styles.marco}>
                                <img
                                    className={styles.imagen}
                                    src={`http://localhost:3000${book.bookImage}`}
                                    alt={book.title}
                                />
                            </div>

                            <h3 className={styles.tituloCatalog}>{book.title}</h3>
                            <span>{book.author}</span>
                            <h3 className={styles.precio}>{book.price}$</h3>
                        </li>
                    ))}
                </ul>
            </div>
        </main>
        </>
    )
}