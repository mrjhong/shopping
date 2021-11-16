import React from "react";

import barber1 from "../assets/img/slide/img1.jpg";

import "../css/FormularioReservar.css";

const FormularioReservar = () => {
  return (
    <div className="formularioreservas">
      <div className="arriba">
        <h1>Reserva tu lugar</h1>
      </div>
      <div className="avatarreserva">
        {/* colocar avatar */}
        <img className="far fa-user-circle" src={barber1} alt="reserva" />
        <div className="datos">
          <h1>Barberia a Domicilio</h1>
          <p>Duracion 45min </p>
          <p>Precio: $25.000</p>
        </div>
      </div>

      {/* <h1>Formulario de Reservas</h1> */}

      <div className="formulario">
        <div className="container">
          <form className="row g-3">
            <div className="col-md-6">
              <label for="inputEmail4" className="form-label">
                Ciudad <span className="obligatorio">*</span>
              </label>
              <input
                type="text"
                className="form-control"
                id="inputEmail4"
                placeholder="Ciudad.."
              />
            </div>
            {/* <div className="col-md-4">
              <label for="inputState" className="form-label">
                State
              </label>
              <select id="inputState" className="form-select">
                <option selected>Choose...</option>
                <option>...</option>
              </select>
            </div> */}
            <div className="col-md-6">
              <label for="inputEmail4" className="form-label">
                Cantidad de Personas <span className="obligatorio">*</span>
              </label>
              <input
                type="number"
                className="form-control"
                id="inputEmail4"
                placeholder="Cantidad de Personas.."
                required
              />
            </div>
            <div className="col-md-6">
              <label for="inputCity" className="form-label">
                Fecha y Hora <span className="obligatorio">*</span>
              </label>
              <input
                type="datetime-local"
                className="form-control"
                id="inputCity"
                placeholder="Fecha y Hora"
                required
              />
            </div>
            <div className="col-md-6">
              <label for="inputEmail4" className="form-label">
                A que dirección sera el Domicilio{" "}
                <span className="obligatorio">*</span>
              </label>
              <input
                type="text"
                className="form-control"
                id="inputEmail4"
                placeholder="Dirección..."
                required
              />
            </div>
            <div className="col-md-6">
              <label for="inputEmail4" className="form-label">
                Nombre <span className="obligatorio">*</span>
              </label>
              <input
                type="text"
                className="form-control"
                id="inputEmail4"
                placeholder="Nombre"
                required
              />
            </div>
            <div className="col-md-6">
              <label for="inputEmail4" className="form-label">
                Apellidos <span className="obligatorio">*</span>
              </label>
              <input
                type="text"
                className="form-control"
                id="inputEmail4"
                placeholder="Apellidos"
                required
              />
            </div>
            <div className="col-md-6 ">
              <label for="inputEmail4" className="form-label">
                Email <span className="obligatorio">*</span>
              </label>
              
              
              <input
                type="email"
                className="form-control "
                id="inputEmail4"
                placeholder="Email"
                required
              />
            </div>
            <div className="col-md-6">
              <label for="inputEmail4" className="form-label">
                Celular <span className="obligatorio">*</span>
              </label>
              <input
                type="text"
                className="form-control"
                id="inputEmail4"
                placeholder="Ceular.."
                required
              />
            </div>

            {/* <div className="col-md-4">
              <label for="inputState" className="form-label">
                State
              </label>
              <select id="inputState" className="form-select">
                <option selected>Choose...</option>
                <option>...</option>
              </select>
            </div> */}

            {/* <div className="col-md-6">
              <label for="inputEmail4" className="form-label">
                vamos a ver
              </label>

              <input type="week" className="form-control" id="inputEmail4" />
            </div> */}
            <div className="col-md-6">
              <label for="inputEmail4" className="form-label">
                Tipo de Corte <span className="obligatorio">*</span>
              </label>
              <input
                type="text"
                className="form-control"
                id="inputEmail4"
                placeholder="Ceular.."
                required
              />

              {/* <textarea
                className="form-control"
                name="textarea"
                id="inputEmail4"
                cols="50"
                placeholder="Tipo de corte"
              ></textarea> */}
            </div>
            <div className="col-md-6">
              <label for="inputEmail4" className="form-label">
                Observaciones
              </label>
              <textarea
                className="form-control"
                name="textarea"
                id="inputEmail4"
                cols="50"
                placeholder="Observaciones"
              ></textarea>
            </div>

            <div className="col-md-4">
              <label for="inputState" className="form-label">
                Forma de Pago <span className="obligatorio">*</span>
              </label>
              <select id="inputState" className="form-select">
                <option selected>Forma de Pago</option>
                <option>Efectivo</option>
                <option>Tarjeta de Credito</option>
                <option>Tarjeta Debito</option>
              </select>
            </div>
            <div className="pago">
              <p>Total a Pagar: $25.000</p>
            </div>

            <div className="col-12">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="gridCheck"
                />
                <label className="form-check-label" for="gridCheck">
                  Check me out <span className="obligatorio">*</span>
                </label>
              </div>
            </div>
            <div className="col-12">
              <button type="submit" className="btn btn-danger">
                Aprobar reserva
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* aqui termina */}
    </div>
  );
};

export default FormularioReservar;
