import {
    TAREA_PROYECTO,
    AGREGAR_TAREA
} from '../../types'

export default (state, action) => {
    switch(action.type) {
        case TAREA_PROYECTO:
            return{
                ...state,
                tareaproyecto: state.tareas.filter( tarea=>tarea.proyectoId===action.payload )
            }
        case AGREGAR_TAREA:
            return{
                ...state,
                tareas: [...state.tareas, action.payload]
            }

        default:
            return state
    }
}