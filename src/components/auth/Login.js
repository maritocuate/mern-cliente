import React, { useState } from 'react';
import { Link } from 'react-router-dom'

const Login = () => {

    const [userData, setUserData] = useState({
        email: '',
        password: ''
    })
    const {email, password} = userData

    const onChange = e => {
        setUserData({
            ...userData,
            [e.target.name]: e.target.value
        })
    }

    return (
        <div className='form-usuario'>
            <div className='contenedor-form sombra-dark'>
                <h1>Iniciar sesión</h1>
                <form>
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
                        <input
                            type='submit'
                            className='btn btn-primario btn-block'
                            value='Iniciar Sesión'
                        />
                    </div>

                    <Link to={'/nueva-cuenta'} className='enlace-cuenta'>
                        Obtener Cuenta
                    </Link>
                </form>
            </div>
        </div>
    );
}
 
export default Login;