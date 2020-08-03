import React, { Fragment, useState } from 'react';

const NuevoProyecto = () => {

    const [proyecto, setProyecto] = useState({
        nombre:''
    })

    const {nombre} = proyecto

    const handleChange = e => {
        setProyecto({
            ...proyecto,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault()

    }

    return (
        <Fragment>
            <button
                type='button'
                className='btn btn-block btn-primario'
            >Nuevo Proyecto</button>

            <form className='formulario-nuevo-proyecto' onSubmit={handleSubmit}>
                <input
                    type='text'
                    className='input-text'
                    placeholder='Nombre Proyecto'
                    name='nombre'
                    onChange={handleChange}
                    value={nombre}
                />

                <input
                    type='submit'
                    className='btn btn-primario btn-block'
                    value='Agregar Proyecto'
                />
            </form>
        </Fragment>
    )
}
 
export default NuevoProyecto;