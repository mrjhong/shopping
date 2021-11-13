import React from "react";


import "../css/pefil.css";

const Perfil = () => {
  return (
    <div className="contenedor">
      <div className="fondo">
        <p className="titulo">Perfil</p>
      </div>
          <div className="contenido">
              
              <div className="imagen">
                  <img className="conteImagen" src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200" alt="" />
                </div>
              
              
              <h1 className="conttitle">Maritza Larrota</h1>
              <h5>Profecion</h5>
              <p className="contParrafo">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem!
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem!
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem!
              </p>

              <div className="portafolio">
                  {/* coloracar un portafolio de images */}
                    
                   <div className="imagen">
                       <img className="conteImagen" src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200" alt="portafolio" />
                     </div>


                  </div>
      </div>
    </div>
  );
};

export default Perfil;
