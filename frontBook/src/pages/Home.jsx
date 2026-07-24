import useGetAll from '../hooks/useGetAll'
import '../stylepages/home.css'

export default function Home() {
    const datos = useGetAll() || [];
    return (
        <>
            <main className='home'>
                <h2>hola</h2>
                <ul>
                    {datos?.map((book) => (
                        <li key={book._id}>
                            <span>{book.title}</span>
                        </li>
                    ))}
                </ul>
            </main>
        </>
    )
}