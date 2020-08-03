import React, { Fragment } from 'react';

import Tarea from './Tarea'

const ListadoTareas = () => {
    
    const tareasProyecto = [
        {nombre: 'elegir plataforma', estado:true},
        {nombre: 'elegir colores', estado:true},
        {nombre: 'elegir pago', estado:false},
        {nombre: 'elegir nivel', estado:false}
    ]
    
    return (
        <Fragment>
            <h2>Proyecto: tienda virtual</h2>

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
            >Eliminar Proyecto &times;</button>
        </Fragment>
    )
}
 
export default ListadoTareas;