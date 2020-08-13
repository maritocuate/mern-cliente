import React, { useContext, useEffect } from 'react';

import Proyecto from './Proyecto'
import proyectoContext from '../../context/proyectos/proyectoContext'

const Listado = () => {

    const proyectosContext = useContext(proyectoContext)
    const {proyectos, obtenerProyectos} = proyectosContext

    //Obtener proyectos cuando carga el componente
    useEffect(()=>{
        obtenerProyectos()
        //eslint-disable-next-line
    }, [])

    if(proyectos.length === 0) return <p>No hay proyectos</p>
    
    return (
        <ul className='listado-proyectos'>
            {
            proyectos.map( item=>(
                <Proyecto key={item.id} proyecto={item}/>
            ))
            }
        </ul>
    )
}
 
export default Listado