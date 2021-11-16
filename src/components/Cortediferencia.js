import React from "react";

import  "../css/Cortediferencia.css";

const Cortediferencia = () => {
  return (
    <div>
      <div className="contenedor-barra-corte">
        <div className="container text-center ">
          <div className="row">
            {/* primero */}
            <div className="primero col">
              <h1>Tu corte hara la diferencia</h1>
              <button type="button" className="btn btn-danger cortebarbe">Pedir Barbero</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cortediferencia;
