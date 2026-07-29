import { useContext } from 'react';
import useGetAllBook from '../hooks/useGetAllBook';
import { DatosBookContext } from '../context/BookContext';

export default function ListBook() {
    const {dataBook} = useContext(DatosBookContext) || [];
    //lista q solo verá el admin//usar useffect
    return (
        <>
            <main>
                <ul>
                    {dataBook?.map((book) => (
                        <li key={book._id}>
                            <span>{book.title}</span>
                        </li>
                    ))}
                </ul>
            </main>
        </>
    )
}