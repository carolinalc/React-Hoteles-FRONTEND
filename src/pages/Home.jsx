import React from 'react'
import Carousel from 'react-bootstrap/Carousel'


function Home() {
  return (
    <div>
      <br />
      <h1 className='titleHome'>Wellcome to the React Hotel</h1>
      <Carousel className="carousel" fade="true">
        <Carousel.Item >
          <img
            className="d-block mx-auto"
            src="https://res.cloudinary.com/dm5zetu40/image/upload/v1654764500/Imagenes%20hoteles/hoteles-originales-13_omdjki.jpg"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block mx-auto"
            src="https://res.cloudinary.com/dm5zetu40/image/upload/v1654764501/Imagenes%20hoteles/rural_il4tqc.jpg"
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block mx-auto"
            src="https://res.cloudinary.com/dm5zetu40/image/upload/v1654764500/Imagenes%20hoteles/578453891_184024305_1706x960_sepp2k.webp"
            alt="Third slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block mx-auto"
            src="https://res.cloudinary.com/dm5zetu40/image/upload/v1654764500/Imagenes%20hoteles/hoteles-originales-11_cyqrwt.jpg"
            alt="Fourt slide"
          />
        </Carousel.Item>
      </Carousel>
    </div>

  )
}

export default Home