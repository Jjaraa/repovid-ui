import React, { useState } from 'react';

const Login = () => {
    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')

    const IniciarSesion = (e) => {
        e.preventDefault()
    }

    return (
        <div className='row mt-5'>
            <div className='col'></div>
            <div className='col'>
                <h3>Inicio de sesión:</h3>
                <form onSubmit={IniciarSesion} className='form-gruop mt-4'>
                    <input
                        onChange={(e) => setEmail(e.target.value)}
                        className='form-control'
                        placeholder='Correo electrónico'
                        type="email" />
                    <input
                        onChange={(e) => setPass(e.target.value)}
                        className='form-control mt-4'
                        placeholder='Contraseña'
                        type="password" />
                    <input className='btn btn-primary btn-block mt-4'
                        value='Ingresar'
                        type="submit" />
                </form>
            </div>
            
        </div>
    )
}

export default Login