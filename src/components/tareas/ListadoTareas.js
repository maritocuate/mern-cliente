import React, { Fragment, useContext } from 'react';
import proyectoContext from '../../context/proyectos/proyectoContext'
import Tarea from './Tarea'

const ListadoTareas = () => {
    //Extraer proyecto
    const proyectosContext = useContext(proyectoContext)
    const {proyecto, eliminarProyecto} = proyectosContext

    if(!proyecto) return <h2>Selecciona un proyecto</h2>

    //Array destructuring
    const [proyectoActual] = proyecto

    const tareasProyecto = [
        {nombre: 'elegir plataforma', estado:true},
        {nombre: 'elegir colores', estado:true},
        {nombre: 'elegir pago', estado:false},
        {nombre: 'elegir nivel', estado:false}
    ]
    
    return (
        <Fragment>
            <h2>Proyecto: {proyectoActual.nombre}</h2>

            <ul className='listado-tareas'>
                {
                    (tareasProyecto.length === 0)
                    ? <li className='tarea'><p>No hay tareas</p></li>
                    : 
                    tareasProyecto.map((tarea, i)=>(
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