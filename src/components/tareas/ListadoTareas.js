import React, { Fragment, useContext } from 'react';
import proyectoContext from '../../context/proyectos/proyectoContext'
import tareaContext from '../../context/tareas/tareaContext'
import Tarea from './Tarea'

const ListadoTareas = () => {
    //Import contexts
    const proyectosContext = useContext(proyectoContext)
    const {proyecto, eliminarProyecto} = proyectosContext
    const tareasContext = useContext(tareaContext)
    const { tareaproyecto } = tareasContext

    if(!proyecto) return <h2>Selecciona un proyecto</h2>

    //Array destructuring
    const [proyectoActual] = proyecto
    
    return (
        <Fragment>
            <h2>Proyecto: {proyectoActual.nombre}</h2>

            <ul className='listado-tareas'>
                {
                    (tareaproyecto.length === 0)
                    ? <li className='tarea'><p>No hay tareas</p></li>
                    : 
                    tareaproyecto.map((tarea, i)=>(
                        <Tarea key={i} tarea={tarea}/>
                    ))
                }
            </ul>

            <button
                type='button'
                className='btn btn-eliminar'
                onClick={()=>eliminarProyecto(proyectoActual.id)}
            >Eliminar Proyecto &times;</button>
        </Fragment>
    )
}
 
export default ListadoTareas;