import booklogin from '../assets/booklogin.png'
import logo from '../assets/logo.webp'
import volando from '../assets/librosvolando.webp'
import '../stylepages/login.css'

export default function LayoutLogin({title,children}) {
    return (
        <>
            <main className="login">
                <div className='izquierda'>
                    <div>
                        <div className='encabezado'>
                            <img className='logo' src={logo} alt='logo' />
                            <h1>BookStore</h1>
                        </div>

                        <h2 className='titulo'>{title}</h2>
                        <section className='contenedor'>
                            <div className='barra'><br /><br /></div>
                            {children}
                          
                        </section>
                    </div>
                </div>

                <div className='derecha'>

                    <img className='book' src={booklogin} alt='portadalogin' />
                    <img className='book' src={volando} alt='voolando' />

                </div>
            </main>
        </>
    )
}