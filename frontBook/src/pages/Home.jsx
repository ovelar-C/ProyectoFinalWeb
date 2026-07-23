import useGetAll from '../hooks/useGetAll'
import '../stylepages/home.css'

export default function Home() {
    const datos = useGetAll() || [];
    console.log(datos);
    return (
        <>
            <main className='home'>
                <h2>hola</h2>
                <ul>
                    {datos?.map((book) => (
                        <li key={book.id}>
                            <span>{book.title}</span>
                        </li>
                    ))}
                </ul>
            </main>
        </>
    )
}