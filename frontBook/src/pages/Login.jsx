import { useState } from 'react'
import '../stylepages/login.css'
import booklogin from '../assets/booklogin.png'
import logo from '../assets/logo.webp'


export default function Login() {
    const [dataUser, setDataUser] = useState({
        "username" : "",
        "email" : "",
        "password" : ""
    });

    function manejarChange(e){
        e.preventDefault();
        //objeto, propiedades, nombre valor
        //e.target tiene los datos
        //prev es el estado anterior
        //se copia las propiedades y actualizamos
        //la que coicide con "name"
        const {name,value} = e.target;
        setDataUser((prev)=>({
            ...prev,
            [name]:value,
        }))
    }

    return (
        <>
            <main className="login">
                
            <div className='izquierda'>
                <div id='blanco'>
                    <div className='encabezado'>
                    <img className='logo' src={logo} alt='logo'/>
                    <h1>BookStore</h1>
                    </div>

                    <h2>Bienvenido!</h2>
                <section className='contenedor'>
                    <div className='barra'><br/><br/></div>
                    <form className='formLogin'>
                        <input className='inputs' name='username' placeholder='username' value={dataUser.username} onChange={manejarChange} required/>
                        <input className='inputs' name='email' placeholder='email' value={dataUser.email} onChange={manejarChange} required/>
                        <input className='inputs' name='password' placeholder='password' type='password' value={dataUser.password} onChange={manejarChange} required/>
                        <button>Sign Up</button>
                    </form>
                    <div>
                        {dataUser.username}
                        {dataUser.email}
                        {dataUser.password}
                    </div>
                </section>
                </div>
                </div>

                <div className='derecha'>
                 <img className='book' src={booklogin} alt='portadalogin'/>

                </div>
            </main>
        </>
    )
}