import {USUARIO_AUTENTICADO, REGISTRO_EXITOSO} from '../../types/index';

export default (state, action) => {
    switch(action.type){
        case REGISTRO_EXITOSO:
            return{
                ...state,
                mensaje: action.payload
            }
        case USUARIO_AUTENTICADO:
            return{
                ...state,
                usuario: action.payload,
            }
        default:
            return state;
    }
}