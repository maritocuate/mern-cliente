import React, { useContext, useEffect } from 'react';

import Proyecto from './Proyecto'
import proyectoContext from '../../context/proyectos/proyectoContext'

const Listado = () => {

    const proyectosContext = useContext(proyectoContext)
    const {proyectos, obtenerProyectos} = proyectosContext

    //Obtener proyectos cuando carga el componente
    useEffect(()=>{
        obtenerProyectos()
    }, [])

    if(proyectos.lenght === 0) return
    
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