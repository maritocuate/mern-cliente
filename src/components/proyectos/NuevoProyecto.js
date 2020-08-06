import React, { Fragment, useState, useContext } from 'react';
import proyectoContext from '../../context/proyectos/proyectoContext'


const NuevoProyecto = () => {

    //obtener el state del formulario
    const proyectosContext = useContext(proyectoContext)
    const {formulario, mostrarFormulario } = proyectosContext

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
                onClick={ ()=>mostrarFormulario() }
            >Nuevo Proyecto</button>

            {
                formulario
                ? (
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
                )
                :null
            }
        </Fragment>
    )
}
 
export default NuevoProyecto;