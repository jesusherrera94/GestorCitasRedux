import { connect } from 'react-redux';
import Citas from './Citas';

const ListAll = (citas)=>{
    return citas;
}

//mostrar todos los elementos
const allCitas = (state)=> ({
    citas: ListAll(state)
})

//eliminar un elemento
const deleteCita = (dispatch)=>({
    eliminarCita: (id,type) => dispatch({type:type,id})
})


export default connect(allCitas, deleteCita)(Citas);