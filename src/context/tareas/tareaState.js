import React, { useReducer } from 'react';
import TareaContext from './tareaContext'
import TareaReducer from './tareaReducer'
import { 
    TAREA_PROYECTO,
    AGREGAR_TAREA
} from '../../types'

const TareaState = props => {
    const initialState = {
        tareas: [
            {nombre: 'elegir plataforma', estado:true, proyectoId:2},
            {nombre: 'elegir colores', estado:true, proyectoId:2},
            {nombre: 'elegir pago', estado:false, proyectoId:1},
            {nombre: 'elegir plataforma', estado:true, proyectoId:3},
            {nombre: 'elegir colores', estado:true, proyectoId:1},
            {nombre: 'elegir pago', estado:false, proyectoId:3},
            {nombre: 'elegir nivel', estado:false, proyectoId:2}
        ],
        tareaproyecto: null
    }

    const [state, dispatch] = useReducer(TareaReducer, initialState)

    //Obtener las tareas de un proyecto
    const obtenerTareas = proyectoId => {
        dispatch({
            type: TAREA_PROYECTO,
            payload: proyectoId
        })
    }

    //Agregar una tarea
    const agregarTarea = tarea => {
        dispatch({
            type: AGREGAR_TAREA,
            payload: tarea
        })
    }

    return (
        <TareaContext.Provider
            value={{
                tareas: state.tareas,
                tareaproyecto: state.tareaproyecto,
                obtenerTareas,
                agregarTarea
            }}
        >
            {props.children}
        </TareaContext.Provider>
    )
}
 
export default TareaState;