import React, {useReducer} from 'react';
import {v4 as uuidv4} from 'uuid'

import proyectoContext from './proyectoContext'
import proyectoReducer from './proyectoReducer'
import { FORMULARIO_PROYECTO, OBTENER_PROYECTOS, AGREGAR_PROYECTO } from '../../types'

const ProyectoState = props => {
    const proyectos = [
        {id:1, nombre: 'tienda virtual'},
        {id:2, nombre: 'intranet'},
        {id:3, nombre: 'sitio web'}
    ]

    const initialState = {
        proyectos: [],
        formulario: false
    }

    //dispatch para ejecutar las acciones
    const [state, dispatch] = useReducer(proyectoReducer, initialState)

    //Serie de funciones para el CRUD
    const mostrarFormulario = () => {
        dispatch({
            type: FORMULARIO_PROYECTO
        })
    }

    //Obtener proyectos
    const obtenerProyectos = () => {
        dispatch({
            type: OBTENER_PROYECTOS,
            payload: proyectos
        })
    }

    //Agregar proyecto
    const agregarProyecto = proyecto => {
        proyecto.id = uuidv4()

        //Insertar el proyecto al array
        dispatch({
            type: AGREGAR_PROYECTO,
            payload: proyecto
        })
    }

    return(
        <proyectoContext.Provider
            value={{
                proyectos: state.proyectos,
                formulario: state.formulario,
                mostrarFormulario,
                obtenerProyectos,
                agregarProyecto
            }}
        >
            {props.children}
        </proyectoContext.Provider>
    )
}

export default ProyectoState