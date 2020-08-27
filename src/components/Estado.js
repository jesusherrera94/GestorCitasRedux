import React from 'react';
const Estado = ({estado, id,toogleCita}) => {
    return ( <p className={!estado?'ok':'late'} onClick={()=>{toogleCita(id,'edit_state')}}>Estado: <span>{!estado?'En tiempo':'En retraso'}</span></p> );
}
 
export default Estado;