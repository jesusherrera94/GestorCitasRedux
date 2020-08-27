
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
                }
            ]
        case 'delete':
            let newState = state.filter(item =>item.id!==action.id);
            console.log(newState)
            return newState;

        default:
            return state;
    }

}

