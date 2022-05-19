// import ItemListContainer from '../components/ItemListContainer/'
import { Carousel } from "react-bootstrap";
import './home.css';

export default function Home () {
    return (
           <div className="fondo">
            {/* <h2> Home </h2> */}
            {/* <ItemListContainer /> */}

            <Carousel className="carousel">
  <Carousel.Item interval={1000}>
    <img
      className="img"
      src="https://www.ahstatic.com/photos/6383_ho_00_p_1024x768.jpg"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3 className="descr">Acceso directo a la playa</h3>
      {/* <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={1000}>
    <img
      className="img"
      src="https://media.staticontent.com/media/pictures/571464d2-6149-4642-b5a5-1fe48fee9f61/1200x630"
      alt="Second slide"
    />
    <Carousel.Caption>
      <h3 className="descr">Piletas</h3>
      {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="img"
      src="https://www.ahstatic.com/photos/6383_rosqd_00_p_1024x768.jpg"
      alt="Third slide"
    />
    <Carousel.Caption>
      <h3 className="descr">Habitaciones</h3>
      {/* <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p> */}
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>

<p className="descripcion">
El Sofitel Jequitimar Guarujá es un hotel de 5 estrellas situado en primera línea de playa en Guarujá y rodeado por la mata Atlántica y ofrece habitaciones con unas vistas maravillosas al océano.
El Sofitel Jequitimar Guarujá alberga varios sitios para comer y ofrece un ambiente romántico para las parejas, así como actividades de ocio para toda la familia y un amplio centro de convenciones con capacidad para un máximo de 1.400 personas.
Los huéspedes encontrarán pistas deportivas, sauna, bañera de hidromasaje, gimnasio, parque infantil y una gran piscina al aire libre. El establecimiento también ofrece varias actividades y servicio de masajes.
El Sofitel Jequitimar Guaruja se halla a 11 km del puerto Spike of the Beach y a 3,7 km de la playa Pereque. El aeropuerto de São Paulo/Congonhas es el más cercano y está a 61 km.
</p>
        </div>
     
    );

}