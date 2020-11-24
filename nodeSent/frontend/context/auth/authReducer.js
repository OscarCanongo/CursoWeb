import {
    USUARIO_AUTENTICADO, 
    REGISTRO_EXITOSO, 
    REGISTRO_ERROR,
    LIMPIAR_ALERTA,
    LOGIN_ERROR,
    LOGIN_EXITOSO} from '../../types/index';

export default (state, action) => {
    switch(action.type){
        case REGISTRO_EXITOSO:
        case REGISTRO_ERROR:
        case LOGIN_ERROR:
            return{
                ...state,
                mensaje: action.payload
            }
        case LIMPIAR_ALERTA:
            return{
                ...state,
                mensaje: null
            }
        case USUARIO_AUTENTICADO:
            localStorage.setItem('token', action.payload);
            return{
                ...state,
                usuario: action.payload,
            }
        case LOGIN_EXITOSO:
            return{
                ...state,
                token: action.payload,
                autenticado: true
            }
        default:
            return state;
    }
}