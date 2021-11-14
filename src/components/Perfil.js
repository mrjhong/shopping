import { Link } from "react-router-dom";
import React from "react";

import "../css/pefil.css";

const Perfil = () => {
  return (
    <div className="contenedor">
      <div className="fondo"></div>
      <div className="contenido">
        <div className="imagen">
          <img
            className="conteImagen"
            src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200"
            alt=""
          />
        </div>

        <h1 className="conttitle">Maritza Larrota</h1>
        <h5 className="conttitlee">Barbero de Profesión aproximadamente 3 años</h5>

        <div className="redesPer">
          {/* colocar una direcion con un icono de whatpsapp en react */}
          <Link
            to="https://www.facebook.com/maritza.larrota.9"
            className="editarRedes"
          >
            <i class="bi bi-facebook"></i>
          </Link>

          {/* colocar una direcion con un icono de instagram en react */}
          <Link to="/perfil/editar" className="editarRedes">
            <i class="bi bi-instagram"></i>
          </Link>

          {/* colocar una direcion con un icono de twitter en react */}
          <Link to="/perfil/editar" className="editarRedes">
            <i class="bi bi-twitter"></i>
          </Link>
          {/* colocar una direcion con un icono de whatpsapp en react */}
          <Link to="/perfil/editar" className="editarRedes">
            <i class="bi bi-whatsapp"></i>
          </Link>
        </div>
        <div className="cinteneparra">
                  <p className="contParrafo">
                      <h2 className="sobre">Sobre mí</h2>
          Maritza, un artista de considerable rango, el nombre adoptado por Nick Murphy, criado en Melbourne y  <span className="contParrafo2">residente en Brooklyn, escribe,  interpreta y graba toda su propia música, dándole una sensación cálida e íntima con una sólida estructura de ritmo. Un artista de considerable alcance.
            </span>
          </p>
          {/* */}
          {/* <span className="DatosPerso">Edad: 15 Años</span> <span className="DatosPerso">Sexo: Masculino</span> <span className="DatosPerso"> Ciudad: Medellin </span> <span className="DatosPerso"> Pais: Colombia</span> <span className="DatosPerso"> Telefono: 3123456789</span> <span className="DatosPerso"> Correo: yego0210@gmail.com </span> <span className="DatosPerso"> Web: www.yego.com</span>   */}
        </div>
        <h1 className="tituloPortafolio">Mi portafolio:</h1>
        <div className="portafolio">
          {/* Hacer un portafolio de trabajos  y algo mas   */}

          {/* portafolio 1 */}

          <div className="contenidoPortafolio">
            <div className="">
              <img
                className="imagenPortafolio"
                src="https://i.pinimg.com/550x/06/27/d2/0627d215a31498fe0879f60f59a59199.jpg"
                alt=""
              />
              <p className="tituloPortafolio2">Lorem ipsum dolor sit amet</p>
            </div>
          </div>

          <div className="contenidoPortafolio2">
            <img
              className="imagenPortafolio"
              src="https://http2.mlstatic.com/D_NQ_NP_677477-MCO41746806048_052020-O.jpg"
              alt=""
            />
            <p className="tituloPortafolio2">Lorem ipsum dolor sit amet</p>
          </div>

          <div className="contenidoPortafolio2">
            <img
              className="imagenPortafolio"
              src="https://www.carrusel.edu.co/wp-content/themes/yootheme/cache/foto17-2-38aa92ee.jpeg"
              alt=""
            />
            <p className="tituloPortafolio2">Lorem ipsum dolor sit amet</p>
          </div>
                  {/* portafolio 4 */}
                  
        </div>
      </div>
    </div>
  );
};

export default Perfil;
