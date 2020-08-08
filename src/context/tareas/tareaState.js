import React, { useReducer } from 'react';
import TareaContext from './tareaContext'
import TareaReducer from './tareaReducer'

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
        ]
    }

    const [state, dispatch] = useReducer(TareaReducer, initialState)

    return (
        <TareaContext.Provider
            value={{
                tareas: state.tareas
            }}
        >
            {props.children}
        </TareaContext.Provider>
    )
}
 
export default TareaState;