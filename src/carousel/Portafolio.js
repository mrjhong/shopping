import React, { Fragment } from "react";
// import PropTypes from 'prop-types'

import barber1 from "../assets/img/undraw_barber_-3-uel.svg";

import "../css/portafolio.css";

const Portafolio = () => {
  return (
    <Fragment>
      {/* heder dinamico */}
      <div id="hero-container">
        <div id="hero-background"></div>

        {
          window.onload = function () {
            setTimeout(function () {
              document.getElementById("hero-background").style.width = "100%";
            });
          }
        }
      </div>

      {/* hasta qui */}
      <div className="contenedor-portafolio container ">
        <div className="row ">
          <div className="col-12 col-md-12 text-center">
            <h1 className="">Pide un Barbero a</h1>
            <h1>Domicilio</h1>
            <h4> No esperes largos turnos,</h4>

            <h5>
              pide un barbero a domicilio y disfruta de una experiencia de corte
              y barba que te hará sentir como en casa.
            </h5>
          </div>
        </div>
        {/* img */}

        <div className="col-12 col-md-12 text-center">
          <div className="contenedor-img">
            {/* colocar imagen de undraw_barber_-3-uel.svg  */}
            <img src={barber1} alt="barber1" />
          </div>

          <div className="container">
            <button
              id="btn"
              type="button"
              className="btn btn-danger nosee btnpedir"
            >
              Pedir Barbero
            </button>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Portafolio;
