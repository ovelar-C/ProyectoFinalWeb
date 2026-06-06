import useGetAll from '../hooks/useGetAll'
import '../stylepages/home.css'

export default function Home(){
    const datos = useGetAll() || [];
    console.log(datos);
    return(
        <>
        <main className='home'>
            <h2>hola</h2>

            {datos?.map((book)=>(
                <ul key={book.id}>
                    <li>
                        <span>{book.titulo}</span>
                    </li>
                </ul>
            ))}
        </main>
        </>
    )
}