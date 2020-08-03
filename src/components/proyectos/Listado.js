import React from 'react';

import Proyecto from './Proyecto'

const Listado = () => {
    
    const proyectos = [
        {nombre: 'tienda virtual'},
        {nombre: 'intranet'},
        {nombre: 'sitio web'}
    ]
    
    return (
        <ul className='listado-proyectos'>
            {
            proyectos.map( (item, i)=>(
                <Proyecto key={i} proyecto={item}/>
            ))
            }
        </ul>
    )
}
 
export default Listado