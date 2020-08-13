import React, { useReducer } from 'react';
import TareaContext from './tareaContext'
import TareaReducer from './tareaReducer'
import { 
    TAREA_PROYECTO,
    AGREGAR_TAREA,
    VALIDAR_TAREA,
    ELIMINAR_TAREA,
    ESTADO_TAREA
} from '../../types'

const TareaState = props => {
    const initialState = {
        tareas: [
            {id:1, nombre:'elegir plataforma', estado:true, proyectoId:2},
            {id:2, nombre:'elegir colores', estado:true, proyectoId:2},
            {id:3, nombre:'elegir pago', estado:false, proyectoId:1},
            {id:4, nombre:'elegir plataforma', estado:true, proyectoId:3},
            {id:5, nombre:'elegir colores', estado:true, proyectoId:1},
            {id:6, nombre:'elegir pago', estado:false, proyectoId:3},
            {id:7, nombre:'elegir nivel', estado:false, proyectoId:2}
        ],
        tareaproyecto: null,
        errorTarea: false
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

    //Valida y agrega una tarea
    const validarTarea = () => {
        dispatch({
            type: VALIDAR_TAREA
        })
    }

    //elimina tarea del array
    const eliminarTarea = tareaId => {
        dispatch({
            type: ELIMINAR_TAREA,
            payload: tareaId
        })
    }

    //cambia el estado de la tarea
    const cambiarEstadoTarea = tarea => {
        dispatch({
            type: ESTADO_TAREA,
            payload: tarea
        })
    }

    return (
        <TareaContext.Provider
            value={{
                tareas: state.tareas,
                tareaproyecto: state.tareaproyecto,
                errorTarea: state.errorTarea,
                obtenerTareas,
                agregarTarea,
                validarTarea,
                eliminarTarea,
                cambiarEstadoTarea
            }}
        >
            {props.children}
        </TareaContext.Provider>
    )
}
 
export default TareaState;