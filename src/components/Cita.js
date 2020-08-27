import React from 'react';
import PropTypes from 'prop-types';
import Estado from './Estado';
const Cita = ({cita, eliminarCita}) => {
    return ( <div className="cita">
                <p>Mascota: <span>{cita.mascota}</span></p>
                <p>Dueño: <span>{cita.propietario}</span></p>
                <p>Fecha: <span>{cita.fecha}</span></p>
                <p>Hora: <span>{cita.hora}</span></p>
                <p>Sintomas: <span>{cita.sintomas}</span></p>
                <Estado estado={cita.estado} id={cita.id} toogleCita={eliminarCita} />
                <button 
                        className="button eliminar u-full-width"
                        onClick={()=>{eliminarCita(cita.id,'delete')}}
                        >
                    Eliminar &times;
                </button>
             </div> );
}
Cita.protoTypes = {
    cita:PropTypes.object.isRequired,
    eliminarCita:PropTypes.func.isRequired
  }
export default Cita;