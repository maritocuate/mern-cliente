import {
    TAREA_PROYECTO
} from '../../types'

export default (state, action) => {
    switch(action.type) {
        case TAREA_PROYECTO:
            return{
                ...state,
                tareaproyecto: state.tareas.filter( tarea=>tarea.proyectoId===action.payload )
            }

        default:
            return state
    }
}