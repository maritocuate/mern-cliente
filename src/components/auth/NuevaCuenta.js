import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom'
import AlertaContext from '../../context/alertas/alertaContext'

const NuevaCuenta = () => {

    //extraer valores del context
    const alertaContext = useContext(AlertaContext)
    const { alerta, mostrarAlerta } = alertaContext

    //state para iniciar sesion
    const [userData, setUserData] = useState({
        nombre: '',
        email: '',
        password: '',
        confirmar: ''
    })
    const {nombre, email, password, confirmar} = userData

    const onChange = e => {
        setUserData({
            ...userData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault()

        //valida
        if(nombre.trim() === '' || email.trim() === '' || password.trim() === '' || confirmar.trim() === ''){
            mostrarAlerta('Todos los campos son obligatorios', 'alerta-error')
            return
        }
    }

    return (
        <div className='form-usuario'>

            { alerta ? (<div className={`alerta ${alerta.categoria}`}>{alerta.msg}</div>) : null }

            <div className='contenedor-form sombra-dark'>
                <h1>Obtener una cuenta</h1>
                <form onSubmit={handleSubmit}>
                    <div className='campo-form'>
                        <label htmlFor='email'>Nombre</label>
                        <input
                            type='text'
                            id='nombre'
                            name='nombre'
                            placeholder='Tu Nombre'
                            onChange={onChange}
                            value={nombre}
                        />
                    </div>

                    <div className='campo-form'>
                        <label htmlFor='email'>Email</label>
                        <input
                            type='email'
                            id='email'
                            name='email'
                            placeholder='Tu Email'
                            onChange={onChange}
                            value={email}
                        />
                    </div>

                    <div className='campo-form'>
                        <label htmlFor='password'>Password</label>
                        <input
                            type='password'
                            id='password'
                            name='password'
                            placeholder='Tu PassWord'
                            onChange={onChange}
                            value={password}
                        />
                    </div>

                    <div className='campo-form'>
                        <label htmlFor='confirmar'>Confirmar Password</label>
                        <input
                            type='password'
                            id='confirmar'
                            name='confirmar'
                            placeholder='Repite tu PassWord'
                            onChange={onChange}
                            value={confirmar}
                        />
                    </div>

                    <div className='campo-form'>
                        <input
                            type='submit'
                            className='btn btn-primario btn-block'
                            value='Registrarme'
                        />
                    </div>

                    <Link to={'/'} className='enlace-cuenta'>
                        Iniciar Sesión
                    </Link>
                </form>
            </div>
        </div>
    );
}
 
export default NuevaCuenta;