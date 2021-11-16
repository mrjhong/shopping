import { Link } from '@mui/material'
import React from 'react'

import FelzTech  from '../assets/img/footer/FelzTech-ACTAS.svg'

import '../css/Footer.css'

const Footer = () => {
    return (
        <div className="Footer-prinm">
            
            {/* Hacer on footer moderno */}
            <footer>

<div className="container__footer">
    <div className="box__footer">
        <div className="logo">
            <img src={ FelzTech } alt="" />
        </div>
        <div className="terms">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas impedit cum cumque velit libero officiis quam doloremque reprehenderit quae corporis! Delectus architecto officia praesentium atque laudantium, nam deleniti sapiente deserunt.</p>
        </div>
    </div>
    <div className="box__footer">
        <h2>Soluciones</h2>
        <Link className="fo" to="https://www.google.com">App Desarrollo</Link>
        <Link className="fo" to="#">App Marketing</Link>
        <Link className="fo" to="#">IOS Desarrollo</Link>
        <Link className="fo" to="#">Android Desarrollo</Link>
    </div>

    <div className="box__footer">
        <h2>Compañia</h2>
        <Link className="fo" to="#">Acerca de</Link>
        <Link className="fo" to="#">Trabajos</Link>
        <Link className="fo" to="#">Procesos</Link>
        <Link className="fo" to="#">Servicios</Link>              
    </div>

    <div className="box__footer">
        <h2>Redes Sociales</h2>
        <Link className="fo" to="#"> <i class="fab fa-facebook-square"></i> Facebook</Link>
        <Link className="fo" to="#"><i class="fab fa-twitter-square"></i> Twitter</Link>
        <Link className="fo" to="#"><i class="fab fa-linkedin"></i> Linkedin</Link>
        <Link className="fo" to="#"><i class="fab fa-instagram-square"></i> Instagram</Link>
    </div>

</div>

<div className="box__copyright">
    <hr/>
    <p className="parra">Todos los derechos reservados © 2021 <b>G-START</b></p>
</div>
</footer>
            
        </div>
    )
}

export default Footer
