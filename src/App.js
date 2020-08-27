import React from 'react';
import Form from './components/Form';
import Citas from './components/CitasConnect';


function App() {
  return (
    <div className="App">
      <h1>Administrador de citas</h1>
      <div className="container">
        <div className="row">
          <div className="one-half column">
            <Form
             
            />
          </div>
          <div className="one-half column">
          <h1>Citas Creadas</h1>
          <Citas
            
          />
          </div>
        </div>
      </div>
       
    </div>
  );
}

export default App;
