import React from "react";

import "../css/Barramascliente.css";

const Barramascliente = () => {
  return (
    <div>
          {/* hacer un contenedor que tenga  10+barberos 1.000+ corte cabello 2.000+ corte pelo 3.500*/}
        <div className="contenedor-barra">
      <div className="container ">
        <div className="row">
          {/* primero */}
          <div className="primero col">
            <h3>10+</h3>
            <p>Barberos</p>
          </div>
          {/* Segundo */}
          <div className="segundo col">
            <h3>1.000+</h3>
            <p>Cortes de cabello</p>
          </div>
          {/* tercero */}
          <div className="tercero col">
            <h3>3.500+</h3>
            <p>Clientes atendidos</p>
          </div>
        </div>
              </div>
              </div>
    </div>
  );
};

export default Barramascliente;
