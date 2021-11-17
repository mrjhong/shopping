import { Link } from "@mui/material";
import React from "react";
import barber1 from "../assets/Perfiles/fotoperfil.png";
import "../css/BuscarBarbero.css";

const BuscarBarbero = () => {
  return (
    <div className="BuscarBarbero  " id="BuscarBarbero ">
      {/* Hacer un buscador moderno con una lupa dentro de una barra de busqueda */}
      <div className="container Buscar">
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Buscar Brbero"
            aria-label="Recipient's username"
            aria-describedby="button-addon2"
          />
          <button className="btn btn-danger" type="button" id="button-addon2">
            Buscar
          </button>
        </div>
      </div>
      {/* aqui termina */}

      <div className="card mb-3 mas">
        <div className="row g-0">
          <div className="col-md-4">
            <img src={barber1} className="" alt="barbero" />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">Diego Trujillo</h5>
              <p className="card-text">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
              <p className="card-text">
                <small className="text-muted">Duración: 45min</small> <br />
                <small className="text-muted">Precio: $25.000</small>
                <Link to="/Perfil">Ver Perfil</Link>
              </p>
            </div>
          </div>
        </div>
        {/* <button id="ejemplos" type="button" className="btn btn-danger">Ejemplos</button> */}
      </div>

      {/* Aqui termina */}
    </div>
  );
};

export default BuscarBarbero;
