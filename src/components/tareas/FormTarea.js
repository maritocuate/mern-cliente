import React, {useContext, useState} from 'react';
import proyectoContext from '../../context/proyectos/proyectoContext'
import tareaContext from '../../context/tareas/tareaContext'

const FormTarea = () => {
    //Tarea input
    const [tarea, setTarea] = useState({
        nombre: ''
    })

    //Extraer proyecto activo
    const proyectosContext = useContext(proyectoContext)
    const {proyecto} = proyectosContext
    
    const tareasContext = useContext(tareaContext)
    const {errorTarea, agregarTarea, validarTarea, obtenerTareas} = tareasContext

    if(!proyecto) return null

    //Array destructuring para extraer el proyecto actual
    const [proyectoActual] = proyecto

    const handleSubmit = e => {
        e.preventDefault()

        if(tarea.nombre === ''){
            validarTarea()
            return
        }

        tarea.estado = false
        tarea.proyectoId = proyectoActual.id
        agregarTarea(tarea)

        //Listo tareas
        obtenerTareas(proyectoActual.id)

        //resetear form
        setTarea({nombre:''})
    }
    const handleChange = e => {
        setTarea({
            ...tarea,
            [e.target.name]:e.target.value
        })
    }

    return (
        <div className="formulario" onSubmit={handleSubmit}>
            <form>
                <div className="contenedor-input">
                    <input
                        type='text'
                        className='input-text'
                        placeholder='Nombre tarea...'
                        name='nombre'
                        onChange={handleChange}
                        value={tarea.nombre}
                    />
                </div>

                <div className="contenedor-input">
                    <input
                        type='submit'
                        className='btn btn-primario btn-submit btn-block'
                        value='Agregar Tarea'
                    />
                </div>
            </form>
            {errorTarea ? <p className='mensaje error'>El nombre de la tarea es obligatorio</p> : null}
        </div>
    )
}
 
export default FormTarea;