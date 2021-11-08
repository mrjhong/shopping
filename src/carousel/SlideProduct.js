import React from 'react';
import {Slideshow, Slide, TextoSlide} from './Carousel';
import './estilos.css';


const SlideProduct= () => {
	return (
        <main>
        <Slideshow controles={true} autoplay={true} velocidad="250">       
                <Slide>
					<a href="#">
						<img src="https://thumbs.dreamstime.com/b/logo-vector-para-barbershop-logotipo-vectorial-tablero-de-anuncios-decorativo-negro-con-accesorios-belleza-profesional-dorados-196793998.jpg"alt=""/>
					</a>
					<TextoSlide>
						<p>15% descuento en productos Apple</p>
					</TextoSlide>
				</Slide>
				<Slide>
					<a href="#">
						<img src="https://previews.123rf.com/images/soifer/soifer1803/soifer180300063/97160132-barber-shop-logo-letrero-de-ne%C3%B3n-elementos-de-dise%C3%B1o-del-logo-se-puede-usar-como-encabezado-o-planti.jpg"alt=""/>
					</a>
					<TextoSlide>
						<p>15% descuento en productos Apple</p>
					</TextoSlide>
				</Slide>
				<Slide>
					<a href="#">
						<img src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/barber-shop-design-template-a5839e60d342e6dafe51cf9a413870ee_screen.jpg?ts=1593963607"alt=""/>
					</a>
					<TextoSlide>
						<p>15% descuento en productos Apple</p>
					</TextoSlide>
				</Slide>
				<Slide>
					<a href="#">
						<img src="https://lh3.googleusercontent.com/proxy/q89FcDHnZ3CWzx2F1PWQC-OSONU_BzkiWNQ8B4A3lc6x8aieYUMzC6BgW8R040hOlVPTVEJxaaTDh2wAN5UoFKGWSfhr2UT-yUuKLod-"alt=""/>
					</a>
					<TextoSlide>
						<p>15% descuento en productos Apple</p>
					</TextoSlide>
				</Slide>
        </Slideshow>
        </main>
    )
}

export default SlideProduct