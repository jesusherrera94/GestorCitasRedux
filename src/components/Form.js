import React, {Fragment, useState} from 'react';
import { connect } from 'react-redux';
import {v4 as uuid} from "uuid";


const Form = ({ dispatch }) => {


    const [cita,actualizarCita] = useState({
        mascota:'',
        propietario:'',
        fecha:'',
        hora:'',
        sintomas:'',
        
    });
    const [error,setError] = useState(false);

    const handleOnchange= (e)=>{
        actualizarCita({
            ...cita,
            [e.target.name]:e.target.value
        })
    } 

    const {mascota,propietario,fecha,hora,sintomas} = cita;

    const handleSubmit = e =>{
        e.preventDefault();

        if(mascota.trim()===''||propietario.trim()===''||fecha.trim()===''||hora.trim()===''||sintomas.trim()===''){
            setError(true)
            return;
        }
        //asignarID
        setError(false);
        cita.id = uuid();

        dispatch({ ...cita, type: 'add' })
        //reiniciar el formulario
        actualizarCita({
            mascota:'',
            propietario:'',
            fecha:'',
            hora:'',
            sintomas:'',
        })

    }


    return (
        <Fragment>
            <h2>Crear Cita</h2>
            {error?(<p className="alerta-error">Todos los campos son obligatorios</p>):null}
            <form
                onSubmit={handleSubmit}
            >
                <label>Nombre Mascota</label>
                <input
                    type="text"
                    name="mascota"
                    className="u-full-width"
                    placeholder="Nombre Mascota"
                    onChange={handleOnchange}
                    value = {mascota}
                />
                <label>Nombre Dueño</label>
                <input
                    type="text"
                    name="propietario"
                    className="u-full-width"
                    placeholder="Nombre Del Propietario"
                    onChange={handleOnchange}
                    value = {propietario}
                />
                <label>Fecha</label>
                <input
                    type="date"
                    name="fecha"
                    className="u-full-width"
                    onChange={handleOnchange}
                    value = {fecha}
                />
                <label>Hora</label>
                <input
                    type="time"
                    name="hora"
                    className="u-full-width"
                    onChange={handleOnchange}
                    value = {hora}
                />
                <label>Sintomas</label>
                <textarea
                    className="u-full-width"
                    name="sintomas"
                    placeholder="Describa los sintomas aquí"
                    onChange={handleOnchange}
                    value = {sintomas}
                ></textarea>
                <button
                    type="submit"
                    className="u-full-width button-primary"
                >
                    Agregar Cita
                </button>
            </form>
        </Fragment>
      );
}
 
//se debe conectar para tener acceso al dispatch
export default connect()(Form);