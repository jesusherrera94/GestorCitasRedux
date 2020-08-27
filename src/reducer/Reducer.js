
export const reducer = (state = [], action)=>{
    switch(action.type){
        case 'add':
            return [
                ...state,
                {
                    id: action.id,
                    mascota:action.mascota,
                    propietario:action.propietario,
                    fecha:action.fecha,
                    hora:action.hora,
                    sintomas:action.sintomas,
                    estado: false
                }
            ]
        case 'delete':
            let newState = state.filter(item =>item.id!==action.id);
            return newState;
        case 'edit_state':
            return state.map( cita => cita.id===action.id ? {...cita, estado:!cita.estado}:cita );
        default:
            return state;
    }

}

