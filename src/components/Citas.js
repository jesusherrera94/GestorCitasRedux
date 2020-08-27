import React from 'react';
import Cita from './Cita';


const Citas = ({citas, eliminarCita}) => {
    return ( 
        <div>
            {citas.map(cita=>(
            <Cita
            key = {cita.id} 
              cita={cita}
              eliminarCita = {eliminarCita}
            />
          ))}
        </div>
      );
}
 
export default Citas;