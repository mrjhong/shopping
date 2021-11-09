import React from 'react';
import {Slideshow, Slide, TextoSlide} from './Carousel';
import './estilos.css';


const SlideProduct= () => {
	return (
        <main>
        <Slideshow controles={true} autoplay={true} velocidad="250">       
                <Slide>
					<a href="#">
						<img src="https://wpdirecto.com/wp-content/uploads/2016/09/barber-pro.jpg"alt=""/>
					</a>
					<TextoSlide>
						<p>15% descuento en productos Apple</p>
					</TextoSlide>
				</Slide>
				<Slide>
					<a href="#">
						<img src="https://scontent.fbog9-1.fna.fbcdn.net/v/t1.6435-9/30740408_2010886672272661_7865036192239058944_n.png?_nc_cat=111&ccb=1-5&_nc_sid=6e5ad9&_nc_ohc=ZosnxjfjoF0AX9zJybo&_nc_ht=scontent.fbog9-1.fna&oh=1c71a75e031b76f78a20554c3f1a4399&oe=61AE85A7"alt=""/>
					</a>
					<TextoSlide>
						<p>15% descuento en productos Apple</p>
					</TextoSlide>
				</Slide>
				<Slide>
					<a href="#">
						<img src="http://thebarberferhat.at/bild1.jpg"alt=""/>
					</a>
					<TextoSlide>
						<p>15% descuento en productos Apple</p>
					</TextoSlide>
				</Slide>
				<Slide>
					<a href="#">
						<img src="https://www.wallpaperuse.com/wallp/27-276981_m.jpg"alt=""/>
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